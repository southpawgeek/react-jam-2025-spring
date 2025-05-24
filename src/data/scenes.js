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
    name: "Russia",
    defaultText: "An ornate building can be seen in the distance.",
    background: "bgRussia",
    npcs: [
      {
        name: "wonda",
        x: 100,
        y: 200,
      },
      {
        name: "fred",
        x: 300,
        y: 200,
      },
    ],
  },
  bgTrain: {
    name: "Train Station",
    defaultText: "There aren't too many people here.",
    background: "bgTrain",
    npcs: [
      {
        name: "fab",
        x: 600,
        y: 200,
      },
    ],
  },
  bgBeach: {
    name: "Beach",
    defaultText: "The air is salty and fresh.",
    background: "bgBeach",
    npcs: [
      {
        name: "bk",
        x: 700,
        y: 200,
      },
      {
        name: "winry",
        x: 400,
        y: 100,
      },
      {
        name: "oscar",
        x: 100,
        y: 200,
      },
    ],
  },
  bgCastle: {
    name: "Castle",
    defaultText: "The castle is large and intimidating.",
    background: "bgCastle",
    npcs: [
      {
        name: "fab",
        x: 600,
        y: 200,
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
  [scenes.bgBeach, scenes.bgCastle, scenes.bgOffice],
]

export default scenes
