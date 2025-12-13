<script lang="ts">
  import illustration1 from '$lib/assets/images/Illustration1.png';
  import illustration2 from '$lib/assets/images/Illustration2.png';
  import illustration3 from '$lib/assets/images/Illustration3.png';

  const audienceData = [
    {
      title: "Ecommerce operators",
      subtitle: "Dropshippers, DTC brands & online store owners",
      imageUrl: illustration1, 
      detailsTitle: "See what’s starting to take off. Find proven winners",
           detailsText: "See which creatives, angles, and offers top brands and service businesses scale, so you pitch better concepts and win client approval faster."

    },
    {
      title: "Performance marketers",
          subtitle: "Dropshippers, DTC brands & online store owners",

      imageUrl: illustration2,
      detailsTitle: "Track any competitor. Spot what’s worth testing next",
      detailsText: "Get real signals on ads and offers that start working across any industry. No guessing and no noise, just clear ideas you can launch immediately."
    },
    {
      title: "Agencies & teams",
      subtitle: "Performance teams, creative teams & agency owners",
      imageUrl: illustration3,
      detailsTitle: "Bring stronger ideas. Prove them with data",
      detailsText: "See which creatives, angles, and offers top brands and service businesses scale, so you pitch better concepts and win client approval faster."
    }
  ];
</script>

<section class="w-full bg-primary">
    <div class="py-16 responsive-container mx-auto max-w-7xl">

      <div class="text-center mb-12 px-4 sm:px-6">
        <h2 class="text-3xl font-bold text-gray-900">
          Who AfterLib is built for
        </h2>
      </div>

      <div class="flex flex-nowrap overflow-x-auto gap-8 pb-4 px-4 sm:px-6 scrollbar-hide items-stretch min-h-full">
        {#each audienceData as card}
          <div class="flex flex-col h-full bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 shrink-0
                      w-[90vw] sm:w-[360px] md:w-[300px] lg:w-[calc(33.33%-20px)]">
            
            <div class="p-6 pb-4">
              <h3 class="text-lg md:text-xl font-bold text-[#00C853] mb-1">
                {card.title}
              </h3>
              <p class="text-sm text-gray-500 font-medium">
                {card.subtitle}
              </p>
            </div>

            <div class="w-full bg-[#F2F2F2] aspect-4/3 relative border-t border-b border-gray-100 px-6 py-6 flex items-center justify-center">
              <img 
                src={card.imageUrl} 
                alt={card.title}
                class="w-full h-full object-contain"
              />
            </div>

            <div class="p-6 pt-5 grow flex flex-col justify-start">
              <h4 class="text-base font-bold text-gray-900 mb-2 leading-tight">
                {card.detailsTitle}
              </h4>
              <p class="text-sm text-gray-600 leading-relaxed">
                {card.detailsText}
              </p>
            </div>

          </div>
        {/each}
      </div>
    </div>
</section>

