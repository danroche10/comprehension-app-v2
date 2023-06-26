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

function PostContent(props) {
  const { posts, classes } = props;
  const [page, setPage] = useState(0);
  const [isSelectPostDialogOpen, setIsSelectPostDialogOpen] = useState(false);
  const [isSelectPostDialogLoading, setIsSelectPostDialogLoading] =
    useState(false);

  const closeSelectPostDialog = useCallback(() => {
    setIsSelectPostDialogOpen(false);
    setIsSelectPostDialogLoading(false);
  }, [setIsSelectPostDialogOpen, setIsSelectPostDialogLoading]);

  const selectPost = useCallback(() => {});

  const onPick = useCallback(() => {}, []);

  const handleChangePage = useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const printImageGrid = useCallback(() => {
    if (posts.length > 0) {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((post) => (
                <Grid item xs={6} sm={4} md={3} key={post.id}>
                  <SelfAligningImage
                    src={post.src}
                    title={post.name}
                    timeStamp={post.timestamp}
                    options={[
                      {
                        name: "Select",
                        onClick: () => {
                          onPick(post);
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
  }, [posts, onPick, page]);

  return (
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>Topics</Typography>
      </Toolbar>
      <Divider />
      {printImageGrid()}
      <TablePagination
        component='div'
        count={posts.length}
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
          actions: posts.length > 0 ? classes.dBlock : classes.dNone,
          caption: posts.length > 0 ? classes.dBlock : classes.dNone,
        }}
        labelRowsPerPage=''
      />
      <ConfirmationDialog
        open={isSelectPostDialogOpen}
        title='Confirmation'
        content='Do you really want to delete the post?'
        onClose={closeSelectPostDialog}
        loading={isSelectPostDialogLoading}
        onConfirm={selectPost}
      />
    </Paper>
  );
}

PostContent.propTypes = {
  openAddPostModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles)(PostContent);
