<script>
  export let results = [];
  export let query = '';
  export let onSelectThinkie;

  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  function truncateText(text, maxLength = 150) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
</script>

<div class="search-results">
  {#if results.length === 0}
    <div class="no-results">
      <svg xmlns="http://www.w3.org/2000/svg" class="no-results-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="no-results-text">No results found for "{query}"</p>
      <p class="no-results-hint">Try searching for different keywords</p>
    </div>
  {:else}
    <div class="results-header">
      <p class="results-count">{results.length} result{results.length !== 1 ? 's' : ''} found</p>
    </div>
    <div class="results-grid">
      {#each results as result}
        <button
          on:click={() => onSelectThinkie(result.thinkie)}
          class="hover-3d result-card-wrapper"
        >
          <div class="result-card">
            <h3 class="result-title">{result.thinkie.title}</h3>
            <div class="result-type">{result.type}</div>
            <p class="result-text">
              {@html highlightText(truncateText(result.matchedText), query)}
            </p>
          </div>
          <!-- 8 empty divs needed for the 3D effect -->
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .search-results {
    animation: fadeIn 0.3s ease;
  }

  .no-results {
    text-align: center;
    padding: 4rem 2rem;
  }

  .no-results-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1rem;
    color: #d1d5db;
  }

  .no-results-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .no-results-hint {
    color: #6b7280;
  }

  .results-header {
    margin-bottom: 1.5rem;
  }

  .results-count {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .results-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .result-card-wrapper {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .result-card {
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: left;
    transition: all 0.2s ease;
  }

  .result-card-wrapper:hover .result-card {
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  }

  .result-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .result-type {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: #667eea;
    background: #ede9fe;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  .result-text {
    color: #4b5563;
    line-height: 1.6;
    font-size: 0.9375rem;
  }

  .result-text :global(mark) {
    background: #fef08a;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-weight: 600;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
