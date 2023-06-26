import React, { useState, useCallback } from "react";
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

const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between",
  },
};

const rowsPerPage = 25;

function TopicContent(props) {
  const { topics, classes } = props;
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
                <Grid item xs={6} sm={4} md={3} key={topic.id}>
                  <SelfAligningImage
                    src={topic.src}
                    title={topic.name}
                    timeStamp={topic.timestamp}
                    options={[
                      {
                        name: "Select",
                        onClick: () => {
                          onPick(topic);
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
        <Typography variant='h6'>Topics</Typography>
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
  //openAddTopicModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  set: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles)(TopicContent);
