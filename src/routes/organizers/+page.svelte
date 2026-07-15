<script>
  import { base } from '$app/paths';
  import Polaroid from '$lib/components/Polaroid.svelte';

  const pageTitle = 'The Organizing Team · Thinkies';
  const pageDescription =
    'Meet the Thinkies World Congress organizers behind the Thinkies community events.';

  // The team that organizes all the Thinkies events, in the order shown.
  const team = [
    { name: 'Arty Starr', photo: 'arty-pic.jpg', rotation: '-2deg' },
    { name: 'Blake Lindsay', photo: 'blake-pic.webp', rotation: '1.5deg' },
    { name: 'Bruno Monteiro', photo: 'bruno-pic.jpeg', rotation: '-1.5deg' },
    { name: 'Carlo Gilmar', photo: 'carlo-pic.png', rotation: '2deg' },
    { name: 'Mario Melo', photo: 'mario-pic.jpg', rotation: '1.5deg' },
    { name: 'Wisen Tanaka', photo: 'wisen-pic.jpeg', rotation: '-2deg' },
    { name: 'Kent Beck', photo: 'kent-pic.jpg', rotation: '1.5deg' }
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

<div class="org-page">
  <section class="doc-hero">
    <div class="org-container">
      <a href="{base}/" class="back">← Back to thinkies.org</a>
      <h1>The Organizing Team</h1>
      <p>
        The Thinkies community events are run by the organizers of Thinkies World
        Congress — a community exploring Kent Beck's Thinkies together.
      </p>
    </div>
  </section>

  <section class="team">
    <div class="org-container">
      <div class="team-grid">
        {#each team as member}
          <Polaroid
            photo={member.photo}
            name={member.name}
            rotation={member.rotation}
          />
        {/each}
      </div>

      <p class="team-roles">
        Co-organizers of Thinkies World Congress · Kent Beck, creator of Thinkies
      </p>

      <p class="team-note">
        Thinkies were created by
        <a
          href="https://tidyfirst.substack.com/s/thinkies"
          target="_blank"
          rel="noopener noreferrer">Kent Beck</a
        >. Want to get in touch with the organizing team? Email us at
        <a href="mailto:info@thinkies.org">info@thinkies.org</a>.
      </p>
    </div>
  </section>

  <footer class="org-footer">
    <div class="org-container">
      <p>
        <a href="{base}/">thinkies.org</a>
        <span class="sep">·</span>
        <a href="{base}/code_of_conduct.html">Code of Conduct</a>
        <span class="sep">·</span>
        <a href="{base}/privacy.html">Privacy Policy</a>
      </p>
    </div>
  </footer>
</div>

<style>
  .org-page {
    --purple: #533483;
    --navy-1: #1a1a2e;
    --plum: #2d1b4e;
    --bg-warm: #f7f6fb;
    --fg: #1a1a2e;
    --muted: #6b6b80;
    --border: #e7e4f0;

    background: #ffffff;
    color: var(--fg);
    line-height: 1.7;
  }

  .org-container {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 4vw, 3rem);
  }

  .doc-hero {
    background: linear-gradient(
      160deg,
      var(--navy-1) 0%,
      var(--plum) 55%,
      var(--navy-1) 100%
    );
    color: #fff;
    padding: clamp(3rem, 8vw, 5rem) 0 clamp(2.5rem, 6vw, 3.5rem);
    text-align: center;
  }

  .doc-hero .back {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: #c4b5fd;
    text-decoration: none;
    margin-bottom: 1.5rem;
  }

  .doc-hero .back:hover {
    color: #fff;
  }

  .doc-hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  .doc-hero p {
    color: rgba(255, 255, 255, 0.75);
    margin: 0.85rem auto 0;
    font-size: 1.08rem;
    max-width: 36rem;
  }

  .team {
    padding: clamp(3rem, 7vw, 5rem) 0;
  }

  .team-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(1.75rem, 4vw, 2.75rem);
    max-width: 52rem;
    margin: 0 auto;
  }

  .team-roles {
    text-align: center;
    margin: clamp(2.5rem, 5vw, 3.25rem) auto 0;
    max-width: 40rem;
    color: var(--muted);
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .team-note {
    max-width: 44rem;
    margin: clamp(3rem, 6vw, 4rem) auto 0;
    text-align: center;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.7;
  }

  .team-note a {
    color: var(--purple);
    font-weight: 700;
    text-decoration: none;
  }

  .team-note a:hover {
    text-decoration: underline;
  }

  .org-footer {
    border-top: 1px solid var(--border);
    background: var(--bg-warm);
    text-align: center;
    padding: 2.5rem 0;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .org-footer a {
    color: var(--purple);
    font-weight: 600;
    text-decoration: none;
  }

  .org-footer a:hover {
    text-decoration: underline;
  }

  .org-footer .sep {
    margin: 0 0.5rem;
    color: var(--border);
  }
</style>
