import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";

function Posts(props) {
  const { selectPosts, pushMessageToSnackbar, posts, setTopics } = props;

  useEffect(() => {
    selectPosts();
  }, [selectPosts]);

  return (
    <PostContent
      topics={posts}
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
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTopics: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired,
};

export default Posts;
