<script lang="ts">
  // 1. Import your local images directly
  import illustration1 from '$lib/assets/images/Illustration1.png';
  import illustration2 from '$lib/assets/images/Illustration2.png';
  import illustration3 from '$lib/assets/images/Illustration3.png';

  // 2. Define the data using the imported images
  const audienceData = [
    {
      title: "Ecommerce operators",
      subtitle: "Dropshippers, DTC brands & online store owners",
      imageUrl: illustration1, 
      detailsTitle: "See what’s starting to take off. Find proven winners",
      detailsText: "AfterLib shows you which products and offers gain early traction, so you know exactly what to test or add to your brand before the crowd catches on."
    },
    {
      title: "Performance marketers",
      subtitle: "Media buyers, affiliates & online marketers",
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
    <div class="py-16 responsive-container mx-auto ">

  <div class="text-center mb-12">
    <h2 class="h-primary">
      Who AfterLib is built for
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 bg-primary">
    {#each audienceData as card}
      <div class="flex flex-col h-full bg-white border border-gray-200  overflow-hidden hover:shadow-xl transition-shadow duration-300">
        
        <div class="p-6 pb-4">
          <h3 class="text-lg md:text-xl font-bold text-[#00C853] mb-1">
            {card.title}
          </h3>
          <p class="text-sm text-gray-500 font-medium">
            {card.subtitle}
          </p>
        </div>

        <div class="w-full bg-[#F2F2F2] aspect-4/3 relative border-t border-b border-gray-100 px-6">
          <img 
            src={card.imageUrl} 
            alt={card.title}
            class="w-full h-full object-cover"
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