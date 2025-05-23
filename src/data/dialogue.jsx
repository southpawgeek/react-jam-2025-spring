import Keyword from "../components/Keyword"

const dialogue = {
  greeting: "Greetings, how are you?",
  reveal:
    "It's clear to me that you're my contact. I'm the spy that's been tasked to meet with you.",
  end: "Good day to you.",
  fab0: {
    initial:
      "Why in the heck are you flapping your gums at me? Do you ACTUALLY think you have a chance with someone like me?",
    reveal:
      "Stay away from me, weirdo! I'll yell you're a spy if you don't get away from me.",
    success: false,
    blowCover: true,
  },
  dotti0: {
    initial:
      "Oh my gosh it's so max fab today right? I wish I had wings like those butterflies then my body would be soaring like my heart is.",
    reveal:
      "Wowz, that's kinda a ton to process. I'm fur sure not the sort to deal with anything this serious.",
    success: false,
    blowCover: true,
  },
  fred0: {
    initial:
      "I guess you're as lonely as me. I'd love to talk with you, but I honestly got nothing worth talking about going on in my life.",
    reveal:
      "Don't get me mixed up in whatever risky business you're involved in. My life may be miserable, but I don't need things to get worse!",
    success: false,
    blowCover: true,
  },
  bk0: {
    initial:
      "Ah, another adorin' fan? I'm not givin' ya a signature so you can sell it, but I'll take a pic with ya.",
    reveal: "Spy? That ya gimmick? Ya lace up the boots and wrestle too?",
    success: false,
    blowCover: false,
  },
  tashi0: {
    initial:
      "I have a deadline to hit. Unless you have something of import to say to me, please go about your business.",
    reveal:
      " I can't allow the shadowy things you're involved in to impact my standing in my company. Please never speak to me again.",
    success: false,
    blowCover: true,
  },
  asuka0: {
    initial:
      "Why is an old weird guy talking to me? I'll scream if you get too close.",
    reveal:
      "I don't know if you're trying to impress me, but it isn't working. Go away old man!",
    success: false,
    blowCover: true,
  },
  eliza0: {
    initial:
      "You look rather plainly dressed. I suppose you haven't kept up with what's in this season.",
    reveal:
      "Oh it's you agent! I was strutting my stuff out here for hours hoping to get your attention.",
    success: true,
    blowCover: false,
  },
  level0success1:
    "It's not easy to say this, but I got the key to the lockbox, but my intentions were found out.They know who I work for and are going to likely try to stop the agency from within, in addition to attempting to find you before you get to the lockbox location.",
  level0success2:
    "You're right, the rats already interfered with our intel systems, it was tough to get even enough info to meet you.",
  level0success3:
    "I'm warmed by your success, but I'm going into hiding and I'm done with this work after this. Stay safe agent.",
  level0success4:
    "You too, and a ship full of thanks for your service all these years.",
}

export const briefingDialogue = [
  [
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      Good afternoon, night, or morning <Keyword keyword="agent" />! I have a
      challenging mission for you today. Our intel systems have been hit with
      data corruption that prevents me from having the full dossier on your{" "}
      <Keyword keyword="contact" /> for this mission.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      I know that they will be wearing very decorative attire, and their{" "}
      <Keyword keyword="story" /> is that <em>they're a model</em>.
    </>,
    <>
      <strong>
        <Keyword keyword="agent" />:{" "}
      </strong>
      Good gravy, that's not much to go on, <Keyword keyword="chief" />
      ...
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      I know, if it was anyone else, I wouldn't expect success. But, we have
      full trust in you.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      Your first <Keyword keyword="location" /> will be a{" "}
      <em>coffee shop in Tokyo</em>. We have no reason to believe that{" "}
      <Keyword keyword="counterAgents" /> will be there to try to stop you.
    </>,
    <>
      <strong>
        <Keyword keyword={"chief"} />:{" "}
      </strong>
      Still... make sure to only <Keyword keyword="reveal" /> your identity to
      whoever you believe to be your <Keyword keyword="contact" />. Your{" "}
      <Keyword keyword="cover" /> is important to us, and our work.
    </>,
  ],
  [<>briefing #2</>],
  [<>briefing #3</>],
]

export default dialogue
