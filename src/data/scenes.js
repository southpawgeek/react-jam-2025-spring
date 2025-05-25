const scenes = {
  bgCoffee: {
    name: "Tokyo - Coffee Shop",
    defaultText: "The outdoor seating is nice.",
    background: "bgCoffee",
    npcs: [
      {
        name: "fab",
        x: 105,
        y: 285,
      },
      {
        name: "fred",
        x: 200,
        y: 310,
      },
      {
        name: "dotti",
        x: 220,
        y: 500,
      },
      {
        name: "bk",
        x: 400,
        y: 330,
      },
      {
        name: "tashi",
        x: 520,
        y: 270,
      },
      {
        name: "asuka",
        x: 600,
        y: 490,
      },
      {
        name: "eliza",
        x: 700,
        y: 380,
      },
    ],
  },
  bgRussia: {
    name: "Russia - Public Square",
    defaultText: "An ornate building can be seen in the distance.",
    background: "bgRussia",
    npcs: [
      {
        name: "bloopsly",
        x: 100,
        y: 400,
      },
      {
        name: "biggy",
        x: 600,
        y: 300,
      },
      {
        name: "capsly",
        x: 300,
        y: 500,
      },
      {
        name: "faina",
        x: 400,
        y: 300,
      },
    ],
  },
  bgTrain: {
    name: "Thailand - Train Station",
    defaultText: "There aren't too many people here.",
    background: "bgTrain",
    npcs: [
      {
        name: "oscar",
        x: 735,
        y: 355,
      },
      {
        name: "wonda",
        x: 180,
        y: 340,
      },
      {
        name: "lalana",
        x: 100,
        y: 450,
      },
      {
        name: "winry",
        x: 550,
        y: 340,
      },
    ],
  },
  bgBeach: {
    name: "USA - Hawaiian Beach",
    defaultText: "The air is salty and fresh.",
    background: "bgBeach",
    npcs: [
      {
        name: "maya",
        x: 700,
        y: 330,
      },
      {
        name: "olivia",
        x: 600,
        y: 500,
      },
      {
        name: "trent",
        x: 100,
        y: 500,
      },
      {
        name: "rusty",
        x: 300,
        y: 400,
      },
    ],
  },
  bgCastle: {
    name: "UK - Old English Castle",
    defaultText: "The castle is large and intimidating.",
    background: "bgCastle",
    npcs: [
      {
        name: "lucias",
        x: 745,
        y: 405,
      },
      {
        name: "brittany",
        x: 210,
        y: 460,
      },
      {
        name: "pete",
        x: 100,
        y: 430,
      },
      {
        name: "edgar",
        x: 560,
        y: 400,
      },
    ],
  },
  bgOffice: {
    name: "Office",
    defaultText: "The office is quiet, but there are a few people around.",
    background: "bgOffice",
    npcs: [
      {
        name: "fab",
        x: 600,
        y: 200,
      },
    ],
  },
}

export const levels = [
  [scenes.bgCoffee],
  [scenes.bgRussia, scenes.bgTrain],
  [scenes.bgBeach, scenes.bgCastle],
]

export default scenes
