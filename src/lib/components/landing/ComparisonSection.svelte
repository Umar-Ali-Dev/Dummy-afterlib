<script lang="ts">
  // --- ASSET IMPORTS ---
  // Ensure these paths match where your files are located based on your screenshots
  import greenBg from '$lib/assets/images/GreenBg1.png';
  import tickIcon from '$lib/assets/icons/Tick.png';
  import crossIcon from '$lib/assets/icons/Cross.png';

  // --- DATA DEFINITION ---
  const leftColumn = [
    "Single ad library",
    "Raw, unprocessed data",
    "No growth visibility",
    "No metrics at all",
    "Limited filters",
    "Manual, slow research"
  ];

  const rightColumn = [
    "Ads & pages library",
    "Clean, actionable insights",
    "Active ads & reach growth tracking",
    "AI-driven performance scoring",
    "Advanced filtering system",
    "Smart, time-efficient workflow"
  ];
</script>

<section class="w-full bg-primary relative">
  <div 
    class="relative responsive-container mx-auto py-20 md:py-28 overflow-hidden bg-cover bg-center bg-no-repeat"
    style="background-image: url({greenBg});"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      
      <div class="text-center mb-16 space-y-2">
        <div class="inline-block">
          <span class="bg-black text-white text-3xl md:text-5xl font-bold px-4 py-1 leading-tight box-decoration-clone">
            The difference
          </span>
        </div>
        <br />
        <div class="inline-block">
          <span class="bg-black text-white text-3xl md:text-5xl font-bold px-4 py-1 leading-tight box-decoration-clone">
            between seeing ads
          </span>
        </div>
        <br />
        <div class="inline-block">
          <span class="bg-black text-white text-3xl md:text-5xl font-bold px-4 py-1 leading-tight box-decoration-clone">
            & understanding them
          </span>
        </div>
      </div>

      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row p-8 md:p-12 items-stretch">
        
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-end space-y-6 md:pr-8 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
          <h3 class="text-2xl font-bold text-gray-900 text-center md:text-right mb-2">
            Normal <br/> ad library
          </h3>
          <ul class="space-y-4 w-full">
            {#each leftColumn as item}
              <li class="flex items-center justify-center md:justify-end gap-3">
                <span class="text-gray-600 font-medium text-right">{item}</span>
                <img src={crossIcon} alt="No" class="w-4 h-4 shrink-0 opacity-60" />
              </li>
            {/each}
          </ul>
        </div>

        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:pl-8 pt-8 md:pt-0">
          <h3 class="text-2xl font-bold text-gray-900 text-center md:text-left mb-2">
            AfterLib’s <br/> ad library
          </h3>
          <ul class="space-y-4 w-full">
            {#each rightColumn as item}
              <li class="flex items-center justify-center md:justify-start gap-3">
                <img src={tickIcon} alt="Yes" class="w-5 h-5 shrink-0" />
                <span class="text-gray-900 font-semibold text-left">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

      </div>

      <div class="mt-12 flex justify-center">
        <button class="bg-[#1e1e1e] text-white font-semibold text-lg px-8 py-4 rounded hover:bg-black transition-colors duration-200">
          Start analyzing ads smarter
        </button>
      </div>

    </div>
  </div>
</section>