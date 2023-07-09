/* eslint-disable */
import comprehensionData from "./comprehensionData.json";

const data = [
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image1.jpg`,
    name: "Ancient Greece",
    subTopics: [
      {
        Title: "A timeline of Ancient Greece",
        comprenhensionText: comprehensionData["Ancient Greece"].filter(
          (topic) => topic.subTopic === "A timeline of Ancient Greece"
        )[0].comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter(
          (topic) => topic.subTopic === "A timeline of Ancient Greece"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Greek Mythology",
        comprenhensionText: comprehensionData["Ancient Greece"].filter(
          (topic) => topic.subTopic === "Greek Mythology"
        )[0].comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter((topic) => topic.subTopic === "Greek Mythology")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The City-States",
        comprenhensionText: comprehensionData["Ancient Greece"].filter(
          (topic) => topic.subTopic === "The City-States"
        )[0].comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter((topic) => topic.subTopic === "The City-States")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Olympic Games",
        comprenhensionText: comprehensionData["Ancient Greece"].filter(
          (topic) => topic.subTopic === "Olympic Games"
        )[0].comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter((topic) => topic.subTopic === "Olympic Games")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Greek Philosophers and Thinkers",
        comprenhensionText: comprehensionData["Ancient Greece"].filter(
          (topic) => topic.subTopic === "Greek Philosophers and Thinkers"
        )[0].comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter(
          (topic) => topic.subTopic === "Greek Philosophers and Thinkers"
        )[0].comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image2.jpg`,
    name: "WW2 The Home Front and the Battle of Britain",
    subTopics: [
      {
        Title: "A timeline of WW2 The Home Front and the Battle of Britain",
        comprenhensionText: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter(
          (topic) =>
            topic.subTopic ===
            "A timeline of WW2 The Home Front and the Battle of Britain"
        )[0].comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter(
          (topic) =>
            topic.subTopic ===
            "A timeline of WW2 The Home Front and the Battle of Britain"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Everyday Life during the War",
        comprenhensionText: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter(
          (topic) => topic.subTopic === "Everyday Life during the War"
        )[0].comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter(
          (topic) => topic.subTopic === "Everyday Life during the War"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Evacuation of Children",
        comprenhensionText: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "Evacuation of Children")[0]
          .comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "Evacuation of Children")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The Role of Propaganda",
        comprenhensionText: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "The Role of Propaganda")[0]
          .comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "The Role of Propaganda")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The Battle of Britain",
        comprenhensionText: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "The Battle of Britain")[0]
          .comprehensionText,
        comprehensionQuestionsAndAnswers: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "The Battle of Britain")[0]
          .comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image3.jpg`,
    name: "Vikings in Britain",
    subTopics: [
      {
        Title: "A timeline of Vikings in Britain",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Raiders",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Settlements",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Culture and Beliefs",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Legacy",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image4.jpg`,
    name: "The Roman Empire and its impact on Britain",
    subTopics: [
      {
        Title: "A timeline of The Roman Empire and its impact on Britain",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Roman Invasion of Britain",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Roman Lifestyle and Technology",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Hadrian's Wall",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "End of Roman Rule",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image5.jpg`,
    name: "The changing power of the british monarchy",
    subTopics: [
      {
        Title: "A timeline of The changing power of the british monarchy",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The Role of Kings and Queens",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Evolution of Monarchical Power",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Influence of Parliament",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Modern Monarchy",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image6.jpg`,
    name: "Stone Age to Iron Age Britain",
    subTopics: [
      {
        Title: "A timeline of Stone Age to Iron Age Britain",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Hunter-Gatherers and Early Farmers",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Megalithic Monuments",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Bronze Age",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Iron Age Hillforts and Celtic Life",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image7.jpg`,
    name: "Islamic civilisation including Baghdad c.AD900",
    subTopics: [
      {
        Title: "A timeline of Islamic civilisation including Baghdad c.AD900",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Baghdad: The Capital of Islamic Civilization",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Islamic Achievements in Science and Learning",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Cultural Diversity and Trade in Islamic Society",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Islamic Art and Architecture",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image8.jpg`,
    name: "Early civilisations in the Americas",
    subTopics: [
      {
        Title: "A timeline of Early civilisations in the Americas",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Early Inhabitants and Migration",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Native American Tribes",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Advanced Civilizations",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Exploration and Colonization by Europeans",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image9.jpg`,
    name: "Anglo Saxons",
    subTopics: [
      {
        Title: "A timeline of Anglo Saxons",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Daily Life",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Kings and Queens",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Religion",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Warriors and Warfare",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image10.jpg`,
    name: "Achievements of earliest civilisations and a case study of Ancient Egypt",
    subTopics: [
      {
        Title:
          "A timeline of Ancient Greece Achievements of earliest civilisations and a case study of Ancient Egypt",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Hieroglyphics and Communication",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Pharaohs and Pyramids",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Pharaohs and Pyramids",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Egyptian Gods and Beliefs",
        comprenhensionText: comprehensionData.comprehensionText,
        comprehensionQuestionsAndAnswers:
          comprehensionData.comprehensionQuestionsAndAnswers,
      },
    ],
  },
];

export default data;
