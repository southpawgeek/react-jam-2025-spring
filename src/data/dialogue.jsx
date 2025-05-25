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
  bloopsly1: {
    initial:
      "I know it looks like I'm on stilts, but I actually am freakishly tall. Any day now these bones of mine are gonna snap like a twig.",
    reveal:
      "I know I'm a clown, but I don't like being treated like a joke. Spy? Come on bro!",
    success: false,
    blowCover: false,
  },
  biggy1: {
    initial:
      "Greetings little man. Do you dare challenge me to a lifting competition?",
    reveal:
      "Spy? I have no need to hide in the shadows. I fight everyone head on without fear!",
    success: false,
    blowCover: true,
  },
  capsly1: {
    initial: "You're awfully suspicious. Can I see your ID?",
    reveal:
      "I knew you were the spy I was looking for. Hand over the key right now, or you'll be hugging my knife.",
    success: false,
    blowCover: false,
    gameOver: true,
  },
  faina1: {
    initial:
      "How do you do, dear? You have such a cute face, you should shave off that 'stache.",
    reveal:
      "You seemed like such a nice boy... why get into this sneaky man nonsense?!",
    success: false,
    blowCover: true,
  },
  oscar1: {
    initial:
      "It's ironic that I'm in a hot dog outfit, because it's so hot in here I FEEL like I'm being grilled!",
    reveal:
      "What the heck, man? You thought the girl sweating in a hot dog outfit was a spy?",
    success: false,
    blowCover: true,
  },
  wonda1: {
    initial:
      "I think I recognize you. Yeah, you wouldn't just talk to a stranger if you didn't have a goal, would you?",
    reveal:
      "I have a gun in my purse. Hand over the key willingly, or I'll take it off your corpse.",
    success: false,
    blowCover: false,
    gameOver: true,
  },
  lalana1: {
    initial: "You don't get to talk to me unless you're paying for my time.",
    reveal:
      "I'm not sure if this is real, or some kink of yours, but I'm not into it AT ALL!",
    success: false,
    blowCover: true,
  },
  winry1: {
    initial: "Awoo! Bark Bark Bark! Eyaaaa!",
    reveal: "n/a",
    success: true,
    blowCover: false,
  },
  olivia2: {},
  maya2: {},
  rusty2: {},
  trent2: {},
  lucias2: {},
  brittany2: {},
  pete2: {},
  edgar2: {},
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
      I know that they will be <em>wearing very decorative attire</em>, and
      their <Keyword keyword="story" /> is that <em>they're a model</em>.
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
        <Keyword keyword="chief" />:{" "}
      </strong>
      Still... make sure to only <Keyword keyword="reveal" /> your identity to
      whoever you believe to be your <Keyword keyword="contact" />. Your{" "}
      <Keyword keyword="cover" /> is important to us, and our work.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      May Lady Luck kiss your soul, Agent.
    </>,
  ],
  [
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      Excellent work as always Agent Nougat! Having that key should mean our
      mission is nearly done, but as your contact relayed, we are under attack.
      The <Keyword keyword="location" /> of the lockbox and the agent who has
      access to it has been scrambled.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      Our security systems have even failed at HQ. Whatever is in this lockbox,
      our enemies don't want us to have it, and are doing anything to stop us.
      This time we're not even sure what exact <Keyword keyword="location" />{" "}
      your <Keyword keyword="contact" /> will be in.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      Within the corrupted intel we got, we know the two possible countries
      share visa-free entry with each other, and have narrowed it down to Russia
      and Thailand.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      Given the clues our next <Keyword keyword="contact" /> left, we suspect
      it's either this train station in Thailand, or this public square in
      Russia. I know it's a lot to ask you to visit both locales, but our
      options are limited.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      This time, the <Keyword keyword="contact" /> should be{" "}
      <em>wearing a unique accessory</em>, and their <Keyword keyword="story" />{" "}
      is that they <em>live a care free life</em>.
    </>,
    <>
      <strong>
        <Keyword keyword="agent" />:{" "}
      </strong>
      I can feel my brain meats getting fried already at the amount of variables
      here, <Keyword keyword="chief" />.
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      We're facing potential disaster <Keyword keyword="agent" />, this is all
      we can do. In addition since our enemies got into our system, they know of
      this mission, there will be <Keyword keyword="counterAgents" />. Please
      only <Keyword keyword="reveal" /> your identity when you're absolutely
      certain you've found your <Keyword keyword="contact" />!
    </>,
    <>
      <strong>
        <Keyword keyword="chief" />:{" "}
      </strong>
      I hope you have a four-leaf clover up your keister, and find success yet
      again.
    </>,
  ],
  [
    <>
      <Keyword keyword="chief" />: I'm happier now then when I have a plate of
      fresh muffins in front of me, <Keyword keyword="agent" />. That formula
      was for a toxin that our enemies wanted to make a large batch of to cause
      some real damage.
    </>,
    <>
      <Keyword keyword="chief" />: They may have attacked our intel systems, and
      tried to stop you, but their efforts have fallen to ash.
    </>,
    <>
      <Keyword keyword="agent" />: You're making my cheeks rosy with
      embarrassment <Keyword keyword="chief" />, surely &mdash;
    </>,
    <>
      <Keyword keyword="chief" />: What are YOU doing here? Get out of my
      office! You'll accomplish no &mdash; *gunshot* *static*
    </>,
    <>
      <Keyword keyword="agent" />: CHIEF! CHIEF! Gosh damn, it seems like he's
      in trouble. I can't delay in checking on him!
    </>,
  ],
]

export const debriefingDialogue = [
  [
    <>
      <strong>Eliza</strong>: Oh, it's you, Agent! I was strutting my stuff out
      here for hours hoping to get your attention.
      <br />
      <br />
      It's not easy to say this - I got the key to the lockbox, but my
      intentions were found out.
    </>,
    <>
      <strong>Eliza</strong>: They know who I work for and are going to likely
      try to stop the agency from within, in addition to attempting to find you
      before you get to the lockbox location.
    </>,
    <>
      <strong>Agent Nougat</strong>: You're right, the rats already interfered
      with our intel systems. It was tough to even get enough info to meet you.
    </>,
    <>
      <strong>Eliza</strong>: I'm warmed by your success, but I'm going into
      hiding. I'm done with this line of work. Stay safe, Agent.
    </>,
    <>
      <strong>Agent Nougat</strong>: You too, and a ship full of thanks for your
      service all these years.
    </>,
  ],
  [
    <>
      *<strong>Winry</strong> rolls on her back, revealing a shiny tag. The
      dog's tag is imprinted with the location of the lockbox.*
    </>,
    <>
      Nougat goes to the lockbox and uses the key to open it. Within the lockbox
      is a folded paper with a formula on it.
      <br />
      <br />
      <Keyword keyword="agent" />: I suppose this mumbo jumbo is what was so
      important. I'll contact <Keyword keyword="chief" /> to get confirmation.
    </>,
  ],
]

export default dialogue
