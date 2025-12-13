<script lang="ts">
  import { fade } from 'svelte/transition';

  // 1. ACCEPT DATA FROM SANITY
  export let features: any[] = [];
  export let services: any[] = []; // Accepted services prop

  // 2. IMAGE IMPORTS
  import featuresImage from '$lib/assets/images/Features.png';
  import illustration1 from '$lib/assets/images/Illustration1.png';
  import illustration2 from '$lib/assets/images/Illustration2.png';
  import illustration3 from '$lib/assets/images/Illustration3.png';

  // 3. COMBINE SANITY DATA FOR MAIN TABS (Using Features only, as requested)
  $: sanityTabs = [
    // Map Features data only [cite: 16]
    ...(features || []).map(f => ({
      name: f.title, 
      title: f.title, 
      description: f.description, 
      image: f.iconUrl || featuresImage, 
      type: 'feature'
    }))
  ];

  // 4. FINAL TABS ARRAY LOGIC (using combined data or hardcoded fallback) [cite: 17, 18, 19, 20, 21]
  $: tabs = sanityTabs.length > 0 
    ? sanityTabs
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

  // --- HARDCODED SECTIONS ---
  const topStats = [
    { title: "40+ AI-driven categories", text: "For a smarter, more refined search" },
    { title: "Advanced filtering", text: "Find hidden winners others miss" },
    { title: "100M+ ads", text: "Constantly updated and verified" },
    { title: "Growth signals", text: "Track ads with data-proven momentum" }
  ];
  
  // Logic for featureCards (using services or hardcoded fallback) [cite: 24, 25, 26, 27, 28]
  $: featureCards = services && services.length > 0
    ? services.map(s => ({
        title: s.title,
        description: s.description,
        image: s.imageUrl || featuresImage 
      }))
    : [
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
  
  let activeServiceTab: number | null = 0;
</script>

<section class="w-full bg-primary">

<div class="responsive-container mx-auto pb-24 bg-primary max-w-7xl px-4 sm:px-6">
    <div class="text-center mb-12">
    <h2 class="h-primary">
      A glimpse of what’s waiting for you
    </h2>
  </div>
  
  <div class="bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col mb-12">
    
    <div class="hidden sm:flex overflow-x-auto scrollbar-hide border-b border-gray-200 bg-gray-50/50">
      {#each tabs as tab, index}
        <button
          on:click={() => activeTab = index}
          class="flex-1 py-4 px-6 text-sm md:text-base font-semibold text-center whitespace-nowrap transition-all duration-200 outline-none
          {activeTab === index 
            ? 'bg-white text-gray-900 border-r border-l border-gray-200 first:border-l-0 last:border-r-0 shadow-[0_2px_0_0_white] translate-y-px' 
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}"
        >
          {tab.name}
        </button>
      {/each}
    </div>

    <div class="sm:hidden border-b border-gray-200">
      {#each tabs as tab, index}
        <div class="border-t border-gray-200 first:border-t-0">
          <button
            on:click={() => activeTab = activeTab === index ? -1 : index}
            class="w-full text-left py-4 px-4 text-base font-semibold text-gray-900 flex justify-between items-center transition-colors duration-200
            {activeTab === index ? 'bg-gray-50' : 'hover:bg-gray-100'}"
          >
            {tab.name}
            <span>{activeTab === index ? '—' : '+'}</span>
          </button>
          
          {#if activeTab === index}
            <div class="w-full h-48 bg-gray-100 relative overflow-hidden">
              <img 
                src={tab.image} 
                alt={tab.title}
                class="absolute inset-0 w-full h-full object-cover object-left"
              />
            </div>
            <div class="p-4 bg-white">
              <h2 class="text-xl font-bold text-gray-900 mb-2">
                {tab.title}
              </h2>
              <p class="text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {tab.description}
              </p>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="hidden sm:flex flex-col md:flex-row min-h-[400px]">
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
      <div class="w-full md:w-1/2 h-auto bg-gray-100 relative overflow-hidden">
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

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
      {#each topStats as stat}
        <div class="p-6">
          <h3 class="font-bold text-gray-900 mb-1">{stat.title}</h3>
          <p class="text-sm text-gray-500">{stat.text}</p>
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      {#each featureCards as card, index} 
        
        <div class="md:hidden">
          <div class="border border-gray-200 overflow-hidden bg-white ">
            <button
              on:click={() => activeServiceTab = activeServiceTab === index ? null : index}
              class="w-full text-left py-4 px-4 text-base font-semibold text-gray-900 flex justify-between items-center transition-colors duration-200
              {activeServiceTab === index ? 'bg-gray-50' : 'hover:bg-gray-100'}"
            >
              {card.title}
              <span>{activeServiceTab === index ? '—' : '+'}</span>
            </button>

            {#if activeServiceTab === index}
              <div class="h-48 bg-gray-100 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  class="w-full h-full object-cover" 
                />
              </div>
              <div class="p-4 bg-white">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p class="text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            {/if}
          </div>
        </div>
        
        <div class="hidden md:block bg-white border border-gray-200 overflow-hidden flex flex-col">
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

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
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
  /* Scrollbar hiding styles */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .h-primary {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    color: #111827;
  }
  
  /* Desktop Heading Size */
  @media (min-width: 768px) {
    .h-primary {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  /* Existing utility styles from source */
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