import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Grid, Divider, Toolbar, Typography, Paper, Box } from "@mui/material";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";

function Topics(props) {
  const { topics } = props;

  const [chosenYearGroup, setChosenYearGroup] = useState("");
  const [chosenTopic, setChosenTopic] = useState("");
  const [chosenSubTopic, setChosenSubTopic] = useState("");

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

  const filteredArray = topics.filter(
    (topic) => topic.yearGroupName === chosenYearGroup
  );
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
