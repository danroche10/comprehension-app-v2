import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TopicContent from "./TopicContent";
import SubTopicContent from "./SubTopicContent";

function Topics(props) {
  const { selectTopics, pushMessageToSnackbar, topics, setTopics } = props;

  useEffect(() => {
    selectTopics();
  }, [selectTopics]);

  return (
    <>
      {" "}
      <TopicContent
        topics={topics}
        setTopics={setTopics}
        pushMessageToSnackbar={pushMessageToSnackbar}
      />
      <SubTopicContent
        chosenTopic={localStorage.getItem("chosen-topic")}
        topics={topics}
        setTopics={setTopics}
        pushMessageToSnackbar={pushMessageToSnackbar}
      />
    </>
  );
}

Topics.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTopics: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectTopics: PropTypes.func.isRequired,
};

export default Topics;
