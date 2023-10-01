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
    const contentString = getContentAsString();

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Define the page width, line height, and starting y-position
    const pageWidth = pdf.internal.pageSize.getWidth() - 20; // minus margins
    const lineHeight = 6.5; // height for each line
    let yPos = 10; // starting y-position

    // Extract and separate out the comprehension text and questions and answers
    const headerRegex =
      /Comprehension text|Comprehension questions and answers/g;
    const sections = contentString
      .split(headerRegex)
      .filter((section) => section.trim() !== "");

    // Format the text for headers and content
    ["Comprehension text", ...sections].forEach((section, index) => {
      if (headerRegex.test(section)) {
        pdf.setFontSize(14);
        pdf.setFont("bold");
        yPos += 10; // extra space before headers
      } else {
        pdf.setFontSize(10);
        pdf.setFont("normal");
        yPos += 5; // space between header and content
      }

      // Split the text into lines
      const lines = pdf.splitTextToSize(section, pageWidth);

      // Loop through each line and add it to the PDF, considering pagination
      for (let i = 0; i < lines.length; i++) {
        if (yPos > pdf.internal.pageSize.getHeight() - 10) {
          pdf.addPage();
          yPos = 10;
        }
        pdf.text(lines[i], 10, yPos);
        yPos += lineHeight;
      }

      yPos += 5; // extra space after each section
    });

    // Save the PDF
    pdf.save("download.pdf");
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getContentAsString = () => {
    // Extract the relevant topic and subTopic based on the chosen ones
    const topic = filteredTopics.filter(
      (topic) => topic.name === chosenTopic
    )[0];
    const subTopic = topic.subTopics.filter(
      (subTopic) => subTopic.Title === chosenSubTopic
    )[0];

    // Extract the comprehension text
    const comprehensionText = subTopic.comprenhensionText.join(" ");

    // Extract questions and answers
    const questionsAndAnswers = subTopic.comprehensionQuestionsAndAnswers
      .map((qaPair) => `Question: ${qaPair.question} Answer: ${qaPair.answer}`)
      .join(" ");

    // Combine all the extracted content
    const finalContent = `Comprehension text ${comprehensionText} Comprehension questions and answers ${questionsAndAnswers}`;

    return finalContent;
  };

  useEffect(() => {
    const pascalCaseSubject = capitalizeFirstLetter(subject);
    setChosenSubject(pascalCaseSubject);
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
        <div className='App'>
          <button onClick={downloadAsPDF}>Download as PDF</button>
        </div>
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
