<script>
  import { base } from '$app/paths';
  import PersonRow from '$lib/components/PersonRow.svelte';
  import StepCard from '$lib/components/StepCard.svelte';
  import ThinkieGrid from '$lib/components/ThinkieGrid.svelte';
  import {
    eventbriteUrl,
    nextEvent,
    paperCitation,
    people,
    steps,
    thinkies
  } from '$lib/data/exploring-stuckness.js';

  const pageDescription =
    'A monthly community gathering for exploring our real experiences of stuckness in software development — then using Thinkies to get unstuck.';

  // The vignette description carries one marker-pen highlight; split around it
  // so the copy itself stays plain text in the data module.
  const [beforeHighlight, afterHighlight] = nextEvent.description.split(
    nextEvent.descriptionHighlight
  );
</script>

<svelte:head>
  <title>Exploring Stuckness · A Monthly Community Workshop</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Exploring Stuckness · A Monthly Community Workshop" />
  <meta property="og:description" content={pageDescription} />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<div class="es-page">
  <!-- ─── TOP BAR ─── -->
  <nav class="es-nav">
    <div class="es-container">
      <a href="{base}/exploring-stuckness/" class="brand">Exploring Stuckness</a>
      <div class="nav-right">
        <ul class="nav-links">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#thinkies-map">The Thinkies</a></li>
          <li><a href="#next-vignette">Next Vignette</a></li>
        </ul>
        <a
          href={eventbriteUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="next-pill"
        >
          <span class="dot"></span>
          <span>
            <span class="label-long">Join the Conversation · </span>
            <strong>{nextEvent.dateShort}</strong>
          </span>
        </a>
      </div>
    </div>
  </nav>

  <!-- ─── HERO ─── -->
  <header class="hero">
    <div class="es-container">
      <p class="hero-eyebrow">Monthly · Community · Workshop</p>
      <h1>Exploring <span class="hl hl-purple">Stuckness</span></h1>
      <p class="subtitle">
        A monthly community gathering for exploring our<br />
        <span class="hl hl-green">real experiences of stuckness</span> in software
        development
      </p>
      <p class="intro">
        Every month, someone brings a real stuckness they're currently facing in
        software development, distilled into a "stuckness vignette." We spend
        some time understanding the situation, asking questions, and exploring it
        together. Then we use <strong>Thinkies</strong> to discover
        <span class="hl hl-green">new ways of looking</span> at the challenge to see
        if we can get ourselves unstuck.
      </p>
      <a href="#next-vignette" class="scroll-link">
        Join the conversation on August 12th ↓
      </a>
    </div>
  </header>

  <main>
    <!-- ─── HOW IT WORKS ─── -->
    <section class="how-it-works" id="how-it-works">
      <div class="es-container">
        <p class="section-label">How It Works</p>
        <h2 class="section-title">
          Engage in a hands-on
          <span class="hl hl-green">community workshop</span>
        </h2>
        <p class="section-subtitle">
          No lectures. This isn't a conference talk. Just a small circle of
          practitioners thinking together and getting practice with Thinkies in a
          real-world context.
        </p>
        <div class="es-steps">
          {#each steps as step}
            <StepCard {step} />
          {/each}
        </div>
      </div>
    </section>

    <!-- ─── THINKIES MAP ─── -->
    <section class="thinkies-map" id="thinkies-map">
      <div class="es-container">
        <div class="section-head">
          <p class="section-label">The Toolkit</p>
          <h2 class="section-title">
            A map of <span class="hl hl-purple">Thinkies</span> to think with
          </h2>
          <p class="section-subtitle">
            Each Thinkie is a small, reusable move for shifting how you see a
            stuck situation. Tap any card to read Kent Beck's write-up on his
            newsletter.
          </p>
        </div>
        <ThinkieGrid {thinkies} />
      </div>
    </section>

    <!-- ─── NEXT VIGNETTE: event card + the people, in one section ─── -->
    <section class="vignette" id="next-vignette">
      <div class="es-container">
        <div class="vignette-head">
          <p class="section-label">Our Next Stuckness Vignette</p>
          <h2 class="section-title">
            Each month, one real <span class="hl hl-purple">Stuckness</span>
          </h2>
          <p>
            Meet the challenge we'll explore together, and let's see if we can get
            ourselves unstuck.
          </p>
        </div>

        <div class="event-card">
          <p class="event-label">Our Next Event</p>
          <h2>Stuckness Vignette: {nextEvent.vignette}</h2>
          <p class="challenge">{nextEvent.challenge}</p>
          <p class="description">
            {beforeHighlight}<span class="hl hl-orange"
              >{nextEvent.descriptionHighlight}</span
            >{afterHighlight}
          </p>

          <div class="event-meta">
            <div class="event-meta-primary">
              <div class="meta-box">
                <span class="meta-label">Community Member Experiencing the Stuck</span>
                <span class="value">{nextEvent.communityMember}</span>
              </div>
              <div class="meta-box">
                <span class="meta-label">Special Guest</span>
                <span class="value">
                  {nextEvent.specialGuest}
                  <span class="sub">{nextEvent.specialGuestNote}</span>
                </span>
              </div>
            </div>
            <div class="event-meta-secondary">
              <div class="meta-box meta-box--secondary">
                <span class="meta-label">Your Co-Hosts</span>
                <span class="value">{nextEvent.coHosts}</span>
              </div>
              <div class="meta-box meta-box--secondary">
                <span class="meta-label">Date &amp; Time</span>
                <span class="value">
                  {nextEvent.dateLong}
                  <span class="sub">{nextEvent.time}</span>
                </span>
              </div>
            </div>
          </div>

          <a
            href={eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-es-coral"
          >
            Save your spot on Eventbrite
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              />
            </svg>
          </a>
        </div>

        <div class="people-head">
          <h3>Who you'll be exploring with</h3>
          <p>The people bringing, framing, and hosting this month's stuckness.</p>
        </div>
        <div class="people-grid">
          {#each people as person, i}
            <PersonRow {person} reverse={i % 2 === 1} />
          {/each}
        </div>
      </div>
    </section>

    <!-- ─── FINAL CTA ─── -->
    <section class="join-cta">
      <div class="es-container">
        <p class="join-cta__eyebrow">{nextEvent.dateLong} · {nextEvent.time}</p>
        <h2 class="join-cta__title">Come explore the stuckness with us</h2>
        <p class="join-cta__text">
          Pull up a chair, bring your curiosity, and let's see if we can break the
          stuck together.
        </p>
        <a
          href={eventbriteUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-es-coral"
        >
          Save your spot on Eventbrite
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            />
          </svg>
        </a>
      </div>
    </section>
  </main>

  <!-- ─── FOOTER ─── -->
  <footer class="es-footer">
    <div class="es-container">
      <div class="kent-note">
        <img src="{base}/img/kent-pic.jpg" alt="Kent Beck" />
        <span>
          Thinkies were created by <strong>Kent Beck</strong>.
          <a
            href="https://tidyfirst.substack.com/s/thinkies"
            target="_blank"
            rel="noopener noreferrer">Learn more →</a
          >
        </span>
      </div>
      <p class="footer-note">
        Can't make the date live?
        <a href={eventbriteUrl} target="_blank" rel="noopener noreferrer">
          Register on Eventbrite anyway
        </a>
        to get notified of the next community workshop.
      </p>
      <p class="citation">
        "Stuckness Vignettes" are inspired by an academic paper by
        {paperCitation.authors},
        <em>"{paperCitation.title}"</em>
        ({paperCitation.year}).
        <a href={paperCitation.url} target="_blank" rel="noopener noreferrer">
          Read the paper on arXiv →
        </a>
      </p>
    </div>
  </footer>

  <!-- ─── FULL-WIDTH BOTTOM BAR ─── -->
  <nav class="footer-bar">
    <div class="es-container">
      <a href="{base}/">Back to thinkies.org</a>
      <a href="{base}/organizers/">Organizing Team</a>
      <a href="{base}/code_of_conduct.html">Code of Conduct</a>
      <a href="{base}/privacy.html">Privacy Policy</a>
    </div>
  </nav>
</div>

<style>
  /* This page keeps its own light, editorial look — it deliberately sits apart
     from the daisyUI theme used by the rest of the site. */
  .es-page {
    --purple: #533483;
    --purple-deep: #422a6a;
    --purple-soft: #f3eeff;
    --coral: #fd5353;
    --coral-deep: #e64545;
    --teal: #0d9488;
    --navy-1: #1a1a2e;
    --plum: #2d1b4e;

    --bg: #ffffff;
    --bg-warm: #f7f6fb;
    --fg: #1a1a2e;
    --fg-soft: #3a3a52;
    --muted: #6b6b80;
    --border: #e7e4f0;

    --marker-yellow: #fde047;
    --marker-purple: #d8b4fe;
    --marker-green: #86efac;
    --marker-orange: #fdba74;

    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-full: 9999px;

    --shadow-sm: 0 1px 3px rgba(26, 26, 46, 0.08);
    --shadow-lg:
      0 12px 40px rgba(26, 26, 46, 0.16), 0 4px 12px rgba(26, 26, 46, 0.08);

    background: var(--bg);
    color: var(--fg);
    line-height: 1.65;
    overflow-x: hidden;
  }

  .es-container {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 4vw, 3rem);
  }

  /* ─── HIGHLIGHTER MARKS ─── */
  /* A background gradient (rather than an absolutely-placed ::before) so the
     marker wraps line-by-line on mobile instead of smearing across the box. */
  .hl {
    --hl-color: var(--marker-yellow);
    background-image: linear-gradient(
      transparent 52%,
      var(--hl-color) 52%,
      var(--hl-color) 94%,
      transparent 94%
    );
    background-repeat: no-repeat;
    padding: 0 0.06em;
    border-radius: 2px;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .hl-purple {
    --hl-color: var(--marker-purple);
  }
  .hl-green {
    --hl-color: var(--marker-green);
  }
  .hl-orange {
    --hl-color: var(--marker-orange);
  }

  /* ─── NAV / TOP BAR ─── */
  .es-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }

  .es-nav .es-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    height: 3.9rem;
  }

  .es-nav .brand {
    font-weight: 800;
    font-size: 1.05rem;
    color: var(--fg);
    text-decoration: none;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s;
  }

  .nav-links a:hover {
    color: var(--purple);
  }

  .next-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--purple);
    background: var(--purple-soft);
    border: 1px solid rgba(83, 52, 131, 0.18);
    padding: 0.4rem 0.9rem;
    border-radius: var(--radius-full);
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s;
  }

  .next-pill:hover {
    background: #eae2ff;
    transform: translateY(-1px);
  }

  .next-pill .dot {
    width: 8px;
    height: 8px;
    background: var(--coral);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  .next-pill strong {
    color: var(--fg);
    font-weight: 700;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.55;
      transform: scale(0.8);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .next-pill .dot,
    .event-label::before {
      animation: none;
    }
  }

  @media (max-width: 860px) {
    .nav-links {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .next-pill .label-long {
      display: none;
    }
  }

  /* ─── CORAL BUTTON ─── */
  .btn-es-coral {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--coral);
    color: #fff;
    font-weight: 700;
    font-size: 1.05rem;
    padding: 1rem 2.25rem;
    border-radius: var(--radius-full);
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 6px 20px rgba(253, 83, 83, 0.35);
  }

  .btn-es-coral:hover {
    background: var(--coral-deep);
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(253, 83, 83, 0.45);
  }

  .btn-es-coral svg {
    width: 1.05em;
    height: 1.05em;
    fill: currentColor;
    transition: transform 0.2s;
  }

  .btn-es-coral:hover svg {
    transform: translate(2px, -2px);
  }

  /* ─── HERO ─── */
  .hero {
    padding: clamp(4.5rem, 11vw, 7.5rem) 0 clamp(3.5rem, 7vw, 5.5rem);
    text-align: center;
    position: relative;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, var(--purple), var(--coral));
    border-radius: 2px;
  }

  .hero-eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--purple);
    margin-bottom: 1.25rem;
  }

  .hero h1 {
    font-size: clamp(2.6rem, 6.5vw, 4.2rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: var(--fg);
    margin-bottom: 1.25rem;
  }

  .hero .subtitle {
    font-size: clamp(1.1rem, 2.2vw, 1.45rem);
    font-weight: 600;
    color: var(--fg-soft);
    max-width: 40rem;
    margin: 0 auto 1.5rem;
    line-height: 1.5;
  }

  .hero .intro {
    font-size: 1.08rem;
    color: var(--muted);
    max-width: 46rem;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }

  .hero .intro strong {
    color: var(--fg);
    font-weight: 700;
  }

  .hero .scroll-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--purple);
    text-decoration: none;
    transition:
      gap 0.2s,
      color 0.2s;
  }

  .hero .scroll-link:hover {
    gap: 0.75rem;
    color: var(--purple-deep);
  }

  /* ─── SHARED SECTION HEADINGS ─── */
  .section-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--purple);
    margin-bottom: 0.75rem;
  }

  .section-title {
    font-size: clamp(1.7rem, 3.8vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.2;
    color: var(--fg);
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 44rem;
    line-height: 1.65;
    margin-bottom: 2.5rem;
  }

  /* ─── HOW IT WORKS ─── */
  .how-it-works {
    padding: clamp(3.5rem, 8vw, 5.5rem) 0;
    background: var(--bg-warm);
  }

  /* This container was originally class="steps", which silently collided with
     DaisyUI's global `.steps` component (display:inline-grid; grid-auto-flow:
     column). Those unset properties leaked through and forced the cards into
     side-by-side columns at every viewport width, so it was renamed to
     .es-steps to avoid the collision. */
  .how-it-works .es-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 720px) {
    .how-it-works .es-steps {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
    }
  }

  /* ─── THINKIES MAP ─── */
  .thinkies-map {
    padding: clamp(3.5rem, 8vw, 5.5rem) 0;
    background: var(--bg);
  }

  .thinkies-map .section-head {
    text-align: center;
    max-width: 42rem;
    margin: 0 auto 2.75rem;
  }

  .thinkies-map .section-subtitle {
    max-width: none;
    margin: 0.75rem auto 0;
  }

  /* ─── NEXT VIGNETTE ─── */
  .vignette {
    padding: clamp(4rem, 9vw, 6.5rem) 0;
    background: linear-gradient(
      160deg,
      var(--navy-1) 0%,
      var(--plum) 50%,
      var(--navy-1) 100%
    );
  }

  .vignette .section-label {
    color: #c4b5fd;
  }

  .vignette-head {
    text-align: center;
    margin-bottom: 2.75rem;
  }

  .vignette-head .section-title {
    color: #fff;
  }

  .vignette-head p {
    color: rgba(255, 255, 255, 0.72);
    max-width: 34rem;
    margin: 0 auto;
    font-size: 1.05rem;
  }

  /* On the dark heading, white text over a translucent marker. Scoped to the
     head so the white event card below keeps the normal highlight. */
  .vignette-head .hl {
    color: #fff;
    border-radius: 4px;
    padding: 0 0.18em;
    background-image: linear-gradient(
      transparent 6%,
      rgba(253, 224, 71, 0.5) 6%,
      rgba(253, 224, 71, 0.5) 97%,
      transparent 97%
    );
  }

  .event-card {
    background: #fff;
    border-radius: var(--radius-lg);
    padding: clamp(2.25rem, 5vw, 3.25rem);
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    margin-bottom: 3.5rem;
  }

  .event-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: var(--coral);
  }

  .event-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--purple);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .event-label::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--coral);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  .event-card h2 {
    font-size: clamp(1.6rem, 3.8vw, 2.25rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.2;
    color: var(--fg);
    margin-bottom: 0.5rem;
  }

  .event-card .challenge {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--purple);
    margin-bottom: 1.5rem;
  }

  .event-card .description {
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--fg-soft);
    max-width: 48rem;
    margin-bottom: 2rem;
  }

  .event-meta {
    margin-bottom: 2.25rem;
  }

  /* The community member and special guest get the room; co-hosts and date
     sit on a quieter second line. */
  .event-meta-primary {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1rem;
  }

  .event-meta-secondary {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 640px) {
    .event-meta-primary,
    .event-meta-secondary {
      grid-template-columns: 1fr 1fr;
    }
  }

  .meta-box {
    padding: 1.25rem 1.4rem;
    background: var(--purple-soft);
    border: 1px solid rgba(83, 52, 131, 0.12);
    border-radius: var(--radius-md);
    /* Grid items default to min-width: auto, which can keep a track from
       shrinking below its content's natural size and push it past the
       container edge — force it to respect the track width instead. */
    min-width: 0;
    overflow-wrap: break-word;
  }

  /* Renamed from .label, which collided with DaisyUI's global `.label`
     (white-space: nowrap) — that leaked in and stopped long titles like
     "Community Member Experiencing the Stuck" from wrapping, overflowing the
     box. */
  .meta-box .meta-label {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--purple);
    display: block;
    margin-bottom: 0.3rem;
  }

  .meta-box .value {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--fg);
    line-height: 1.35;
  }

  .meta-box .value .sub {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--muted);
    margin-top: 0.15rem;
  }

  .meta-box--secondary {
    background: #faf9fd;
  }

  .meta-box--secondary .value {
    font-size: 0.98rem;
  }

  /* ─── PEOPLE ─── */
  .people-head {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .people-head h3 {
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }

  .people-head p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
  }

  .people-grid {
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
    max-width: 56rem;
    margin: 0 auto;
  }

  /* ─── FINAL CTA ─── */
  .join-cta {
    padding: clamp(3.5rem, 8vw, 5.5rem) 0;
    background: var(--bg-warm);
    text-align: center;
    border-top: 1px solid var(--border);
  }

  .join-cta__eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--purple);
    margin-bottom: 1rem;
  }

  .join-cta__title {
    font-size: clamp(1.7rem, 4vw, 2.6rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.15;
    color: var(--fg);
    margin-bottom: 0.85rem;
  }

  .join-cta__text {
    font-size: 1.08rem;
    color: var(--muted);
    max-width: 34rem;
    margin: 0 auto 2rem;
    line-height: 1.65;
  }

  /* ─── FOOTER ─── */
  .es-footer {
    padding: clamp(3rem, 6vw, 4.5rem) 0 clamp(2.5rem, 5vw, 3.5rem);
    border-top: 1px solid var(--border);
    text-align: center;
    background: var(--bg-warm);
  }

  .kent-note {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.85rem;
    max-width: 100%;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    padding: 0.5rem 1.25rem 0.5rem 0.5rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-sm);
  }

  .kent-note img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .kent-note span {
    font-size: 0.9rem;
    color: var(--fg-soft);
    font-weight: 500;
  }

  .kent-note strong {
    color: var(--fg);
    font-weight: 700;
  }

  .kent-note a {
    color: var(--purple);
    font-weight: 700;
    text-decoration: none;
  }

  .kent-note a:hover {
    text-decoration: underline;
  }

  .footer-note {
    font-size: 0.95rem;
    color: var(--muted);
    margin-bottom: 1.25rem;
    line-height: 1.7;
  }

  .footer-note a {
    color: var(--coral);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;
    font-weight: 700;
  }

  .citation {
    font-size: 0.8rem;
    color: #8a8698;
    margin: 0 auto;
    line-height: 1.7;
    max-width: 40rem;
    font-style: italic;
  }

  .citation a {
    color: var(--purple);
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .citation a:hover {
    text-decoration: underline;
  }

  .footer-bar {
    background: var(--navy-1);
    padding: 1.5rem 0;
  }

  .footer-bar .es-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem 2rem;
  }

  .footer-bar a {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.15s;
  }

  .footer-bar a:hover {
    color: #fff;
  }
</style>
