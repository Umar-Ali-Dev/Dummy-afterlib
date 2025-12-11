<script lang="ts">
  import { fade } from 'svelte/transition';

  // 1. ACCEPT DATA FROM SANITY
  // The parent page passes the 'features' array here.
  export let features: any[] = [];

  // 2. IMAGE IMPORTS (Used as fallbacks or for other sections)
  import featuresImage from '$lib/assets/images/Features.png';
  import illustration1 from '$lib/assets/images/Illustration1.png';
  import illustration2 from '$lib/assets/images/Illustration2.png';
  import illustration3 from '$lib/assets/images/Illustration3.png';

  // 3. MAP SANITY DATA TO UI
  // If 'features' exists and has data, map it to the structure the UI expects.
  // Otherwise, fallback to the original hardcoded data (useful if Sanity is empty during dev).
  $: tabs = features && features.length > 0
    ? features.map(f => ({
        name: f.title,                      // Tab button name
        title: f.title,                     // Content Title
        description: f.description,         // Content Description
        image: f.iconUrl || featuresImage   // Sanity Image URL (or fallback)
      }))
    : [
        {
          name: "Smart categories",
          title: "Smart categories",
          description: "Understand your market at every layer.\n\nFilter ads by product categories and customer pain points to find what actually converts.",
          image: featuresImage
        },
        {
          name: "Smart filters",
          title: "Smart filters",
          description: "Refine your search with precision.\n\nUse advanced filtering to isolate specific market segments and identify high-performing trends instantly.",
          image: illustration1
        },
        {
          name: "Reach & spend transparency",
          title: "Reach & spend transparency",
          description: "See exactly where your budget goes.\n\nTrack impression shares and cost-per-acquisition across different demographics to optimize ROI.",
          image: illustration2
        },
        {
          name: "Performance scores",
          title: "Performance scores",
          description: "Data-driven insights for better decisions.\n\nAnalyze ad performance scores to predict success rates before you even launch a campaign.",
          image: illustration3
        }
    ];

  let activeTab = 0;

  // --- HARDCODED SECTIONS (Left untouched as requested) ---
  const topStats = [
    { title: "40+ AI-driven categories", text: "For a smarter, more refined search" },
    { title: "Advanced filtering", text: "Find hidden winners others miss" },
    { title: "100M+ ads", text: "Constantly updated and verified" },
    { title: "Growth signals", text: "Track ads with data-proven momentum" }
  ];

  const featureCards = [
    {
      title: "Page insights",
      description: "See total page reach, creatives, and performance signals to instantly understand what's working",
      image: illustration1
    },
    {
      title: "On-demand page tracking",
      description: "Import any page and track every creative, launch, and growth signal across e-commerce, lead gen, affiliate, and more",
      image: illustration2
    },
    {
      title: "Smart notifications",
      description: "Get instant alerts on your phone when ads scale, pages launch, or new winners appear. Stay ahead without manual checks",
      image: illustration3
    },
    {
      title: "Smart collections & workflow",
      description: "Import Sheets, bulk analyze, and organize competitors and ads at scale to save hours every week for you and your team",
      image: featuresImage
    }
  ];

  const bottomStats = [
    { title: "1M+ competitor pages", text: "Explore the page library we pioneered" },
    { title: "Never miss any data", text: "See what drives competitors growth before it happens" },
    { title: "Save 100h+ on research", text: "Automate your researching process" },
    { title: "Organize like a pro", text: "Skip messy spreadsheets and keep everything organized in one place" }
  ];
</script>

<section class="w-full bg-primary">

<div class="w-full max-w-6xl mx-auto p-4 mb-20 bg-primary">
    <div class="text-center mb-12">
    <h2 class="h-primary">
      A glimpse of what’s waiting for you
    </h2>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col mb-12">
    <div class="flex overflow-x-auto border-b border-gray-200 bg-gray-50/50">
      {#each tabs as tab, index}
        <button
          on:click={() => activeTab = index}
          class="flex-1 
          py-4 px-6 text-sm md:text-base font-semibold text-center whitespace-nowrap transition-all duration-200 outline-none
          {activeTab === index 
            ? 'bg-white text-gray-900 border-r border-l border-gray-200 first:border-l-0 last:border-r-0 shadow-[0_2px_0_0_white] translate-y-px' 
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}"
        >
          {tab.name}
        </button>
      {/each}
    </div>

    <div class="flex flex-col md:flex-row min-h-[400px]">
      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
        {#key activeTab}
          <div in:fade={{ duration: 200 }}>
            <h2 class="heading-primary mb-6">
              {tabs[activeTab].title}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {tabs[activeTab].description}
            </p>
          </div>
        {/key}
      </div>
      <div class="w-full md:w-1/2 bg-gray-100 relative overflow-hidden">
        {#key activeTab}
          <img 
            src={tabs[activeTab].image} 
            alt={tabs[activeTab].title}
            in:fade={{ duration: 300 }}
            class="absolute inset-0 w-full h-full object-cover object-left"
          />
        {/key}
      </div>
    </div>
  </div>


  <div class="space-y-8">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border border-gray-200 rounded-lg divide-y md:divide-y-0 md:divide-x divide-gray-200">
      {#each topStats as stat}
        <div class="p-6">
          <h3 class="font-bold text-gray-900 mb-1">{stat.title}</h3>
          <p class="text-sm text-gray-500">{stat.text}</p>
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each featureCards as card}
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
          <div class="h-64 bg-gray-100 relative overflow-hidden group">
              <img 
              src={card.image} 
              alt={card.title} 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
             />
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
            <p class="text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border border-gray-200 rounded-lg divide-y md:divide-y-0 md:divide-x divide-gray-200">
      {#each bottomStats as stat}
        <div class="p-6">
          <h3 class="font-bold text-gray-900 mb-1">{stat.title}</h3>
          <p class="text-sm text-gray-500">{stat.text}</p>
        </div>
      {/each}
    </div>

  </div>
</div>
</section>
<style>
  .heading-primary {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    color: #111827;
  }

  @media (min-width: 768px) {
    .heading-primary {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }
</style>