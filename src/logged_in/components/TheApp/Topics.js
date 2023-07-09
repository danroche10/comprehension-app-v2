import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Grid, Divider, Toolbar, Typography, Paper, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";
import ConfirmationDialog from "../../../shared/components/ConfirmationDialog";

function Topics(props) {
  const { topics } = props;

  const [isSelectTopicDialogOpen, setIsSelectTopicDialogOpen] = useState(false);
  const [chosenTopic, setChosenTopic] = useState("");
  const [chosenSubTopic, setChosenSubTopic] = useState("");

  const closeSelectTopicDialog = useCallback(() => {
    setIsSelectTopicDialogOpen(false);
  }, [setIsSelectTopicDialogOpen]);

  const printImageGrid = useCallback(() => {
    if (topics.length > 0) {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            {topics.map((topic) => (
              <Grid item xs={6} sm={4} md={3} key={topic.id}>
                <SelfAligningImage
                  src={topic.src}
                  title={topic.name}
                  timeStamp={topic.timestamp}
                  options={[
                    {
                      name: "Select",
                      onClick: () => {
                        setChosenTopic(topic.name);
                        setChosenSubTopic("");
                      },
                      icon: <DeleteIcon />,
                    },
                  ]}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
  }, [topics, chosenTopic]);

  const printImageGrid2 = useCallback(() => {
    if (chosenTopic !== "") {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            <ul>
              {topics
                .filter((topic) => topic.name === chosenTopic)[0]
                .subTopics.map((subTopic) => (
                  <li key={subTopic.Title}>
                    {subTopic.Title}
                    <button onClick={() => setChosenSubTopic(subTopic.Title)}>
                      Select
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
  }, [topics, chosenTopic]);

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
                {
                  topics
                    .filter((topic) => topic.name === chosenTopic)[0]
                    .subTopics.filter(
                      (subTopic) => subTopic.Title === chosenSubTopic
                    )[0].comprenhensionText
                }
                <br></br>
                <h2>Comprehension questions and answers</h2>{" "}
                <ol>
                  {topics
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
  }, [topics, chosenTopic, chosenSubTopic]);

  return (
    <>
      {" "}
      <Paper>
        <Toolbar>
          <Typography variant='h6'>Topics</Typography>
        </Toolbar>
        <Divider />
        {printImageGrid()}
        <ConfirmationDialog
          open={isSelectTopicDialogOpen}
          title='Confirmation'
          content='change this message'
          onClose={closeSelectTopicDialog}
        />
      </Paper>
      <Paper>
        <Toolbar>
          <Typography variant='h6'>SubTopics</Typography>
        </Toolbar>
        <Divider />
        {printImageGrid2()}
        <ConfirmationDialog
          open={isSelectTopicDialogOpen}
          title='Confirmation'
          content='change this message'
          onClose={closeSelectTopicDialog}
        />
      </Paper>
      <Paper>
        <Divider />
        {printImageGrid3()}
        <ConfirmationDialog
          open={isSelectTopicDialogOpen}
          title='Confirmation'
          content='change this message'
          onClose={closeSelectTopicDialog}
        />
      </Paper>
    </>
  );
}

Topics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTopics: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectTopics: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  set: PropTypes.func.isRequired,
};

export default Topics;
