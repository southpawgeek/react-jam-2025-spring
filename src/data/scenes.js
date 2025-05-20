const scenes = {
  bgCoffee: {
    name: "Coffee Shop",
    defaultText: "The outdoor seating is nice.",
    background: "bgCoffee",
    npcs: [
      {
        name: "fred",
        x: 120,
        y: 310,
      },
      {
        name: "wonda",
        x: 300,
        y: 320,
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
  scene4: {
    name: "Scene 4",
    defaultText: "Description 4 goes here",
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
  scene5: {
    name: "Scene 5",
    defaultText: "Description 5 goes here",
    npcs: [
      {
        name: "fab",
        x: 600,
        y: 200,
      },
    ],
  },
  scene6: {
    name: "Scene 6",
    defaultText: "Description 6 goes here",
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
  [scenes.scene4, scenes.scene5, scenes.scene6],
]

export default scenes
