<script>
  import Polaroid from './Polaroid.svelte';

  /** A person from $lib/data/exploring-stuckness. */
  export let person;
  /** Mirror the layout so consecutive rows alternate sides. */
  export let reverse = false;
</script>

<div
  class="person-row"
  class:person-row--reverse={reverse}
  style="--tint: {person.tint}"
>
  <Polaroid photo={person.photo} name={person.name} rotation={person.rotation} />

  <div class="person-bio">
    <p class="person-bio__role">{person.role}</p>
    <p class="person-bio__name">{person.name}</p>
    <p class="person-bio__text">{@html person.bio}</p>
  </div>
</div>

<style>
  .person-row {
    display: flex;
    align-items: flex-start;
    gap: 2.5rem;
    padding: 1.85rem 2.1rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    /* Set per person: a purple that lightens down the list, like zooming in. */
    background: var(--tint, rgba(83, 52, 131, 0.4));
  }

  .person-row--reverse {
    flex-direction: row-reverse;
  }

  .person-bio {
    flex: 1;
    padding-top: 0.5rem;
  }

  .person-bio__role {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #a78bfa;
    margin-bottom: 0.6rem;
  }

  .person-bio__name {
    font-size: 1.25rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
  }

  .person-bio__text {
    color: rgba(255, 255, 255, 0.78);
    line-height: 1.75;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    .person-row,
    .person-row--reverse {
      flex-direction: column;
      align-items: center;
    }

    .person-bio {
      text-align: center;
    }
  }
</style>
