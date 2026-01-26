<script>
  import { onMount } from 'svelte';
  import Home from './Home.svelte';
  import TWC1 from './TWC1.svelte';

  let currentPage = 'home';

  function navigate(page) {
    currentPage = page;
    // Update URL without page reload
    const url = page === 'home' ? '/' : `/conferences/${page}/`;
    window.history.pushState({ page }, '', url);
  }

  function handlePopState(event) {
    if (event.state?.page) {
      currentPage = event.state.page;
    } else {
      // Parse URL to determine page
      const path = window.location.pathname;
      if (path.includes('/conferences/twc-1')) {
        currentPage = 'twc-1';
      } else {
        currentPage = 'home';
      }
    }
  }

  onMount(() => {
    // Check initial URL
    const path = window.location.pathname;
    if (path.includes('/conferences/twc-1')) {
      currentPage = 'twc-1';
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  });
</script>

{#if currentPage === 'home'}
  <Home onNavigate={navigate} />
{:else if currentPage === 'twc-1'}
  <TWC1 onNavigate={navigate} />
{/if}
