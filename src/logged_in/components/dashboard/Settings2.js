import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "../../../shared/components/HelpIcon";
import Bordered from "../../../shared/components/Bordered";

const styles = (theme) => ({
  numberInput: {
    width: 120,
    [theme.breakpoints.down("md")]: {
      width: 80,
    },
    "@media (max-width: 350px)": {
      width: 65,
    },
  },
  numberInputInput: {
    padding: "9px 14.5px",
    "@media (max-width: 380px)": {
      padding: "9px 8.5px",
    },
    "@media (max-width: 350px)": {
      padding: "9px 6.5px",
    },
  },
  listItem: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
    },
    paddingLeft: 100,
  },
  AccordionDetails: {
    paddingTop: theme.spacing(0),
    display: "flex",
    justifyContent: "flex-end",
  },
  dBlock: {
    display: "block",
  },
});

function Settings2(props) {
  const { classes } = props;
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);

  const handleCheckboxChange = (name) => (event) => {
    switch (name) {
      case "option1":
        setOption1(event.target.checked);
        break;
      case "option2":
        setOption2(event.target.checked);
        break;
      case "option3":
        setOption3(event.target.checked);
        break;
      case "option4":
        setOption4(event.target.checked);
        break;
      case "option5":
        setOption5(event.target.checked);
        break;
      default:
        throw new Error("No branch selected in switch statement.");
    }
  };

  const inputs = [
    {
      title: "Option 1",
      secondaryAction: (
        <Checkbox
          value='option1'
          color='primary'
          checked={option1}
          onChange={handleCheckboxChange("option1")}
        />
      ),
    },
    {
      title: "Option 2",
      secondaryAction: (
        <Checkbox
          value='option2'
          color='primary'
          checked={option2}
          onChange={handleCheckboxChange("option2")}
        />
      ),
    },
    {
      title: "Option 3",
      secondaryAction: (
        <Checkbox
          value='option3'
          color='primary'
          checked={option3}
          onChange={handleCheckboxChange("option3")}
        />
      ),
      helpText: "You can add some further explanation here.",
    },
    {
      title: "Option 4",
      secondaryAction: (
        <Checkbox
          value='option4'
          color='primary'
          checked={option4}
          onChange={handleCheckboxChange("option4")}
        />
      ),
    },
    {
      title: "Option 5",
      secondaryAction: (
        <Checkbox
          value='option5'
          color='primary'
          checked={option5}
          onChange={handleCheckboxChange("option5")}
        />
      ),
    },
    {
      title: "Option 6",
      secondaryAction: (
        <Select
          input={
            <OutlinedInput
              labelWidth={0}
              className={classes.numberInput}
              classes={{ input: classes.numberInputInput }}
              name='option6'
            />
          }
        >
          <MenuItem value='Both'>Both</MenuItem>
          <MenuItem value='Male+'>Male+</MenuItem>
          <MenuItem value='Female+'>Female+</MenuItem>
          <MenuItem value='Only male'>Only male</MenuItem>
          <MenuItem value='Only female'>Only female</MenuItem>
        </Select>
      ),
      helpText: "You can add some further explanation here.",
    },
    {
      title: "Option 7",
      secondaryAction: (
        <Select
          input={
            <OutlinedInput
              labelWidth={0}
              className={classes.numberInput}
              classes={{ input: classes.numberInputInput }}
              name='option7'
            />
          }
        >
          <MenuItem value='None'>None</MenuItem>
          <MenuItem value='6 hours'>6 hours</MenuItem>
          <MenuItem value='12 hours'>12 hours</MenuItem>
          <MenuItem value='1 day'>1 day</MenuItem>
          <MenuItem value='3 days'>3 days</MenuItem>
          <MenuItem value='1 week'>1 week</MenuItem>
          <MenuItem value='2 weeks'>2 weeks</MenuItem>
          <MenuItem value='1 month'>1 month</MenuItem>
          <MenuItem value='3 months'>3 months</MenuItem>
          <MenuItem value='6 months'>6 months</MenuItem>
        </Select>
      ),
      helpText: "You can add some further explanation here.",
    },
  ];

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Settings 2</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.dBlock}>
        <List disablePadding>
          <Bordered disableVerticalPadding disableBorderRadius>
            {inputs.map((element, index) => (
              <ListItem
                key={index}
                divider={index !== inputs.length - 1}
                className='listItemLeftPadding'
              >
                <ListItemText>
                  <Typography variant='body2'>
                    {element.title}
                    {element.helpText && <HelpIcon title={element.helpText} />}
                  </Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <FormControl variant='outlined'>
                    {element.secondaryAction}
                  </FormControl>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </Bordered>
        </List>
      </AccordionDetails>
      <AccordionDetails className={classes.AccordionDetails}>
        <Button variant='contained' color='secondary'>
          Save
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}

Settings2.propTypes = {
  classes: PropTypes.object,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(Settings2);
