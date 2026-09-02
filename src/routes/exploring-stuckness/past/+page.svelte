<script>
  import { base } from '$app/paths';
  import {
    eventbriteUrl,
    nextEvent,
    paperCitation,
    pastEvents
  } from '$lib/data/exploring-stuckness.js';

  const pageDescription =
    'Every stuckness vignette we have explored together at the Exploring Stuckness community workshop, and the boards we filled along the way.';

  // Each card carries the same marker-pen highlight the vignette had on the
  // day, so split the description around it the way the main page does.
  const cards = pastEvents.map((event) => {
    const [before, after] = event.description.split(event.descriptionHighlight);
    return { ...event, before, after };
  });
</script>

<svelte:head>
  <title>Past Vignettes · Exploring Stuckness</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Past Vignettes · Exploring Stuckness" />
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
          <li><a href="{base}/exploring-stuckness/#how-it-works">How It Works</a></li>
          <li><a href="{base}/exploring-stuckness/#thinkies-map">The Thinkies</a></li>
          <li><a href="{base}/exploring-stuckness/#next-vignette">Next Vignette</a></li>
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

  <!-- ─── HEADER ─── -->
  <header class="archive-hero">
    <div class="es-container">
      <a href="{base}/exploring-stuckness/" class="back-link">← Exploring Stuckness</a>
      <p class="archive-eyebrow">The Archive</p>
      <h1>Past <span class="hl hl-purple">Vignettes</span></h1>
      <p class="archive-intro">
        Every month someone brings a real stuckness, and together we look at it
        from as many angles as we can find. Here's where those conversations
        have taken us so far — <span class="hl hl-green">the vignettes we've
        explored</span>, who brought them, and the boards we filled along the
        way.
      </p>
    </div>
  </header>

  <main>
    <!-- ─── THE ARCHIVE ─── -->
    <section class="archive">
      <div class="es-container">
        <ol class="archive-list">
          {#each cards as event}
            <li class="past-card">
              <div class="past-when">
                <span class="past-number">{event.number}</span>
                <span class="past-date">{event.dateLong}</span>
              </div>

              <div class="past-body">
                <h2 class="past-title">{event.vignette}</h2>
                <p class="past-challenge">{event.challenge}</p>
                <p class="past-description">
                  {event.before}<span class="hl hl-orange"
                    >{event.descriptionHighlight}</span
                  >{event.after}
                </p>

                <dl class="past-people">
                  <div class="past-person">
                    <dt>Brought the stuck</dt>
                    <dd>{event.communityMember}</dd>
                  </div>
                  {#if event.specialGuest}
                    <div class="past-person">
                      <dt>Special guest</dt>
                      <dd>{event.specialGuest}</dd>
                    </div>
                  {/if}
                  <div class="past-person">
                    <dt>Co-hosts</dt>
                    <dd>{event.coHosts}</dd>
                  </div>
                </dl>

                {#if event.links.length > 0}
                  <ul class="past-links">
                    {#each event.links as link}
                      <li>
                        <a
                          class="past-link"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    {/each}
                  </ul>
                {/if}
              </div>
            </li>
          {/each}
        </ol>
      </div>
    </section>

    <!-- ─── NEXT ONE ─── -->
    <section class="up-next">
      <div class="es-container">
        <p class="up-next__eyebrow">Up next · {nextEvent.dateLong} · {nextEvent.time}</p>
        <h2 class="up-next__title">{nextEvent.vignette}</h2>
        <p class="up-next__text">
          The next vignette is already on the table. Come add your angle to it.
        </p>
        <div class="up-next__actions">
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
          <a href="{base}/exploring-stuckness/#next-vignette" class="up-next__link">
            Read the vignette →
          </a>
        </div>
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
        Want to be part of the next one?
        <a href={eventbriteUrl} target="_blank" rel="noopener noreferrer">
          Register on Eventbrite
        </a>
        to join us live.
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
      <a href="{base}/exploring-stuckness/">Exploring Stuckness</a>
      <a href="{base}/organizers/">Organizing Team</a>
      <a href="{base}/code_of_conduct.html">Code of Conduct</a>
    </div>
  </nav>
</div>

<style>
  /* The shared shell — design tokens, container, highlighter marks, nav, coral
     button and footer — lives in src/app.css under `.es-page`. Only styling
     unique to the archive is scoped here.

     Class names are `past-*` / `archive-*` on purpose: daisyUI ships unscoped
     global rules for generic names like .card, .link and .hero that would
     otherwise leak in. See CLAUDE.md. */

  /* ─── HEADER ─── */
  .archive-hero {
    padding: clamp(2.5rem, 6vw, 4rem) 0 clamp(2.5rem, 5vw, 3.5rem);
    text-align: center;
    background: var(--bg-warm);
    border-bottom: 1px solid var(--border);
  }

  .back-link {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--muted);
    text-decoration: none;
    margin-bottom: 1.5rem;
    transition: color 0.15s;
  }

  .back-link:hover {
    color: var(--purple);
  }

  .archive-eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--purple);
    margin-bottom: 0.75rem;
  }

  .archive-hero h1 {
    font-size: clamp(2.25rem, 6vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 1.25rem;
  }

  .archive-intro {
    font-size: 1.05rem;
    color: var(--fg-soft);
    max-width: 40rem;
    margin: 0 auto;
    line-height: 1.75;
  }

  /* ─── THE ARCHIVE ─── */
  .archive {
    padding: clamp(3rem, 7vw, 5rem) 0;
  }

  .archive-list {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .past-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    padding: clamp(1.5rem, 4vw, 2.25rem);
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    /* Grid items default to min-width: auto, which lets long words push the
       card past the viewport on narrow screens. */
    min-width: 0;
  }

  /* Wide enough for the date to sit in its own rail beside the vignette. */
  @media (min-width: 820px) {
    .past-card {
      grid-template-columns: 11rem 1fr;
      gap: 2rem;
    }
  }

  .past-when {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 0;
  }

  .past-number {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--purple);
  }

  .past-date {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--muted);
    overflow-wrap: break-word;
  }

  .past-body {
    min-width: 0;
  }

  .past-title {
    font-size: clamp(1.35rem, 3.2vw, 1.75rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.25;
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
  }

  .past-challenge {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--coral);
    margin-bottom: 0.9rem;
  }

  .past-description {
    color: var(--fg-soft);
    line-height: 1.75;
    margin-bottom: 1.5rem;
  }

  .past-people {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 2rem;
    margin: 0 0 1.25rem;
    padding: 1rem 1.25rem;
    background: var(--purple-soft);
    border-radius: var(--radius-md);
  }

  .past-person {
    min-width: 0;
  }

  .past-people dt {
    font-size: 0.66rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--purple);
    margin-bottom: 0.15rem;
  }

  .past-people dd {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--fg);
    overflow-wrap: break-word;
  }

  .past-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .past-link {
    display: inline-flex;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--purple);
    background: #fff;
    border: 1px solid rgba(83, 52, 131, 0.25);
    border-radius: var(--radius-full);
    padding: 0.4rem 1rem;
    text-decoration: none;
    transition: all 0.15s;
  }

  .past-link:hover {
    background: var(--purple-soft);
    transform: translateY(-1px);
  }

  /* ─── UP NEXT ─── */
  .up-next {
    padding: clamp(3rem, 7vw, 4.5rem) 0;
    background: var(--plum);
    color: #fff;
    text-align: center;
  }

  .up-next__eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.85rem;
  }

  .up-next__title {
    font-size: clamp(1.6rem, 4.5vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin-bottom: 0.85rem;
  }

  .up-next__text {
    color: rgba(255, 255, 255, 0.75);
    max-width: 34rem;
    margin: 0 auto 2rem;
    line-height: 1.65;
  }

  .up-next__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem 1.75rem;
  }

  .up-next__link {
    font-size: 0.95rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.35);
    padding-bottom: 2px;
    transition: all 0.15s;
  }

  .up-next__link:hover {
    color: #fff;
    border-color: #fff;
  }
</style>
