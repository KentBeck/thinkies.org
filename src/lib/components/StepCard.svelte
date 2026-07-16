<script>
  import { base } from '$app/paths';

  /** A step from $lib/data/exploring-stuckness. */
  export let step;
</script>

<div class="step-card" style="--accent: {step.accent}">
  <span class="step-number">{step.number}</span>
  <img
    class="step-img"
    src="{base}/img/exploring-stuckness/{step.image}"
    alt={step.title}
  />
  <h3>{step.title}</h3>
  <p>{step.body}</p>
</div>

<style>
  .step-card {
    background: #ffffff;
    border: 1px solid #ece9f5;
    border-top: 5px solid var(--accent, #533483);
    border-radius: 20px;
    padding: 2.25rem 1.75rem;
    box-shadow:
      0 12px 40px rgba(26, 26, 46, 0.16),
      0 4px 12px rgba(26, 26, 46, 0.08);
    transition: transform 0.25s;
    /* Grid items default to min-width: auto, which lets a wide child (like
       the illustration) keep the track from shrinking on narrow screens. */
    min-width: 0;
  }

  .step-card:hover {
    transform: translateY(-4px);
  }

  .step-number {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    color: #533483;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.75rem;
  }

  .step-img {
    width: 100%;
    height: 168px;
    object-fit: contain;
    object-position: center;
    display: block;
    margin-bottom: 1.15rem;
  }

  .step-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    letter-spacing: -0.01em;
    color: #1a1a2e;
  }

  .step-card p {
    font-size: 0.95rem;
    color: #6b6b80;
    line-height: 1.65;
  }
</style>
