import React, { memo, useCallback, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import comprehensionData from "../dummy_data/persons";

const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
});

function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [CardChart, setCardChart] = useState(null);
  const [resources, setResources] = useState([]);
  const [topics, setTopics] = useState([]);
  const [targets, setTargets] = useState([]);

  const fetchRandomResources = useCallback(() => {
    const resources = [];
    const iterations = 3;
    const oneMonthSeconds = Math.round(60 * 60 * 24 * 30.5);
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneMonthSeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const randomResourceTemplate = comprehensionData["History"]["Year 4"][i];
      const resource = {
        id: i,
        description: randomResourceTemplate.name,
        balanceChange: "balance charge",
        paidUntil: curUnix + oneMonthSeconds,
        timestamp: curUnix,
        subTopics: randomResourceTemplate.subTopics,
      };
      curUnix += oneMonthSeconds;
      resources.push(resource);
    }
    resources.reverse();
    setResources(resources);
  }, [setResources]);

  const fetchTopics = useCallback(() => {
    const topics = [];
    const numberOfSubjects = Object.keys(comprehensionData).length;

    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - numberOfSubjects * oneDaySeconds
    );

    let currentSubject = "";
    let currentYearGroup = "";

    for (let i = 0; i < numberOfSubjects; i += 1) {
      const subjectKeys = Object.keys(comprehensionData);
      const numberOfYearGroups = Object.keys(
        comprehensionData[subjectKeys[i]]
      ).length;
      currentSubject = subjectKeys[i];

      for (let j = 0; j < numberOfYearGroups; j += 1) {
        const yearGroupKeys = Object.keys(comprehensionData[subjectKeys[j]]);
        currentYearGroup = yearGroupKeys[j];
        const topicsForCurrentSubjectAndYearGroup =
          comprehensionData[subjectKeys[i]][yearGroupKeys[j]];

        const dataForCurrentSubjectAndYearGroup = {
          id: i,
          timestamp: curUnix,
          topics: topicsForCurrentSubjectAndYearGroup,
          yearGroupName: currentYearGroup,
          subjectName: currentSubject,
        };
        curUnix += oneDaySeconds;
        topics.push(dataForCurrentSubjectAndYearGroup);
      }
    }

    topics.reverse();
    setTopics(topics);
  }, [setTopics]);

  const selectDashboard = useCallback(() => {
    smoothScrollTop();
    document.title = "ComPo - Dashboard";
    setSelectedTab("Dashboard");
  }, [setSelectedTab, setCardChart]);

  const selectTopics = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Posts";
    setSelectedTab("Posts");
  }, [setSelectedTab]);

  const selectSubscription = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Subscription";
    setSelectedTab("Subscription");
  }, [setSelectedTab]);

  useEffect(() => {
    fetchRandomResources();
    fetchTopics();
  }, [fetchRandomResources, fetchTopics]);

  return (
    <Fragment>
      <NavBar style={{ width: "300px" }} selectedTab={selectedTab} />
      <main className={classNames(classes.main)}>
        <Routing
          CardChart={CardChart}
          resources={resources}
          topics={topics}
          targets={targets}
          selectDashboard={selectDashboard}
          selectTopics={selectTopics}
          selectSubscription={selectSubscription}
          setTargets={setTargets}
          setTopics={setTopics}
        />
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
