const dialogue = {
  modelGood: {
    initial: {
      text: "What are you looking at?",
      options: [
        { text: "You look stylish", next: 1 },
        { text: "Nothing at all", next: "end" },
        { text: "You look like my spy contact", reveal: true, next: 2 },
      ],
    },
    response: {
      text: "Thanks, I am a model",
      options: [
        { text: "Oh, cool. See you around", next: "end" },
        { text: "So is my spy contact, that you?", reveal: true, next: 2 },
      ],
    },
    reveal: {
      text: "Yes, I am your contact",
      options: [{ text: "OK, let's get to work", next: "success" }],
    },
    afterEnd: {
      text: "Oh, you again?",
      options: [
        { text: "Are you my contact?", reveal: true, next: 2 },
        { text: "Never mind", next: "end" },
      ],
    },
  },
  modelBad: {
    initial: {
      text: "What are you looking at?",
      options: [
        { text: "You look stylish", next: "response" },
        { text: "Nothing at all", next: "end" },
        { text: "You look like my spy contact", reveal: true, next: "reveal" },
      ],
    },
    response: {
      text: "I'm only wearing this because my laundry is dirty",
      options: [
        { text: "Oh, cool. See you around", next: "end" },
        { text: "Are you my contact?", reveal: true, next: "reveal" },
      ],
    },
    reveal: {
      text: "You're not very good at this",
      options: [{ text: "Well...", next: "fail" }],
    },
    afterEnd: {
      text: "Oh, you again?",
      options: [
        { text: "Are you my contact?", reveal: true, next: "reveal" },
        { text: "Never mind", next: "end" },
      ],
    },
  },
}

export default dialogue
