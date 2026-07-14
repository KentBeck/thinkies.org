<script>
  import { base } from '$app/paths';

  /** Filename inside /static/img, e.g. "arty-pic.jpg". */
  export let photo;
  /** Person's name — used as the alt text and the handwritten caption. */
  export let name;
  /** Tilt of the photo, e.g. "-2deg". */
  export let rotation = '0deg';
</script>

<div class="polaroid-wrap" style="--rot: {rotation}">
  <div class="polaroid">
    <div class="tape"></div>
    <img src="{base}/img/{photo}" alt={name} class="polaroid__img" />
    <p class="polaroid__label">{name}</p>
  </div>
</div>

<style>
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
      0 4px 6px rgba(0, 0, 0, 0.12),
      0 12px 28px rgba(0, 0, 0, 0.22),
      inset 0 0 0 1px rgba(0, 0, 0, 0.06);
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
    font-size: 1.35rem;
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    z-index: 1;
  }
</style>
