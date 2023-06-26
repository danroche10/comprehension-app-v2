import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";

function Posts(props) {
  const { selectPosts, pushMessageToSnackbar, posts, setPosts } = props;

  useEffect(() => {
    selectPosts();
  }, [selectPosts]);

  return (
    <PostContent
      topics={posts}
      setPosts={setPosts}
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
  setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired,
};

export default Posts;
