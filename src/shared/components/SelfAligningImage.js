import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";

const styles = {
  imageContainer: {
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
    position: "relative",
    height: "275px",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
};

function SelfAligningImage(props) {
  const { classes, src, title, roundedBorder, theme } = props;
  const img = useRef();
  const [hasMoreWidthThanHeight, setHasMoreWidthThanHeight] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoad = useCallback(() => {
    if (img.current.naturalHeight < img.current.naturalWidth) {
      setHasMoreWidthThanHeight(true);
    } else {
      setHasMoreWidthThanHeight(false);
    }
    setHasLoaded(true);
  }, [img, setHasLoaded, setHasMoreWidthThanHeight]);

  return (
    <div className={classes.imageContainer} style={{ position: "relative" }}>
      <img
        style={{
          height: "100%",
          width: hasMoreWidthThanHeight ? "auto" : "100%",
          display: hasLoaded ? "block" : "none",
          borderRadius: roundedBorder ? theme.shape.borderRadius : 0,
        }}
        ref={img}
        className={classes.image}
        onLoad={onLoad}
        src={src}
        alt=''
      />
      <div
        style={{
          display: "flex",
          alignItems: "center", // Vertical alignment
          justifyContent: "center", // Horizontal alignment
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "30%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Translucent black background
          color: "white", // Text color
          padding: "5px",
          textAlign: "center",
          borderRadius: roundedBorder
            ? `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`
            : 0, // If you want the rounded bottom borders
        }}
      >
        {title}
      </div>
    </div>
  );
}

SelfAligningImage.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string,
  roundedBorder: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(SelfAligningImage);
