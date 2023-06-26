import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import ColorfulChip from "../../../shared/components/ColorfulChip";
import unixToDateString from "../../../shared/functions/unixToDateString";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";

const styles = (theme) => ({
  tableWrapper: {
    overflowX: "auto",
    width: "100%",
  },
  blackBackground: {
    backgroundColor: theme.palette.primary.main,
  },
  contentWrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    width: "100%",
  },
  dBlock: {
    display: "block !important",
  },
  dNone: {
    display: "none !important",
  },
  firstData: {
    paddingLeft: theme.spacing(3),
  },
});

const rows = [
  {
    id: "description",
    numeric: false,
    label: "Topic",
  },
  {
    id: "balanceChange",
    numeric: false,
    label: "Sub-topic",
  },
  {
    id: "date",
    numeric: false,
    label: "Date",
  },
  {
    id: "paidUntil",
    numeric: false,
    label: "Action",
  },
];

const rowsPerPage = 25;

function SubscriptionTable(props) {
  const { resources, theme, classes } = props;
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback(
    (_, page) => {
      setPage(page);
    },
    [setPage]
  );

  if (resources.length > 0) {
    return (
      <div className={classes.tableWrapper}>
        <Table aria-labelledby='tableTitle'>
          <EnhancedTableHead rowCount={resources.length} rows={rows} />
          <TableBody>
            {resources
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((resource, index) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell
                    component='th'
                    scope='row'
                    className={classes.firstData}
                  >
                    {resource.description}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {true ? (
                      <ColorfulChip
                        label={resource.balanceChange}
                        color={theme.palette.secondary.main}
                      />
                    ) : (
                      <ColorfulChip
                        label={resource.balanceChange}
                        color={theme.palette.error.dark}
                      />
                    )}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {unixToDateString(resource.timestamp)}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {resource.paidUntil
                      ? unixToDateString(resource.paidUntil)
                      : ""}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component='div'
          count={resources.length}
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
            actions: resources.length > 0 ? classes.dBlock : classes.dNone,
            caption: resources.length > 0 ? classes.dBlock : classes.dNone,
          }}
          labelRowsPerPage=''
        />
      </div>
    );
  }
  return (
    <div className={classes.contentWrapper}>
      <HighlightedInformation>
        No resources received yet.
      </HighlightedInformation>
    </div>
  );
}

SubscriptionTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  resources: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(SubscriptionTable);
