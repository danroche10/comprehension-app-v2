import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Divider, Toolbar, Typography, Paper, Box } from "@mui/material";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";
import "react-quill/dist/quill.snow.css";
import { jsPDF } from "jspdf";

function Topics(props) {
  const { topics } = props;
  const { subject } = useParams();
  const [chosenYearGroup, setChosenYearGroup] = useState("");
  const [chosenTopic, setChosenTopic] = useState("");
  const [chosenSubTopic, setChosenSubTopic] = useState("");
  const [chosenSubject, setChosenSubject] = useState(subject || "");

  const downloadAsPDF = () => {
    const contentArray = getTextAndQuestionsAsArray();
    const pdf = new jsPDF();

    // Define constants
    const pageWidth = pdf.internal.pageSize.getWidth() - 20;
    const lineHeight = 6.5;
    let yPos = 10;

    // Title
    pdf.setFontSize(20);
    pdf.setFont("bold");
    pdf.text(chosenSubTopic, 10, yPos);
    yPos += lineHeight + 10; // Additional space after the title

    // Comprehension Text
    pdf.setFontSize(12);
    pdf.setFont("normal");
    const comprehensionText = contentArray[0][chosenSubTopic]; // Assumes first item is the text
    const comprehensionLines = pdf.splitTextToSize(
      comprehensionText,
      pageWidth
    );

    comprehensionLines.forEach((line) => {
      pdf.text(line, 10, yPos);
      yPos += lineHeight;
    });

    yPos += 10; // Additional space before questions

    // Questions
    pdf.setFontSize(20);
    pdf.setFont("bold");
    pdf.text("Questions", 10, yPos);
    yPos += lineHeight + 5; // Additional space after "Questions"

    // Loop through questions (skipping first item as it's the text)
    pdf.setFontSize(12);

    contentArray.slice(1).forEach((questionObj) => {
      const questionLabel = Object.keys(questionObj)[0];
      const questionText = questionObj[questionLabel];
      const questionLines = pdf.splitTextToSize(questionText, pageWidth);

      // Check if a new page is needed before adding the question label
      if (yPos > pdf.internal.pageSize.getHeight() - 10) {
        pdf.addPage();
        yPos = 10;
      }

      pdf.text(`${questionLabel}`, 10, yPos);
      yPos += lineHeight;

      questionLines.forEach((line) => {
        // Check if a new page is needed before adding the question text line
        if (yPos > pdf.internal.pageSize.getHeight() - 10) {
          pdf.addPage();
          yPos = 10;
        }

        pdf.setFont("normal");
        pdf.text(line, 10, yPos);
        yPos += lineHeight;
      });

      yPos += 5; // Space between questions
    });

    // Save the PDF
    pdf.save(`${chosenSubTopic}-text-and-questions.pdf`);
  };

  const downloadQAAsPDF = () => {
    const answersArray = getAnswersAsArray();
    const questionsArray = getTextAndQuestionsAsArray();
    const pdf = new jsPDF();

    // Margins
    const leftMargin = 10;
    const rightMargin = 10;
    const topMargin = 10;
    const bottomMargin = 15;

    let yPos = topMargin;
    const lineHeight = 7; // Adjust as needed

    // Header
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.text(chosenSubTopic, leftMargin, yPos);
    yPos += 15;

    // Title for the Q&A section
    pdf.setFontSize(16);
    pdf.setFont("normal");
    pdf.text("Comprehension questions and answers", leftMargin, yPos);
    yPos += 10;

    // Questions and Answers Text Size
    pdf.setFontSize(12);

    const maxWidth =
      pdf.internal.pageSize.getWidth() - leftMargin - rightMargin;

    // Loop through questions and answers and add them to the PDF
    // Loop through questions and answers and add them to the PDF
    questionsArray.slice(1).forEach((questionObj, index) => {
      const questionText = questionObj[`Question ${index + 1}`];
      const answerObj = answersArray[index];
      const answerText = answerObj[`Answer ${index + 1}`];

      // Question
      pdf.setFont("helvetica", "bold");
      pdf.text(`Question ${index + 1}:`, leftMargin, yPos);
      yPos += lineHeight; // Move down for question text
      pdf.setFont("helvetica", "normal");
      const wrappedQuestion = pdf.splitTextToSize(questionText, maxWidth);
      pdf.text(wrappedQuestion, leftMargin, yPos);
      yPos += wrappedQuestion.length * lineHeight;

      // Answer
      pdf.setFont("helvetica", "bold");
      pdf.text(`Answer ${index + 1}:`, leftMargin, yPos);
      yPos += lineHeight; // Move down for answer text
      pdf.setFont("helvetica", "normal");
      const wrappedAnswer = pdf.splitTextToSize(answerText, maxWidth);
      pdf.text(wrappedAnswer, leftMargin, yPos);
      yPos += wrappedAnswer.length * lineHeight + 5; // Extra space after each answer

      // Check if a new page is needed
      if (yPos >= pdf.internal.pageSize.getHeight() - bottomMargin) {
        pdf.addPage();
        yPos = topMargin;
      }
    });

    // Save the PDF
    pdf.save(`${chosenSubTopic}_Q&A.pdf`);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getTextAndQuestionsAsArray = () => {
    // Extract the relevant topic and subTopic based on the chosen ones
    const topic = filteredTopics.filter(
      (topic) => topic.name === chosenTopic
    )[0];
    const subTopic = topic.subTopics.filter(
      (subTopic) => subTopic.Title === chosenSubTopic
    )[0];

    // Extract the comprehension text
    const textAndQuestionsArray = [];

    const comprehensionText = subTopic.comprenhensionText.join(" ");
    const titleAndTextObject = {
      [chosenSubTopic]: comprehensionText,
    };

    textAndQuestionsArray.push(titleAndTextObject);

    // Extract questions and answers
    const questions = subTopic.comprehensionQuestionsAndAnswers.map(
      (qaPair, index) => ({
        [`Question ${index + 1}`]: qaPair.question,
      })
    );

    textAndQuestionsArray.push(...questions);

    // Combine all the extracted content

    return textAndQuestionsArray;
  };

  const getAnswersAsArray = () => {
    // Extract the relevant topic and subTopic based on the chosen ones
    const topic = filteredTopics.filter(
      (topic) => topic.name === chosenTopic
    )[0];
    const subTopic = topic.subTopics.filter(
      (subTopic) => subTopic.Title === chosenSubTopic
    )[0];

    const answersArray = subTopic.comprehensionQuestionsAndAnswers.map(
      (qaPair, index) => ({
        [`Answer ${index + 1}`]: qaPair.answer,
      })
    );

    return answersArray;
  };

  useEffect(() => {
    const pascalCaseSubject = capitalizeFirstLetter(subject);
    setChosenSubject(pascalCaseSubject);
  }, [subject]);

  useEffect(() => {
    setChosenYearGroup("");
  }, [subject]);

  const onSelectTopicButtonClick = (topicName) => {
    setChosenTopic(topicName);
    setChosenSubTopic("");
  };

  const onYearGroupButtonClick = (yearGroup) => {
    setChosenTopic("");
    setChosenSubTopic("");
    let chosenYearGroupString = "Year " + yearGroup;
    setChosenYearGroup(chosenYearGroupString);
  };

  const filteredArray = topics
    .filter((topic) => topic.subjectName === chosenSubject)
    .filter((topic) => topic.yearGroupName === chosenYearGroup);
  console.log(topics);
  const filteredTopics =
    filteredArray.length > 0 ? filteredArray[0].topics : [];

  const printYearGroupGrid = useCallback(() => {
    return (
      <Box p={1}>
        <Grid container spacing={1}>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((year) => (
            <Grid item xs={6} sm={4} md={2} key={year}>
              <Box
                width={100}
                height={100}
                display='flex'
                alignItems='center'
                justifyContent='center'
                bgcolor='white'
                color='black'
              >
                {year}
              </Box>
              <Box display='flex' justifyContent='center' marginTop={1}>
                <button onClick={() => onYearGroupButtonClick(year)}>
                  Select Year {year}
                </button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }, [topics, chosenTopic, chosenSubTopic]);

  const printImageGrid = useCallback(() => {
    if (topics.length > 0) {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            {filteredTopics.map((topic) => (
              <Grid item xs={6} sm={4} md={3} key={topic.id}>
                <SelfAligningImage
                  src={topic.src}
                  title={topic.name}
                  timeStamp={topic.timestamp}
                />
                <Box display='flex' justifyContent='center'>
                  <button onClick={() => onSelectTopicButtonClick(topic.name)}>
                    Select Topic
                  </button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
  }, [chosenYearGroup, topics, chosenTopic]);

  const printImageGrid2 = useCallback(() => {
    if (chosenTopic !== "") {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            <ul>
              {filteredTopics
                .filter((topic) => topic.name === chosenTopic)[0]
                .subTopics.map((subTopic) => (
                  <li key={subTopic.Title}>
                    {subTopic.Title}
                    <button onClick={() => setChosenSubTopic(subTopic.Title)}>
                      Select Sub-topic
                    </button>
                  </li>
                ))}
            </ul>
          </Grid>
        </Box>
      );
    } else {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            Please choose a topic
          </Grid>
        </Box>
      );
    }
  }, [chosenYearGroup, topics, chosenTopic]);

  const printImageGrid3 = useCallback(() => {
    if (chosenTopic !== "" && chosenSubTopic !== "") {
      return (
        <>
          <Toolbar>
            <Typography variant='h6'>Comprehension Resources</Typography>
          </Toolbar>
          <Box p={1}>
            <div className='App'>
              <button onClick={downloadAsPDF}>
                Download text and questions PDF
              </button>
              <br></br>
              <button onClick={downloadQAAsPDF}>
                Download questions and answers PDF
              </button>
            </div>
            <Grid container spacing={1}>
              <div>
                <h2>Comprehension text</h2>
                {filteredTopics
                  .filter((topic) => topic.name === chosenTopic)[0]
                  .subTopics.filter(
                    (subTopic) => subTopic.Title === chosenSubTopic
                  )[0]
                  .comprenhensionText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                <br></br>
                <h2>Comprehension questions and answers</h2>{" "}
                <ol>
                  {filteredTopics
                    .filter((topic) => topic.name === chosenTopic)[0]
                    .subTopics.filter(
                      (subTopic) => subTopic.Title === chosenSubTopic
                    )[0]
                    .comprehensionQuestionsAndAnswers.map(
                      (questionAndAnswerPair) => (
                        <li key={questionAndAnswerPair.question}>
                          <b>Question: </b>
                          {questionAndAnswerPair.question}
                          <br></br>
                          <b>Answer: </b>
                          {questionAndAnswerPair.answer}
                          <br></br>
                          <br></br>
                        </li>
                      )
                    )}
                </ol>{" "}
              </div>
            </Grid>
          </Box>
        </>
      );
    } else if (chosenTopic !== "" && chosenSubTopic === "") {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            Please choose a sub-topic
          </Grid>
        </Box>
      );
    }
  }, [chosenYearGroup, topics, chosenTopic, chosenSubTopic]);

  return (
    <>
      {" "}
      <Paper>
        <Toolbar>
          <Typography variant='h6'>Year Group</Typography>
        </Toolbar>
        <Divider />
        {printYearGroupGrid()}
      </Paper>
      <Paper>
        <Toolbar>
          <Typography variant='h6'>Topics</Typography>
        </Toolbar>
        <Divider />
        {printImageGrid()}
      </Paper>
      <Paper>
        <Toolbar>
          <Typography variant='h6'>SubTopics</Typography>
        </Toolbar>
        <Divider />
        {printImageGrid2()}
      </Paper>
      <Paper>
        <Divider />
        {printImageGrid3()}
      </Paper>
    </>
  );
}

Topics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTopics: PropTypes.func.isRequired,
  selectTopics: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  set: PropTypes.func.isRequired,
};

export default Topics;
