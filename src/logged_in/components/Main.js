import React, { memo, useCallback, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import persons from "../dummy_data/persons";
import LazyLoadAddBalanceDialog from "./subscription/LazyLoadAddBalanceDialog";

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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [CardChart, setCardChart] = useState(null);
  const [hasFetchedCardChart, setHasFetchedCardChart] = useState(false);
  const [EmojiTextArea, setEmojiTextArea] = useState(null);
  const [hasFetchedEmojiTextArea, setHasFetchedEmojiTextArea] = useState(false);
  const [ImageCropper, setImageCropper] = useState(null);
  const [hasFetchedImageCropper, setHasFetchedImageCropper] = useState(false);
  const [Dropzone, setDropzone] = useState(null);
  const [hasFetchedDropzone, setHasFetchedDropzone] = useState(false);
  const [DateTimePicker, setDateTimePicker] = useState(null);
  const [hasFetchedDateTimePicker, setHasFetchedDateTimePicker] =
    useState(false);
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({ views: [], profit: [] });
  const [topics, setTopics] = useState([]);
  const [targets, setTargets] = useState([]);

  const fetchRandomTargets = useCallback(() => {
    const targets = [];
    for (let i = 0; i < 35; i += 1) {
      const randomPerson = persons[Math.floor(Math.random() * persons.length)];
      const target = {
        id: i,
        number1: Math.floor(Math.random() * 251),
        number2: Math.floor(Math.random() * 251),
        number3: Math.floor(Math.random() * 251),
        number4: Math.floor(Math.random() * 251),
        name: randomPerson.name,
        profilePicUrl: randomPerson.src,
        isActivated: Math.round(Math.random()) ? true : false,
      };
      targets.push(target);
    }
    setTargets(targets);
  }, [setTargets]);

  const fetchRandomStatistics = useCallback(() => {
    const statistics = { profit: [], views: [] };
    const iterations = 300;
    const oneYearSeconds = 60 * 60 * 24 * 365;
    let curProfit = Math.round(3000 + Math.random() * 1000);
    let curViews = Math.round(3000 + Math.random() * 1000);
    let curUnix = Math.round(new Date().getTime() / 1000) - oneYearSeconds;
    for (let i = 0; i < iterations; i += 1) {
      curUnix += Math.round(oneYearSeconds / iterations);
      curProfit += Math.round((Math.random() * 2 - 1) * 10);
      curViews += Math.round((Math.random() * 2 - 1) * 10);
      statistics.profit.push({
        value: curProfit,
        timestamp: curUnix,
      });
      statistics.views.push({
        value: curViews,
        timestamp: curUnix,
      });
    }
    setStatistics(statistics);
  }, [setStatistics]);

  const fetchRandomTransactions = useCallback(() => {
    const transactions = [];
    const iterations = 3;
    const oneMonthSeconds = Math.round(60 * 60 * 24 * 30.5);
    const transactionTemplates = [
      {
        description: "Ancient Greece",
        isSubscription: true,
        balanceChange: "Greek Philosophers and Thinkers",
      },
      {
        description: "Anglo Saxons",
        isSubscription: true,
        balanceChange: "Anglo-Saxon Kings and Queens",
      },
      {
        description: "Early civilisations in the Americas",
        isSubscription: false,
        balanceChange: "Native American Tribes",
      },
    ];
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneMonthSeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const randomTransactionTemplate = transactionTemplates[i];
      const transaction = {
        id: i,
        description: randomTransactionTemplate.description,
        balanceChange: randomTransactionTemplate.balanceChange,
        paidUntil: curUnix + oneMonthSeconds,
        timestamp: curUnix,
      };
      curUnix += oneMonthSeconds;
      transactions.push(transaction);
    }
    transactions.reverse();
    setTransactions(transactions);
  }, [setTransactions]);

  const fetchRandomPosts = useCallback(() => {
    shuffle(persons);
    const topics = [];
    const iterations = persons.length;
    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneDaySeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const person = persons[i];
      const post = {
        id: i,
        src: person.src,
        timestamp: curUnix,
        name: person.name,
      };
      curUnix += oneDaySeconds;
      topics.push(post);
    }
    topics.reverse();
    setTopics(topics);
  }, [setTopics]);

  const selectDashboard = useCallback(() => {
    smoothScrollTop();
    document.title = "ComPo - Dashboard";
    setSelectedTab("Dashboard");
    if (!hasFetchedCardChart) {
      setHasFetchedCardChart(true);
      import("../../shared/components/CardChart").then((Component) => {
        setCardChart(Component.default);
      });
    }
  }, [
    setSelectedTab,
    setCardChart,
    hasFetchedCardChart,
    setHasFetchedCardChart,
  ]);

  const selectTopics = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Posts";
    setSelectedTab("Posts");
    if (!hasFetchedEmojiTextArea) {
      setHasFetchedEmojiTextArea(true);
      import("../../shared/components/EmojiTextArea").then((Component) => {
        setEmojiTextArea(Component.default);
      });
    }
    if (!hasFetchedImageCropper) {
      setHasFetchedImageCropper(true);
      import("../../shared/components/ImageCropper").then((Component) => {
        setImageCropper(Component.default);
      });
    }
    if (!hasFetchedDropzone) {
      setHasFetchedDropzone(true);
      import("../../shared/components/Dropzone").then((Component) => {
        setDropzone(Component.default);
      });
    }
    if (!hasFetchedDateTimePicker) {
      setHasFetchedDateTimePicker(true);
      import("../../shared/components/DateTimePicker").then((Component) => {
        setDateTimePicker(Component.default);
      });
    }
  }, [
    setSelectedTab,
    setEmojiTextArea,
    setImageCropper,
    setDropzone,
    setDateTimePicker,
    hasFetchedEmojiTextArea,
    setHasFetchedEmojiTextArea,
    hasFetchedImageCropper,
    setHasFetchedImageCropper,
    hasFetchedDropzone,
    setHasFetchedDropzone,
    hasFetchedDateTimePicker,
    setHasFetchedDateTimePicker,
  ]);

  const selectSubscription = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Subscription";
    setSelectedTab("Subscription");
  }, [setSelectedTab]);

  useEffect(() => {
    fetchRandomTargets();
    fetchRandomStatistics();
    fetchRandomTransactions();
    fetchRandomPosts();
  }, [
    fetchRandomTargets,
    fetchRandomStatistics,
    fetchRandomTransactions,
    fetchRandomPosts,
  ]);

  return (
    <Fragment>
      <LazyLoadAddBalanceDialog />
      <NavBar selectedTab={selectedTab} />
      <main className={classNames(classes.main)}>
        <Routing
          ImageCropper={ImageCropper}
          EmojiTextArea={EmojiTextArea}
          CardChart={CardChart}
          Dropzone={Dropzone}
          DateTimePicker={DateTimePicker}
          transactions={transactions}
          statistics={statistics}
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
