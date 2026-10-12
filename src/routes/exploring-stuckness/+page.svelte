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
          <li><a href="{base}/exploring-stuckness/past/">Past Vignettes</a></li>
        </ul>
        <a
          href={eventbriteUrl ?? '#next-vignette'}
          target={eventbriteUrl ? '_blank' : undefined}
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
        Join the conversation on {nextEvent.dateCasual} ↓
      </a>

      <figure class="hero-poster">
        <img
          src="{base}/img/exploring-stuckness/{nextEvent.poster}"
          alt="Poster for Exploring Stuckness on {nextEvent.dateLong} at {nextEvent.timeShort}. This month's stuckness vignette: {nextEvent.vignette}. With {nextEvent.communityMember}, {nextEvent.coHosts}."
          width="1600"
          height="878"
          decoding="async"
        />
      </figure>
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

          {#if eventbriteUrl}
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
          {:else}
            <span class="btn-es-coral btn-es-coral--soon">Registration opens soon</span>
          {/if}
        </div>

        <div class="people-head">
          <h3>Who you'll be exploring with</h3>
          <p>The people bringing and hosting this month's stuckness.</p>
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
        <p class="join-cta__eyebrow">{nextEvent.dateLong} · {nextEvent.timeShort}</p>
        <h2 class="join-cta__title">Come explore the stuckness with us</h2>
        <p class="join-cta__text">
          Pull up a chair, bring your curiosity, and let's see if we can break the
          stuck together.
        </p>
        {#if eventbriteUrl}
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
        {:else}
          <span class="btn-es-coral btn-es-coral--soon">Registration opens soon</span>
        {/if}
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
      {#if eventbriteUrl}
        <p class="footer-note">
          Can't make the date live?
          <a href={eventbriteUrl} target="_blank" rel="noopener noreferrer">
            Register on Eventbrite anyway
          </a>
          to get notified of the next community workshop.
        </p>
      {/if}
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
  /* The shared shell — design tokens, container, highlighter marks, nav,
     coral button and footer — lives in src/app.css under `.es-page`, so this
     page and /exploring-stuckness/past/ stay in visual sync. Only styling
     unique to this page is scoped here. */

  @media (prefers-reduced-motion: reduce) {
    .event-label::before {
      animation: none;
    }
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

  .hero-poster {
    max-width: 58rem;
    margin: 3rem auto 0;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    line-height: 0;
  }

  .hero-poster img {
    width: 100%;
    height: auto;
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

  /* Sized so a ~60-character vignette title stays on one line from ~950px up;
     below that it wraps, balanced. Widen the clamp if titles get shorter. */
  .event-card h2 {
    font-size: clamp(1.6rem, 2.7vw, 1.95rem);
    text-wrap: balance;
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

  /* The community member gets the room; co-hosts and date sit on a quieter
     second line. */
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

</style>
