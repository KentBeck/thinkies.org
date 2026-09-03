/**
 * Exploring Stuckness — a monthly community workshop.
 *
 * Single source of truth for the event: the landing page at
 * /exploring-stuckness/ and the homepage banner both read from here, so the
 * date and registration link can only be updated in one place.
 *
 * To publish the next month's workshop: move the current `nextEvent` object to
 * the front of `pastEvents` (adding a `number` and any `links`), then fill
 * `nextEvent` with the new one and update `people`. The two objects share the
 * same shape so that move is a copy-paste, not a rewrite.
 */

export const eventbriteUrl =
  'https://www.eventbrite.com/e/exploring-stuckness-community-workshop-ii-tickets-1999424680041';

export const nextEvent = {
  vignette: "Have to Explain When I Don't Have Words",
  challenge: 'The Challenge: Agents Need Explanation for Tacit Intuitions',
  description:
    "Working with an agent shifts communication toward explicit language, but not every intuitive instinct is that easy to express in words. In talking with another human, you can point to things and have a shared embodied experience that enables rich multichannel non-verbal communication. A felt sense of which way to go often precedes our ability to make words. Having to externalize thoughts that you aren't quite confident in yourself also makes it difficult to put that forward with your team.",
  /** Highlighted (marker pen) fragment of the description above. */
  descriptionHighlight: 'not every intuitive instinct is that easy to express in words',
  communityMember: 'Blake Lindsay',
  coHosts: 'Arty Starr, Russ Miles',
  dateLong: 'Thursday, September 10, 2026',
  dateShort: 'Thu, Sep 10',
  /** Just the day, for prose like "Join the conversation on September 10th". */
  dateCasual: 'September 10th',
  time: '8:30am - 10am PDT / 5:30pm CEST',
  /**
   * Start times only, for the compact eyebrow lines. The compound `time`
   * above reads as "10am" at a glance when it sits inline with the date.
   */
  timeShort: '8:30am PDT / 5:30pm CEST',
  /** The event poster, in static/img/exploring-stuckness/. */
  poster: '260910-vignette.webp'
};

/**
 * Workshops we've already run, newest first — the archive at
 * /exploring-stuckness/past/. Each entry has the same shape as `nextEvent`
 * plus:
 *   `number` — which workshop it was, e.g. "Workshop I".
 *   `links`  — optional `{ label, url }` pairs shown as chips on the card.
 *              Miro boards today, idea gardens and notes as we curate them.
 *              An empty array simply renders no chips.
 */
export const pastEvents = [
  {
    number: 'Workshop I',
    vignette: 'The Shallow Mental Model',
    challenge: 'The Challenge: Acting Without Understanding',
    description:
      'Development used to involve gradually building a detailed mental model of the system. Working with AI now often means operating from a much shallower understanding. Developers can still make progress, but they experience themselves as not really understanding what is happening or why particular changes are being suggested, and missing an intuition about what to do.',
    descriptionHighlight: 'not really understanding what is happening',
    communityMember: 'Blake Lindsay',
    specialGuest: 'Norman Anderson',
    specialGuestNote: 'author of the "Stuckness Vignettes" paper',
    coHosts: 'Arty Starr, Russ Miles',
    dateLong: 'Wednesday, August 12, 2026',
    dateShort: 'Wed, Aug 12',
    time: '9am - 10:30am PST / 6pm CEST',
    links: []
  }
];

export const steps = [
  {
    number: 'Step 01',
    title: 'Understand the Stuck',
    image: 'understand.png',
    accent: '#533483',
    body: 'Our Community Member Experiencing the Stuck shares more about their situation and answers questions from the group. Together, we build a shared understanding of the challenge.'
  },
  {
    number: 'Step 02',
    title: 'Explore with Thinkies',
    image: 'explore.png',
    accent: '#f5c518',
    body: "We practice with Thinkies to find new ways of looking at the challenge, expand the space of options, and spark new ideas. And you're always welcome to invent your own Thinkie in the moment. The ones we have are a starting point, not the only way to get unstuck."
  },
  {
    number: 'Step 03',
    title: 'Reflect & Take Away',
    image: 'reflect.png',
    accent: '#0d9488',
    body: 'Finally, we reflect on what resonated, what patterns we see, and any potential strategies for getting unstuck. Everyone leaves with new perspectives, some fresh ideas, and a bit more practice with applying Thinkies.'
  }
];

