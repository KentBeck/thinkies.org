<script>
  export let onNavigate;
</script>

<div class="min-h-screen flex flex-col bg-base-200">
  <!-- Hero Section -->
  <header class="hero-gradient py-20">
    <div class="text-center flex flex-col items-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-4 text-white">Thinkies</h1>
      <p class="text-xl max-w-2xl mb-8 text-white/90">Powerful pattern-based tools for creative problem solving</p>
      <a href="#learn-more" class="btn-coral btn-coral-lg">Learn More</a>
    </div>
  </header>

  <main class="flex-grow">
    <!-- What Are Thinkies -->
    <section id="learn-more" class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-center mb-8">What Are Thinkies?</h2>
        <p class="text-center max-w-3xl mx-auto mb-12 text-lg">
          Thinkies are pattern-matching tools that help you generate creative ideas.
          Each Thinkie contains a pattern (something you recognize) and a transformation (something you do with that pattern).
          They're not about producing good ideas directly—they're about producing <em>lots</em> of ideas, some of which might be brilliant.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-base-100 shadow-lg hover:-translate-y-1 transition-transform">
            <div class="card-body">
              <h3 class="card-title text-accent-blue flex items-center gap-3 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Pattern Recognition
              </h3>
              <p class="text-base">Thinkies teach you to spot common situations where creative thinking can break through barriers.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg hover:-translate-y-1 transition-transform">
            <div class="card-body">
              <h3 class="card-title text-accent-blue flex items-center gap-3 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Simple Transformations
              </h3>
              <p class="text-base">Each Thinkie provides a specific transformation to apply when you recognize the pattern.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg hover:-translate-y-1 transition-transform">
            <div class="card-body">
              <h3 class="card-title text-accent-blue flex items-center gap-3 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Deferred Judgment
              </h3>
              <p class="text-base">Thinkies separate idea generation from evaluation, a key principle of creative thinking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How Thinkies Work -->
    <section class="py-16 px-4 bg-base-100">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-center mb-8">How Thinkies Work</h2>
        <ol class="list-decimal list-inside max-w-xl mx-auto mb-12 text-lg space-y-2">
          <li><strong>Match</strong> the pattern in a situation</li>
          <li><strong>Apply</strong> the transformation</li>
          <li><strong>Evaluate</strong> the result afterward</li>
        </ol>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title border-b-2 border-accent-blue pb-2 text-xl">Can't/Because</h3>
              <p class="text-base"><strong>Pattern:</strong> "We can't X because Y."</p>
              <p class="text-accent-blue font-semibold text-base"><strong>Transform:</strong> "When (not Y), then we can X."</p>
              <p class="text-sm italic">"We can't deploy daily because there are too many bugs" → "When we have fewer bugs, we can deploy daily."</p>
            </div>
          </div>
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title border-b-2 border-accent-blue pb-2 text-xl">Easy Bit</h3>
              <p class="text-base"><strong>Pattern:</strong> You're paralyzed by the magnitude of a problem.</p>
              <p class="text-accent-blue font-semibold text-base"><strong>Transform:</strong> Pick the absolutely easiest helpful thing to do and do it.</p>
              <p class="text-sm italic">Facing a complex project, start by setting up the simplest component.</p>
            </div>
          </div>
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title border-b-2 border-accent-blue pb-2 text-xl">Half in Half</h3>
              <p class="text-base"><strong>Pattern:</strong> Someone gives you a date for a scope of work.</p>
              <p class="text-accent-blue font-semibold text-base"><strong>Transform:</strong> Ask which half they can see in half the time.</p>
              <p class="text-sm italic">"We'll deliver in 6 months" → "Which half can I see in 3 months?"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories & Testimonials -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-center mb-8">Thinkie Categories</h2>
        <p class="text-center max-w-3xl mx-auto mb-8 text-lg">
          There are over 50 Thinkies organized into useful categories for different situations:
        </p>

        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <span class="badge badge-accent-blue badge-lg">Getting Unstuck</span>
          <span class="badge badge-accent-blue badge-lg">Decision Making</span>
          <span class="badge badge-accent-blue badge-lg">Problem Reframing</span>
          <span class="badge badge-accent-blue badge-lg">System Design</span>
          <span class="badge badge-accent-blue badge-lg">Collaboration</span>
          <span class="badge badge-accent-blue badge-lg">Process Optimization</span>
          <span class="badge badge-accent-blue badge-lg">Quick Analysis</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <p class="italic">"Half in Half is my all-time favorite Thinkie. I've made more money consulting with this than any other single technique."</p>
              <p class="text-right font-bold">— Kent Beck</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <p class="italic">"Thinkies have completely changed how I approach difficult problems. The Easy Bit Thinkie alone has helped me break through paralysis countless times."</p>
              <p class="text-right font-bold">— Software Engineer</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <p class="italic">"The beauty of Thinkies is that they give you a structured way to generate unstructured thinking. They're patterns that help you break patterns."</p>
              <p class="text-right font-bold">— Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conferences Section -->
    <section class="py-16 px-4 bg-base-100">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-center mb-8">Thinkies World Conferences</h2>
        <p class="text-center max-w-3xl mx-auto mb-8 text-lg">
          Join the community of creative thinkers exploring and sharing insights about Thinkies.
        </p>

        <div class="flex justify-center">
          <div class="card bg-base-100 border-2 border-accent-blue w-full max-w-md">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-2xl text-primary">TWC I</h3>
              <p class="text-neutral">June 4th, 2025</p>
              <p>12 Thinkies discussed, dozens of insights collected</p>
              <div class="card-actions mt-4">
                <button class="btn-coral" on:click={() => onNavigate('twc-1')}>
                  View Conference Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl text-center">
        <h2 class="text-3xl font-bold mb-8">Start Using Thinkies Today</h2>
        <p class="max-w-3xl mx-auto mb-8 text-lg">
          Begin with one Thinkie. Practice it until it becomes automatic. Then add another.
        </p>
        <a
          href="https://tidyfirst.substack.com/s/thinkies"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-coral btn-coral-lg"
        >
          Get the Full Thinkie Collection
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer footer-center p-10 bg-neutral text-neutral-content">
    <div>
      <p class="mb-4">Stay updated with new Thinkies and creative thinking tools</p>
      <div class="join mb-6">
        <input type="email" placeholder="Your email address" class="input-email join-item" />
        <button class="btn-coral join-item">Subscribe</button>
      </div>
      <p>
        &copy; 2025 Thinkies. All rights reserved.
        <a href="./privacy.html" class="link link-hover ml-2">Privacy Policy</a>
        <a href="./code_of_conduct.html" class="link link-hover ml-2">Code of Conduct</a>
      </p>
    </div>
  </footer>
</div>

<style>
  .hero-gradient {
    background: linear-gradient(135deg, #4a5568 0%, #718096 50%, #a0aec0 100%);
  }
</style>
