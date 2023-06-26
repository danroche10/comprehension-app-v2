import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";

function Posts(props) {
  const { selectTopics, pushMessageToSnackbar, topics, setTopics } = props;

  useEffect(() => {
    selectTopics();
  }, [selectTopics]);

  return (
    <PostContent
      topics={topics}
      setTopics={setTopics}
      pushMessageToSnackbar={pushMessageToSnackbar}
    />
  );
}

Posts.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTopics: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectTopics: PropTypes.func.isRequired,
};

export default Posts;
