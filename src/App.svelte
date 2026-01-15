<script>
  import { onMount } from 'svelte';
  import InsightsList from './InsightsList.svelte';
  import SearchBar from './SearchBar.svelte';
  import SearchResults from './SearchResults.svelte';

  let thinkies = [];
  let loading = true;
  let error = null;
  let selectedThinkie = null;
  let searchQuery = '';
  let searchResults = [];

  $: totalInsights = thinkies.reduce((sum, t) => sum + t.insights.length, 0);
  $: isSearching = searchQuery.trim().length > 0;

  function selectThinkie(thinkie) {
    selectedThinkie = thinkie;
    searchQuery = '';
    searchResults = [];
  }

  function deselectThinkie() {
    selectedThinkie = null;
  }

  function handleSearch(query) {
    if (!query || query.trim().length === 0) {
      searchResults = [];
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = [];

    thinkies.forEach(thinkie => {
      // Search in title
      if (thinkie.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          thinkie,
          type: 'Title',
          matchedText: thinkie.title
        });
      }

      // Search in scenario
      if (thinkie.scenario.toLowerCase().includes(lowerQuery)) {
        results.push({
          thinkie,
          type: 'Scenario',
          matchedText: thinkie.scenario
        });
      }

      // Search in insights
      thinkie.insights.forEach(insight => {
        if (insight.toLowerCase().includes(lowerQuery)) {
          results.push({
            thinkie,
            type: 'Insight',
            matchedText: insight
          });
        }
      });
    });

    searchResults = results;
  }

  function handleClearSearch() {
    searchQuery = '';
    searchResults = [];
  }

  onMount(async () => {
    try {
      console.log('Fetching data...');
      const dataUrl = `${import.meta.env.BASE_URL}data/twc1_data.json`;
      const response = await fetch(dataUrl);
      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data loaded:', data);
      thinkies = data.thinkies;
      console.log('Thinkies:', thinkies);
      loading = false;
    } catch (e) {
      console.error('Error loading data:', e);
      error = e.message;
      loading = false;
    }
  });
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-br from-base-200 via-base-100 to-base-200">
  <main class="flex-grow">
    <div class="container mx-auto px-4 py-12 max-w-7xl">
      {#if !selectedThinkie}
        <div class="text-center mb-8">
          <h1 class="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Thinkies World Conference I
          </h1>
          <p class="text-lg opacity-70 mb-8">
            On June 4th, 2025, we discussed {thinkies.length} thinkies and collected {totalInsights} insights.
          </p>
          <SearchBar
            bind:searchQuery
            onSearch={handleSearch}
            onClear={handleClearSearch}
          />
        </div>
      {/if}

      {#if loading}
        <div class="flex justify-center items-center py-20">
          <span class="loading loading-spinner loading-lg"></span>
          <p class="ml-4 text-lg">Loading thinkies...</p>
        </div>
      {:else if error}
        <div class="alert alert-error shadow-lg max-w-2xl mx-auto">
          <p>Error loading data: {error}</p>
        </div>
      {:else if thinkies.length === 0}
        <div class="alert alert-warning shadow-lg max-w-2xl mx-auto">
          <p>No thinkies found!</p>
        </div>
      {:else if selectedThinkie}
        <div class="detail-view">
          <div class="detail-left">
            <button on:click={deselectThinkie} class="btn btn-ghost btn-sm mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all thinkies
            </button>
            <div class="hover-3d selected-card">
              <figure class="w-64 rounded-2xl">
                <img
                  src="{import.meta.env.BASE_URL}assets/images/{selectedThinkie.card_image}"
                  alt={selectedThinkie.title}
                  class="rounded-2xl shadow-2xl"
                />
              </figure>
              <!-- 8 empty divs needed for the 3D effect -->
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="detail-right">
            <InsightsList thinkie={selectedThinkie} onClose={deselectThinkie} />
          </div>
        </div>
      {:else if isSearching}
        <SearchResults
          results={searchResults}
          query={searchQuery}
          onSelectThinkie={selectThinkie}
        />
      {:else}
        <div class="cards-grid">
          {#each thinkies as thinkie}
            <button
              on:click={() => selectThinkie(thinkie)}
              class="hover-3d card-button"
              class:fade-out={selectedThinkie && selectedThinkie !== thinkie}
            >
              <figure class="w-48 rounded-2xl">
                <img
                  src="{import.meta.env.BASE_URL}assets/images/{thinkie.card_image}"
                  alt={thinkie.title}
                  class="rounded-2xl shadow-lg"
                />
              </figure>
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
  </main>

  <footer class="bg-base-300 mt-auto">
    <div class="container mx-auto px-4 py-8 text-center">
      <p class="text-sm opacity-80">
        Thinkies were created by Kent Beck, check them out:
        <a
          href="https://tidyfirst.substack.com/s/thinkies"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-primary font-semibold"
        >
          https://tidyfirst.substack.com/s/thinkies
        </a>
      </p>
    </div>
  </footer>
</div>

<style>
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    justify-items: center;
  }

  @media (min-width: 640px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .cards-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .cards-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .card-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .card-button:hover {
    transform: scale(1.05);
  }

  .fade-out {
    opacity: 0;
    pointer-events: none;
  }

  .detail-view {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    animation: fadeIn 0.5s ease;
  }

  @media (min-width: 1024px) {
    .detail-view {
      grid-template-columns: 350px 1fr;
    }
  }

  .detail-left {
    display: flex;
    flex-direction: column;
  }

  .detail-right {
    background: #f8fafc;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    min-height: 500px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .selected-card {
    animation: slideInFromRight 0.5s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInFromRight {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
