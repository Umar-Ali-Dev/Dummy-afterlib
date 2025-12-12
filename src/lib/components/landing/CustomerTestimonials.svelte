<script>
  // Assuming these asset imports exist in your $lib/assets/images directory
  import review1 from "$lib/assets/images/review-01.png";
  import review2 from "$lib/assets/images/review-02.png";
  import review3 from "$lib/assets/images/review-03.png";
  import review4 from "$lib/assets/images/review-04.png";
  import review5 from "$lib/assets/images/review-05.png";
  import review6 from "$lib/assets/images/review-06.png";
  import review7 from "$lib/assets/images/review-07.png";
  import review8 from "$lib/assets/images/review-08.png";
  import review9 from "$lib/assets/images/review-09.png";
  import review10 from "$lib/assets/images/review-10.png";

  const reviews = [
    { src: review1, alt: "Review 1" },
    { src: review2, alt: "Review 2" },
    { src: review3, alt: "Review 3" },
    { src: review4, alt: "Review 4" },
    { src: review5, alt: "Review 5" },
    { src: review6, alt: "Review 6" },
    { src: review7, alt: "Review 7" },
    { src: review8, alt: "Review 8" },
    { src: review9, alt: "Review 9" },
    { src: review10, alt: "Review 10" },
  ];
</script>

<section class="bg-primary py-16 md:py-24">
  <div class="responsive-container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 leading-tight">
      Trusted by real people <br class="hidden sm:inline" />
      who rely on real data
    </h2>

    <div class="mt-12 md:mt-20 grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2">
      <div class="space-y-8 md:space-y-12">
        {#each reviews.filter((_, i) => i % 2 === 0) as review}
          <div class="flex justify-start">
            <img 
              src={review.src} 
              alt={review.alt} 
              class="w-full h-auto max-w-lg" 
            />
          </div>
        {/each}
      </div>

      <div class="space-y-8 md:space-y-12 mt-0 md:mt-12">
        {#each reviews.filter((_, i) => i % 2 !== 0) as review}
          <div class="flex justify-start">
            <img 
              src={review.src} 
              alt={review.alt} 
              class="w-full h-auto max-w-lg" 
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>