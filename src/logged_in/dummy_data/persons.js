/* eslint-disable */
import comprehensionData from "./comprehensionData.json";

const data = [
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image1.jpg`,
    name: "Ancient Greece",
    subTopics: [
      {
        Title: "A timeline of Ancient Greece",
        comprenhensionText: comprehensionData["Ancient Greece"]
          .filter(
            (topic) => topic.subTopic === "A timeline of Ancient Greece"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter(
          (topic) => topic.subTopic === "A timeline of Ancient Greece"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Greek Mythology",
        comprenhensionText: comprehensionData["Ancient Greece"]
          .filter((topic) => topic.subTopic === "Greek Mythology")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter((topic) => topic.subTopic === "Greek Mythology")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The City-States",
        comprenhensionText: comprehensionData["Ancient Greece"]
          .filter((topic) => topic.subTopic === "The City-States")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter((topic) => topic.subTopic === "The City-States")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Olympic Games",
        comprenhensionText: comprehensionData["Ancient Greece"]
          .filter((topic) => topic.subTopic === "Olympic Games")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Ancient Greece"
        ].filter((topic) => topic.subTopic === "Olympic Games")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Greek Philosophers and Thinkers",
        comprenhensionText: comprehensionData["Ancient Greece"]
          .filter(
            (topic) => topic.subTopic === "Greek Philosophers and Thinkers"
          )[0]
          .comprehensionText.split("\n"),
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
        ]
          .filter(
            (topic) =>
              topic.subTopic ===
              "A timeline of WW2 The Home Front and the Battle of Britain"
          )[0]
          .comprehensionText.split("\n"),
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
        ]
          .filter(
            (topic) => topic.subTopic === "Everyday Life during the War"
          )[0]
          .comprehensionText.split("\n"),
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
        ]
          .filter((topic) => topic.subTopic === "Evacuation of Children")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "Evacuation of Children")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The Role of Propaganda",
        comprenhensionText: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ]
          .filter((topic) => topic.subTopic === "The Role of Propaganda")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ].filter((topic) => topic.subTopic === "The Role of Propaganda")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The Battle of Britain",
        comprenhensionText: comprehensionData[
          "WW2 The Home Front and the Battle of Britain"
        ]
          .filter((topic) => topic.subTopic === "The Battle of Britain")[0]
          .comprehensionText.split("\n"),
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
        comprenhensionText: comprehensionData["Vikings in Britain"]
          .filter(
            (topic) => topic.subTopic === "A timeline of Vikings in Britain"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Vikings in Britain"
        ].filter(
          (topic) => topic.subTopic === "A timeline of Vikings in Britain"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Raiders",
        comprenhensionText: comprehensionData["Vikings in Britain"]
          .filter((topic) => topic.subTopic === "Viking Raiders")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Vikings in Britain"
        ].filter((topic) => topic.subTopic === "Viking Raiders")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Settlements",
        comprenhensionText: comprehensionData["Vikings in Britain"]
          .filter((topic) => topic.subTopic === "Viking Settlements")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Vikings in Britain"
        ].filter((topic) => topic.subTopic === "Viking Settlements")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Culture and Beliefs",
        comprenhensionText: comprehensionData["Vikings in Britain"]
          .filter((topic) => topic.subTopic === "Viking Culture and Beliefs")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Vikings in Britain"
        ].filter((topic) => topic.subTopic === "Viking Culture and Beliefs")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Viking Legacy",
        comprenhensionText: comprehensionData["Vikings in Britain"]
          .filter((topic) => topic.subTopic === "Viking Legacy")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Vikings in Britain"
        ].filter((topic) => topic.subTopic === "Viking Legacy")[0]
          .comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image4.jpg`,
    name: "The Roman Empire and its impact on Britain",
    subTopics: [
      {
        Title: "A timeline of The Roman Empire and its impact on Britain",
        comprenhensionText: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ]
          .filter(
            (topic) =>
              topic.subTopic ===
              "A timeline of The Roman Empire and its impact on Britain"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ].filter(
          (topic) =>
            topic.subTopic ===
            "A timeline of The Roman Empire and its impact on Britain"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Roman Invasion of Britain",
        comprenhensionText: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ]
          .filter((topic) => topic.subTopic === "Roman Invasion of Britain")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ].filter((topic) => topic.subTopic === "Roman Invasion of Britain")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Roman Lifestyle and Technology",
        comprenhensionText: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ]
          .filter(
            (topic) => topic.subTopic === "Roman Lifestyle and Technology"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ].filter(
          (topic) => topic.subTopic === "Roman Lifestyle and Technology"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Hadrian's Wall",
        comprenhensionText: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ]
          .filter((topic) => topic.subTopic === "Hadrian's Wall")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ].filter((topic) => topic.subTopic === "Hadrian's Wall")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "End of Roman Rule",
        comprenhensionText: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ]
          .filter((topic) => topic.subTopic === "End of Roman Rule")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The Roman Empire and its impact on Britain"
        ].filter((topic) => topic.subTopic === "End of Roman Rule")[0]
          .comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image5.jpg`,
    name: "The changing power of the british monarchy",
    subTopics: [
      {
        Title: "A timeline of The changing power of the british monarchy",
        comprenhensionText: comprehensionData[
          "The changing power of the british monarchy"
        ]
          .filter(
            (topic) =>
              topic.subTopic ===
              "A timeline of The changing power of the british monarchy"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The changing power of the british monarchy"
        ].filter(
          (topic) =>
            topic.subTopic ===
            "A timeline of The changing power of the british monarchy"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "The Role of Kings and Queens",
        comprenhensionText: comprehensionData[
          "The changing power of the british monarchy"
        ]
          .filter(
            (topic) => topic.subTopic === "The Role of Kings and Queens"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The changing power of the british monarchy"
        ].filter(
          (topic) => topic.subTopic === "The Role of Kings and Queens"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Evolution of Monarchical Power",
        comprenhensionText: comprehensionData[
          "The changing power of the british monarchy"
        ]
          .filter(
            (topic) => topic.subTopic === "Evolution of Monarchical Power"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The changing power of the british monarchy"
        ].filter(
          (topic) => topic.subTopic === "Evolution of Monarchical Power"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Influence of Parliament",
        comprenhensionText: comprehensionData[
          "The changing power of the british monarchy"
        ]
          .filter((topic) => topic.subTopic === "Influence of Parliament")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The changing power of the british monarchy"
        ].filter((topic) => topic.subTopic === "Influence of Parliament")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Modern Monarchy",
        comprenhensionText: comprehensionData[
          "The changing power of the british monarchy"
        ]
          .filter((topic) => topic.subTopic === "Modern Monarchy")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "The changing power of the british monarchy"
        ].filter((topic) => topic.subTopic === "Modern Monarchy")[0]
          .comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image6.jpg`,
    name: "Stone Age to Iron Age Britain",
    subTopics: [
      {
        Title: "A timeline of Stone Age to Iron Age Britain",
        comprenhensionText: comprehensionData["Stone Age to Iron Age Britain"]
          .filter(
            (topic) =>
              topic.subTopic === "A timeline of Stone Age to Iron Age Britain"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Stone Age to Iron Age Britain"
        ].filter(
          (topic) =>
            topic.subTopic === "A timeline of Stone Age to Iron Age Britain"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Hunter-Gatherers and Early Farmers",
        comprenhensionText: comprehensionData["Stone Age to Iron Age Britain"]
          .filter(
            (topic) => topic.subTopic === "Hunter-Gatherers and Early Farmers"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Stone Age to Iron Age Britain"
        ].filter(
          (topic) => topic.subTopic === "Hunter-Gatherers and Early Farmers"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Megalithic Monuments",
        comprenhensionText: comprehensionData["Stone Age to Iron Age Britain"]
          .filter((topic) => topic.subTopic === "Megalithic Monuments")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Stone Age to Iron Age Britain"
        ].filter((topic) => topic.subTopic === "Megalithic Monuments")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Bronze Age",
        comprenhensionText: comprehensionData["Stone Age to Iron Age Britain"]
          .filter((topic) => topic.subTopic === "Bronze Age")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Stone Age to Iron Age Britain"
        ].filter((topic) => topic.subTopic === "Bronze Age")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Iron Age Hillforts and Celtic Life",
        comprenhensionText: comprehensionData["Stone Age to Iron Age Britain"]
          .filter(
            (topic) => topic.subTopic === "Iron Age Hillforts and Celtic Life"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Stone Age to Iron Age Britain"
        ].filter(
          (topic) => topic.subTopic === "Iron Age Hillforts and Celtic Life"
        )[0].comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image7.jpg`,
    name: "Islamic civilisation including Baghdad c.AD900",
    subTopics: [
      {
        Title: "A timeline of Islamic civilisation including Baghdad c.AD900",
        comprenhensionText: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ]
          .filter(
            (topic) =>
              topic.subTopic ===
              "A timeline of Islamic civilisation including Baghdad c.AD900"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ].filter(
          (topic) =>
            topic.subTopic ===
            "A timeline of Islamic civilisation including Baghdad c.AD900"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Baghdad: The Capital of Islamic Civilization",
        comprenhensionText: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ]
          .filter(
            (topic) =>
              topic.subTopic === "Baghdad: The Capital of Islamic Civilization"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ].filter(
          (topic) =>
            topic.subTopic === "Baghdad: The Capital of Islamic Civilization"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Islamic Achievements in Science and Learning",
        comprenhensionText: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ]
          .filter(
            (topic) =>
              topic.subTopic === "Islamic Achievements in Science and Learning"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ].filter(
          (topic) =>
            topic.subTopic === "Islamic Achievements in Science and Learning"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Cultural Diversity and Trade in Islamic Society",
        comprenhensionText: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ]
          .filter(
            (topic) =>
              topic.subTopic ===
              "Cultural Diversity and Trade in Islamic Society"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ].filter(
          (topic) =>
            topic.subTopic === "Cultural Diversity and Trade in Islamic Society"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Islamic Art and Architecture",
        comprenhensionText: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ]
          .filter(
            (topic) => topic.subTopic === "Islamic Art and Architecture"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Islamic civilisation including Baghdad c.AD900"
        ].filter(
          (topic) => topic.subTopic === "Islamic Art and Architecture"
        )[0].comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image8.jpg`,
    name: "Early civilisations in the Americas",
    subTopics: [
      {
        Title: "Timeline of Early civilisations in the Americas",
        comprenhensionText: comprehensionData[
          "Early civilisations in the Americas"
        ]
          .filter(
            (topic) =>
              topic.subTopic ===
              "Timeline of Early civilisations in the Americas"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Early civilisations in the Americas"
        ].filter(
          (topic) =>
            topic.subTopic === "Timeline of Early civilisations in the Americas"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Early Inhabitants and Migration",
        comprenhensionText: comprehensionData[
          "Early civilisations in the Americas"
        ]
          .filter(
            (topic) => topic.subTopic === "Early Inhabitants and Migration"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Early civilisations in the Americas"
        ].filter(
          (topic) => topic.subTopic === "Early Inhabitants and Migration"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Native American Tribes",
        comprenhensionText: comprehensionData[
          "Early civilisations in the Americas"
        ]
          .filter((topic) => topic.subTopic === "Native American Tribes")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Early civilisations in the Americas"
        ].filter((topic) => topic.subTopic === "Native American Tribes")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Advanced Civilizations",
        comprenhensionText: comprehensionData[
          "Early civilisations in the Americas"
        ]
          .filter((topic) => topic.subTopic === "Advanced Civilizations")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Early civilisations in the Americas"
        ].filter((topic) => topic.subTopic === "Advanced Civilizations")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Exploration and Colonization by Europeans",
        comprenhensionText: comprehensionData[
          "Early civilisations in the Americas"
        ]
          .filter(
            (topic) =>
              topic.subTopic === "Exploration and Colonization by Europeans"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Early civilisations in the Americas"
        ].filter(
          (topic) =>
            topic.subTopic === "Exploration and Colonization by Europeans"
        )[0].comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image9.jpg`,
    name: "Achievements of earliest civilisations and a case study of Ancient Egypt",
    subTopics: [
      {
        Title:
          "A timeline of Achievements of earliest civilisations and a case study of Ancient Egypt",
        comprenhensionText: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ]
          .filter(
            (topic) =>
              topic.subTopic ===
              "A timeline of Achievements of earliest civilisations and a case study of Ancient Egypt"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ].filter(
          (topic) =>
            topic.subTopic ===
            "A timeline of Achievements of earliest civilisations and a case study of Ancient Egypt"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Daily Life in Ancient Egypt",
        comprenhensionText: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ]
          .filter(
            (topic) => topic.subTopic === "Daily Life in Ancient Egypt"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ].filter((topic) => topic.subTopic === "Daily Life in Ancient Egypt")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Hieroglyphics and Communication",
        comprenhensionText: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ]
          .filter(
            (topic) => topic.subTopic === "Hieroglyphics and Communication"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ].filter(
          (topic) => topic.subTopic === "Hieroglyphics and Communication"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Pharaohs and Pyramids",
        comprenhensionText: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ]
          .filter((topic) => topic.subTopic === "Pharaohs and Pyramids")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ].filter((topic) => topic.subTopic === "Pharaohs and Pyramids")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Egyptian Gods and Beliefs",
        comprenhensionText: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ]
          .filter((topic) => topic.subTopic === "Egyptian Gods and Beliefs")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Achievements of earliest civilisations and a case study of Ancient Egypt"
        ].filter((topic) => topic.subTopic === "Egyptian Gods and Beliefs")[0]
          .comprehensionQuestionsAndAnswers,
      },
    ],
  },
  {
    src: `${process.env.PUBLIC_URL}/images/logged_in/image10.jpg`,
    name: "Anglo Saxons",
    subTopics: [
      {
        Title: "A timeline of Anglo Saxons",
        comprenhensionText: comprehensionData["Anglo Saxons"]
          .filter((topic) => topic.subTopic === "A timeline of Anglo Saxons")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Anglo Saxons"
        ].filter((topic) => topic.subTopic === "A timeline of Anglo Saxons")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Daily Life",
        comprenhensionText: comprehensionData["Anglo Saxons"]
          .filter((topic) => topic.subTopic === "Anglo-Saxon Daily Life")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Anglo Saxons"
        ].filter((topic) => topic.subTopic === "Anglo-Saxon Daily Life")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Kings and Queens",
        comprenhensionText: comprehensionData["Anglo Saxons"]
          .filter(
            (topic) => topic.subTopic === "Anglo-Saxon Kings and Queens"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Anglo Saxons"
        ].filter(
          (topic) => topic.subTopic === "Anglo-Saxon Kings and Queens"
        )[0].comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Religion",
        comprenhensionText: comprehensionData["Anglo Saxons"]
          .filter((topic) => topic.subTopic === "Anglo-Saxon Religion")[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Anglo Saxons"
        ].filter((topic) => topic.subTopic === "Anglo-Saxon Religion")[0]
          .comprehensionQuestionsAndAnswers,
      },
      {
        Title: "Anglo-Saxon Warriors and Warfare",
        comprenhensionText: comprehensionData["Anglo Saxons"]
          .filter(
            (topic) => topic.subTopic === "Anglo-Saxon Warriors and Warfare"
          )[0]
          .comprehensionText.split("\n"),
        comprehensionQuestionsAndAnswers: comprehensionData[
          "Anglo Saxons"
        ].filter(
          (topic) => topic.subTopic === "Anglo-Saxon Warriors and Warfare"
        )[0].comprehensionQuestionsAndAnswers,
      },
    ],
  },
];

export default data;
