<script>
  import { base } from '$app/paths';

  /** The Thinkie cards from $lib/data/exploring-stuckness. */
  export let thinkies;
</script>

<div class="thinkie-grid">
  {#each thinkies as thinkie}
    <a
      class="thinkie-card"
      href={thinkie.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="{base}/img/thinkies/{thinkie.image}" alt={thinkie.name} />
    </a>
  {/each}
</div>

<style>
  .thinkie-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(0.85rem, 2vw, 1.4rem);
    max-width: 54rem;
    margin: 0 auto;
  }

  @media (min-width: 620px) {
    .thinkie-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 900px) {
    .thinkie-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .thinkie-card {
    display: block;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    /* The card art is portrait; lock the ratio so rows stay aligned. */
    aspect-ratio: 1542 / 2079;
    box-shadow: 0 4px 24px rgba(26, 26, 46, 0.08);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .thinkie-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .thinkie-card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow:
      0 12px 40px rgba(26, 26, 46, 0.16),
      0 4px 12px rgba(26, 26, 46, 0.08);
  }
</style>
