<script>
  export let searchQuery = '';
  export let onSearch;
  export let onClear;

  function handleInput(event) {
    searchQuery = event.target.value;
    onSearch(searchQuery);
  }

  function handleClear() {
    searchQuery = '';
    onClear();
  }
</script>

<div class="search-container">
  <div class="search-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" class="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      type="text"
      placeholder="Search thinkies, scenarios, and insights..."
      class="search-input"
      bind:value={searchQuery}
      on:input={handleInput}
    />
    {#if searchQuery}
      <button on:click={handleClear} class="clear-button" aria-label="Clear search">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    {/if}
  </div>
</div>

<style>
  .search-container {
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    width: 20px;
    height: 20px;
    color: #9ca3af;
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 0.875rem 3rem 0.875rem 3rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    font-size: 1rem;
    transition: all 0.2s ease;
    background: white;
    color: #1f2937;
  }

  .search-input::placeholder {
    color: #9ca3af;
  }

  .search-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .clear-button {
    position: absolute;
    right: 0.75rem;
    background: #f3f4f6;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .clear-button:hover {
    background: #e5e7eb;
  }

  .clear-button svg {
    width: 20px;
    height: 20px;
    color: #6b7280;
  }
</style>
