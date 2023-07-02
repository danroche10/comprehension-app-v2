import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TablePagination,
  Divider,
  Toolbar,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import DeleteIcon from "@mui/icons-material/Delete";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import { TopicSharp } from "@mui/icons-material";

const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between",
  },
};

const rowsPerPage = 25;

function TopicContent(props) {
  const { topics, classes, chosenTopic } = props;
  const [page, setPage] = useState(0);
  const [isSelectTopicDialogOpen, setIsSelectTopicDialogOpen] = useState(false);
  const [isSelectTopicDialogLoading, setIsSelectTopicDialogLoading] =
    useState(false);

  const closeSelectTopicDialog = useCallback(() => {
    setIsSelectTopicDialogOpen(false);
    setIsSelectTopicDialogLoading(false);
  }, [setIsSelectTopicDialogOpen, setIsSelectTopicDialogLoading]);

  const selectTopic = useCallback(() => {}, []);

  const onPick = useCallback(() => {}, []);

  useEffect(() => {
    console.log(chosenTopic);
  }, []);

  const handleChangePage = useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const printImageGrid = useCallback(() => {
    if (topics.length > 0) {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            {topics
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((topic) => (
                <ul>
                  <li>{topic.subTopics}</li>
                </ul>
              ))}
          </Grid>
        </Box>
      );
    }
    return (
      <Box m={2}>
        <HighlightedInformation>
          No posts added yet. Click on &quot;NEW&quot; to create your first one.
        </HighlightedInformation>
      </Box>
    );
  }, [topics, onPick, page]);

  return (
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>SubTopics</Typography>
      </Toolbar>
      <Divider />
      {printImageGrid()}
      <TablePagination
        component='div'
        count={topics.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onPageChange={handleChangePage}
        classes={{
          select: classes.dNone,
          selectIcon: classes.dNone,
          actions: topics.length > 0 ? classes.dBlock : classes.dNone,
          caption: topics.length > 0 ? classes.dBlock : classes.dNone,
        }}
        labelRowsPerPage=''
      />
      <ConfirmationDialog
        open={isSelectTopicDialogOpen}
        title='Confirmation'
        content='change this message'
        onClose={closeSelectTopicDialog}
        loading={isSelectTopicDialogLoading}
        onConfirm={selectTopic}
      />
    </Paper>
  );
}

TopicContent.propTypes = {
  classes: PropTypes.object.isRequired,
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  set: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles)(TopicContent);
