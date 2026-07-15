<script>
  import { base } from '$app/paths';

  const pageTitle = 'Thinkies World Congress II · A Creative Gathering for Unsticking Stuck Thinking';
  const pageDescription =
    'A hands-on virtual unconference where participants practiced using Thinkies to unstick stuck thinking. Explore the insights we generated together.';

  const panelists = [
    {
      name: 'Sowmya Somanath',
      role: 'HCI Researcher of Creativity Support Tools and Creative Experience Design',
      bio: 'Associate Professor and Researcher at the University of Victoria who studies how to design tools that bring creativity to life through hands-on, do-it-yourself making—spanning electronics, fabrication, and interactive technologies.',
      photo: 'sowmya-pic.jpg',
      rotation: '-2deg'
    },
    {
      name: 'Marian Petre',
      role: 'SE Researcher of Developer Expertise and High-Performing Teams',
      bio: 'Emeritus Professor at the Open University (UK) with over three decades of experience studying high-performing software development teams to understand what distinguishes them — exposing actionable insights into how they think, communicate, design, and solve problems.',
      photo: 'marian-pic.jpg',
      rotation: '1.5deg'
    },
    {
      name: 'Umit Akirmak',
      role: 'Cognitive Psychology Researcher exploring AI, Creativity, and Human Behavior',
      bio: "Cognitive psychology PhD researcher and current Computer Science master's student at the University of Victoria, studying creativity in software development and bringing a cognitive perspective to how people create, collaborate, and adapt when working with AI tools.",
      photo: 'umit-pic.jpg',
      rotation: '-1deg'
    },
    {
      name: 'Natasha Terry',
      role: 'Wildlife Artist, Creative Mentor, Writer, and Arts Educator',
      bio: 'With over 15 years of contemplative practice, she guides people through the creative process in service of personal and collective thriving in harmony with the natural world. She is working to preserve analog and spiritual technologies in art-making through her work at SparrowSongStudio.com.',
      photo: 'natasha_photo.png',
      rotation: '-1deg'
    },
    {
      name: 'Arty Starr',
      role: 'Artist, Software Engineer, Researcher and Mystic',
      bio: "2D/3D animator and VFX artist, software engineer with 20+ years of experience, PhD student at University of Victoria and originator of <em>troubleshooting theory</em> — giving developers words to explain what's happening when software gets out of control (cognitive debt phenomena). Also trying to be a more integrated human being.",
      photo: 'arty-pic.jpg',
      rotation: '2deg'
    },
    {
      name: 'Kent Beck',
      role: 'Software Design Pioneer, Artist, Musician, and Creator of Thinkies',
      bio: 'Helping geeks feel safer in the world by pioneering strategies for shared understanding (design patterns), better feedback loops (TDD), and better ways of collaborating (XP). With Thinkies, he explores how simple creative habits can help people see differently and get unstuck.',
      photo: 'kent-pic.jpg',
      rotation: '-1.5deg'
    }
  ];

  const schedule = [
    { time: '8:00am PT', activity: 'Introduction keynote by Kent Beck and Arty Starr', room: 'Keynote Room', highlight: false },
    { time: '8:10am',    activity: 'Thinkies virtual table discussion — round 1',           room: 'Table Rooms',  highlight: true  },
    { time: '8:35am',    activity: 'Idea Garden poster sharing for round 1',                room: 'Garden Rooms', highlight: false },
    { time: '9:00am',    activity: 'Introducing next set of Thinkies by Kent Beck and Arty Starr', room: 'Keynote Room', highlight: false },
    { time: '9:10am',    activity: 'Thinkies virtual table discussion — round 2',           room: 'Table Rooms',  highlight: true  },
    { time: '9:35am',    activity: 'Idea Garden poster sharing for round 2',                room: 'Garden Rooms', highlight: false },
    { time: '10:00am',   activity: 'Panel discussion and reflection led by Kent Beck and Arty Starr', room: 'Keynote Room', highlight: false },
    { time: '11:00am',   activity: 'Conference Ends',                                       room: '',             highlight: false }
  ];
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-base-200">

  <!-- Hero Section -->
  <header class="twc2-hero py-24 px-4">
    <div class="text-center flex flex-col items-center max-w-3xl mx-auto">
      <p class="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">Virtual Unconference Event by <span class="text-white">Kent Beck</span></p>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white md:whitespace-nowrap">Thinkies World Congress II</h1>
      <p class="text-2xl font-semibold text-white/90 mb-3">A Creative Gathering for Unsticking Stuck Thinking</p>
      <p class="text-xl text-white/80 mb-4">May 20th, 2026</p>
      <p class="text-lg text-white/80 mb-8">8:00am to 11:00am Pacific Time (5pm – 8pm CET)</p>
      <a href="{base}/conferences/twc-2" class="btn-coral btn-coral-lg">See the Insights We Generated →</a>
    </div>
  </header>

  <main class="flex-grow">

    <!-- About Section -->
    <section class="py-16 px-4 bg-base-100">
      <div class="container mx-auto max-w-4xl text-justify">
        <p class="text-lg leading-relaxed mb-6">
          Thinkies are <strong>learnable pattern transformations</strong> you can use to shift how you see a situation,
          expand the space of options, and spark new ideas — especially when things feel stuck or prematurely decided.
          It's not about having the <em>right</em> idea, it's about generating <em>lots</em> of ideas — some of which
          might be brilliant.
        </p>
        <p class="text-lg leading-relaxed mb-6">
          Thinkies help you <strong>notice</strong> when a conversation or decision is falling into a predictable
          groove — and then offer you a way to step sideways, flip the frame, or open up new paths.
        </p>
        <p class="text-lg leading-relaxed">
          At the <strong>Thinkies World Congress</strong> virtual event, you won't just <em>learn</em> about
          Thinkies — you'll get <em>practice</em> with them.
        </p>
      </div>
    </section>

    <!-- Video Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-3xl text-center">
        <h2 class="text-5xl font-bold mb-4">See What It's All About</h2>
        <p class="text-lg text-neutral mb-8">
          Watch this short video to get a feel for what the Thinkies World Congress is — and why you should join.
        </p>
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/xx05TMxead0?start=3"
            title="What is the Thinkies World Congress?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- What to Expect -->
    <section class="py-16 px-4 what-to-expect-bg">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-5xl font-bold text-center mb-4">What to Expect</h2>
        <p class="text-center max-w-4xl mx-auto mb-12 text-lg">
          A hands-on, virtual gathering designed for anyone who wants to strengthen their ability to think creatively
          and unstick stuck thinking — whether you're a software developer, engineering leader, or simply someone
          who cares about getting unstuck.
        </p>

        <h3 class="text-2xl font-semibold text-center mb-10 text-neutral">Here's how the experience unfolds:</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- Card 1 -->
          <div class="experience-card experience-card--coral">
            <div class="experience-card__icon-wrap experience-card__icon-wrap--coral">
              <span class="text-4xl">✨</span>
            </div>
            <h3 class="text-xl font-bold mb-3 mt-2">Main Stage Kickoff</h3>
            <p class="text-base leading-relaxed">
              We'll start together with an introduction to Thinkies — what they are, how they work, and why they
              matter. You'll learn a few powerful transformations to try out.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="experience-card experience-card--purple">
            <div class="experience-card__icon-wrap experience-card__icon-wrap--purple">
              <span class="text-4xl">🧩</span>
            </div>
            <h3 class="text-xl font-bold mb-3 mt-2">Virtual Table Practice Sessions</h3>
            <p class="text-base leading-relaxed">
              Next, you'll join a virtual table where a facilitator will guide your group in applying a Thinkie
              to a sticky scenario and collaborating on generating fresh ideas.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="experience-card experience-card--teal">
            <div class="experience-card__icon-wrap experience-card__icon-wrap--teal">
              <span class="text-4xl">🌱</span>
            </div>
            <h3 class="text-xl font-bold mb-3 mt-2">The Idea Garden</h3>
            <p class="text-base leading-relaxed">
              Finally, we'll share our ideas in a virtual Idea Garden — an open discussion where you'll explore,
              reflect, and look for patterns. All ideas generated will be open source and available on thinkies.org.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Post-event CTA -->
    <section class="py-20 px-4 bg-base-100">
      <div class="container mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold mb-4">The Congress Has Spoken 🌱</h2>
        <p class="text-lg mb-10 text-neutral">
          On May 20th, 2026, participants from around the world gathered to apply Thinkies to real software
          challenges. We discussed <strong>10 thinkies</strong> and generated <strong>304 insights</strong> —
          all open source and available right here.
        </p>
        <a href="{base}/conferences/twc-2" class="btn-coral btn-coral-lg">
          See the Insights We Generated →
        </a>
      </div>
    </section>

    <!-- Panel Discussion -->
    <section class="py-16 px-4 panel-bg">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-5xl font-bold text-center mb-4 text-white">Panel Discussion</h2>
        <h3 class="text-2xl font-semibold text-center mb-6 text-white/80">Where Does Creativity Come From?</h3>
        <p class="text-center max-w-3xl mx-auto mb-14 text-lg text-white/70">
          After 2 rounds of Thinkies practice, thought leaders from multiple disciplines share their perspectives on the keynote mainstage.
        </p>

        <div class="flex flex-col gap-10">
          {#each panelists as panelist, i}
            <div class="panelist-row {i % 2 === 0 ? 'panelist-row--normal' : 'panelist-row--reverse'}">
              <!-- Polaroid photo -->
              <div class="polaroid-wrap" style="--rot: {panelist.rotation}">
                <div class="polaroid">
                  <div class="tape"></div>
                  <img
                    src="{base}/img/{panelist.photo}"
                    alt="{panelist.name}"
                    class="polaroid__img"
                  />
                  <p class="polaroid__label">{panelist.name}</p>
                </div>
              </div>
              <!-- Bio -->
              <div class="panelist-bio">
                <p class="panelist-bio__role">{panelist.role}</p>
                <p class="panelist-bio__text">{@html panelist.bio}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Schedule -->
    <section class="py-16 px-4 bg-base-100">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-5xl font-bold text-center mb-4">TWC II Schedule</h2>
        <p class="text-center text-lg text-neutral mb-10">May 20th, 2026 · 8:00am – 11:00am Pacific Time</p>

        <div class="schedule-table-wrap">
          <table class="schedule-table">
            <thead>
              <tr class="schedule-table__head">
                <th>Time</th>
                <th>Activity</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {#each schedule as row}
                <tr class="schedule-table__row {row.highlight ? 'schedule-table__row--highlight' : ''}">
                  <td class="schedule-table__time">{row.time}</td>
                  <td class="schedule-table__activity">{row.activity}</td>
                  <td class="schedule-table__room">{row.room}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Post-event insights CTA (dark gradient) -->
    <section class="py-20 px-4 twc2-join-bg">
      <div class="container mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold mb-6 text-white">What Did We Come Up With?</h2>
        <p class="text-white/85 text-lg mb-10">
          Explore <strong class="text-white">304 insights</strong> across <strong class="text-white">10 thinkies</strong>,
          contributed by participants from around the world. All ideas are open source — dig in, share, and build on them.
        </p>
        <a href="{base}/conferences/twc-2" class="btn-coral btn-coral-lg">
          Explore the Insights →
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-neutral text-neutral-content">
    <div class="container mx-auto px-4 py-8 text-center space-y-2">
      <p class="text-sm opacity-80">
        Thinkies were created by Kent Beck —
        <a
          href="https://tidyfirst.substack.com/s/thinkies"
          target="_blank"
          rel="noopener noreferrer"
          class="link font-semibold"
        >
          learn more at Substack
        </a>
        &nbsp;·&nbsp;
        <a href="{base}/" class="link font-semibold">Back to thinkies.org</a>
      </p>
      <p class="text-sm opacity-60">
        <a href="{base}/organizers/" class="link link-hover">Organizing Team</a>
        <span class="mx-2">·</span>
        <a href="{base}/code_of_conduct.html" class="link link-hover">Code of Conduct</a>
        <span class="mx-2">·</span>
        <a href="{base}/privacy.html" class="link link-hover">Privacy Policy</a>
      </p>
    </div>
  </footer>
</div>

<style>
  /* ── Hero & Join backgrounds ───────────────────────────── */
  .twc2-hero {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
  }

  .twc2-join-bg {
    background: linear-gradient(135deg, #0f3460 0%, #533483 60%, #1a1a2e 100%);
  }

  .panel-bg {
    background: linear-gradient(160deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
  }

  /* ── What to Expect section ────────────────────────────── */
  .what-to-expect-bg {
    background: #f4f1fb;
  }

  .experience-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem 1.75rem 1.75rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-top: 4px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .experience-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  }

  .experience-card--coral  { border-top-color: #FD5353; }
  .experience-card--purple { border-top-color: #533483; }
  .experience-card--teal   { border-top-color: #0d9488; }

  .experience-card__icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .experience-card__icon-wrap--coral  { background: #fff0f0; }
  .experience-card__icon-wrap--purple { background: #f3eeff; }
  .experience-card__icon-wrap--teal   { background: #e6faf8; }

  /* ── Video wrapper ─────────────────────────────────────── */
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 0.75rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* ── Panelist rows ─────────────────────────────────────── */
  .panelist-row {
    display: flex;
    align-items: flex-start;
    gap: 2.5rem;
  }

  .panelist-row--reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 640px) {
    .panelist-row,
    .panelist-row--reverse {
      flex-direction: column;
      align-items: center;
    }
  }

  /* ── Polaroid ──────────────────────────────────────────── */
  .polaroid-wrap {
    flex-shrink: 0;
    transform: rotate(var(--rot, 0deg));
    transition: transform 0.3s ease;
  }

  .polaroid-wrap:hover {
    transform: rotate(0deg) scale(1.04);
  }

  .polaroid {
    position: relative;
    background: white;
    padding: 10px 10px 36px;
    box-shadow:
      0 4px 6px rgba(0,0,0,0.12),
      0 12px 28px rgba(0,0,0,0.22),
      inset 0 0 0 1px rgba(0,0,0,0.06);
    width: 180px;
  }

  .polaroid__img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  .polaroid__label {
    text-align: center;
    margin-top: 6px;
    font-size: 1rem;
    font-weight: 700;
    color: #444;
    font-family: 'Caveat', cursive, sans-serif;
    letter-spacing: 0.01em;
  }

  /* Tape strip across the top of the polaroid */
  .tape {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%) rotate(-1deg);
    width: 64px;
    height: 22px;
    background: rgba(255, 248, 180, 0.82);
    border: 1px solid rgba(210, 190, 80, 0.35);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    border-radius: 2px;
    z-index: 1;
  }

  /* ── Panelist bio ──────────────────────────────────────── */
  .panelist-bio {
    flex: 1;
    padding-top: 0.5rem;
  }

  .panelist-bio__role {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #a78bfa;
    margin-bottom: 0.6rem;
  }

  .panelist-bio__text {
    color: rgba(255,255,255,0.78);
    line-height: 1.75;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    .panelist-bio {
      text-align: center;
    }
  }

  /* ── Schedule table ────────────────────────────────────── */
  .schedule-table-wrap {
    overflow-x: auto;
    border-radius: 0.75rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }

  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 0.75rem;
    overflow: hidden;
  }

  .schedule-table__head th {
    background: linear-gradient(90deg, #1a1a2e, #533483);
    color: white;
    padding: 0.9rem 1.25rem;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }

  .schedule-table__row td {
    padding: 0.85rem 1.25rem;
    border-bottom: 1px solid #f0edf8;
    vertical-align: top;
  }

  @media (max-width: 640px) {
    .schedule-table__row td {
      vertical-align: middle;
    }
  }

  .schedule-table__row:last-child td {
    border-bottom: none;
  }

  .schedule-table__row:nth-child(even) {
    background: #faf9fd;
  }

  .schedule-table__row--highlight {
    background: #f3eeff !important;
    border-left: 4px solid #533483;
  }

  .schedule-table__row--highlight .schedule-table__activity {
    font-weight: 700;
    color: #533483;
  }

  .schedule-table__time {
    white-space: nowrap;
    font-weight: 600;
    font-size: 0.9rem;
    color: #533483;
    width: 7rem;
  }

  .schedule-table__room {
    white-space: nowrap;
    font-size: 0.85rem;
    color: #888;
    width: 9rem;
  }
</style>