/**
 * The people bringing and hosting this month's stuckness, in the
 * order they appear on the page. `tint` steps from dark to light purple, like
 * zooming in on each person.
 */
export const people = [
  {
    name: 'Blake Lindsay',
    role: 'Community Member Experiencing the Stuck',
    photo: 'blake-pic.webp',
    rotation: '-2deg',
    tint: 'rgba(66,42,106,0.60)',
    bio: "Software engineer at RentSpree with 20+ years of experience in industry, and co-organizer for Thinkies World Congress. Arty and Blake had a chat about Blake's first-hand experiences with the shifts happening with this new agentic coding world, and how it feels different from our “coding-by-hand” world in the before times. We talked about the new stucknesses, what is shifting in the cognitive experience, and took lots of notes about the different patterns. From this, we distilled 8 stuckness vignettes. Now that we have Thinkies as a cognitive tool that we can apply when we're stuck, this seemed like a great opportunity to practice Thinkies in a real world context. Blake will be sharing about the situations where he's experiencing the stuck, and as a community, we'll try to get a better understanding of the challenge."
  },
  {
    name: 'Arty Starr',
    role: 'Co-Host',
    photo: 'arty-pic.jpg',
    rotation: '2deg',
    tint: 'rgba(120,90,180,0.40)',
    bio: 'Artist, researcher, PhD student at University of Victoria, and software engineer with 20+ years of experience, constructing a theory of the developer’s cognitive experience as two interwoven processes of momentum and troubleshooting. Originator of troubleshooting theory, giving developers words to explain the loss of understanding, loss of intuitive hunches, and loss of control in software systems (cognitive debt phenomena). Also a co-organizer for Thinkies World Congress.'
  },
  {
    name: 'Russ Miles',
    role: 'Co-Host',
    photo: 'russ-pic.jpg',
    rotation: '-1.5deg',
    tint: 'rgba(160,132,214,0.20)',
    bio: 'Author of “The Sovereign Engineer: AI Literacy for Software Professionals” and pioneer of Habitat Thinking, Habitat Theory and Habitat Engineering. Expert in Platform, Agentic, Chaos &amp; Resilience, and Software Engineering, and on a mission as an author, listener, speaker and developer to help people thrive in one of the harshest and potentially impactful working environments: software system engineering with AI.'
  }
];

/** The Thinkie cards, each linking to Kent Beck's write-up. */
export const thinkies = [
  { name: 'Obviously', image: 'obviously.png', url: 'https://newsletter.kentbeck.com/p/obviously' },
  { name: 'Easy Bit', image: 'easy_bit.png', url: 'https://newsletter.kentbeck.com/p/thinkie-easy-bit' },
  { name: 'Fun Bit', image: 'fun_bit.png', url: 'https://newsletter.kentbeck.com/p/thinkie-fun-bit' },
  { name: 'Direct Feedback', image: 'direct_feedback.png', url: 'https://newsletter.kentbeck.com/p/personal-feedback' },
  { name: 'End to End', image: 'end_to_end.png', url: 'https://newsletter.kentbeck.com/p/thinkie-end-to-end' },
  { name: 'Put Skin in the Game', image: 'put_skin_in_the_game.png', url: 'https://newsletter.kentbeck.com/p/thinkie-put-skin-in-the-game' },
  { name: 'Force Decision', image: 'force_decision.png', url: 'https://newsletter.kentbeck.com/p/thinkie-force-decision' },
  { name: 'More General Solution', image: 'more_general_solution.png', url: 'https://newsletter.kentbeck.com/p/thinkie-more-general-solution' },
  { name: 'Hard Problem', image: 'hard_problem.png', url: 'https://newsletter.kentbeck.com/p/thinkie-hard-problem' },
  { name: 'Parallel Decision', image: 'parallel_decision.png', url: 'https://newsletter.kentbeck.com/p/thinkie-parallel-decision' },
  { name: 'Abundance', image: 'abundance.png', url: 'https://newsletter.kentbeck.com/p/abundance' },
  { name: 'Half and Half', image: 'half_in_a_half.png', url: 'https://newsletter.kentbeck.com/p/half-in-half' }
];

/** The academic paper that inspired the "Stuckness Vignettes" framing. */
export const paperCitation = {
  authors: 'N. Anderson et al.',
  title: 'ChatGPT: Friend or Foe When Comprehending and Changing Unfamiliar Code',
  year: '2026',
  url: 'https://arxiv.org/abs/2605.10702'
};
