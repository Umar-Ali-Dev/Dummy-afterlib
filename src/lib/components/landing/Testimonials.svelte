<script lang="ts">
  import { onMount } from 'svelte';
  
  import arrowIcon from "$lib/assets/icons/Arrow.png";
  import twitterIcon from "$lib/assets/icons/Twitter.png";
  import avatarImage from "$lib/assets/images/Avatar.png";

  let scrollContainer: HTMLElement;
  let atStart = true;
  let atEnd = false;

  const checkScroll = () => {
    if (!scrollContainer) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    atStart = scrollLeft <= 0;
    atEnd = Math.abs(scrollLeft + clientWidth - scrollWidth) <= 2;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer) {
      const scrollAmount = scrollContainer.clientWidth / 2;
      const target = direction === 'left' 
        ? scrollContainer.scrollLeft - scrollAmount 
        : scrollContainer.scrollLeft + scrollAmount;
      scrollContainer.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  onMount(() => {
    checkScroll();
  });

  const reviews = [
    { id: 1, name: "Dominik", handle: "adv_ceo", tag: "8-figures seller", text: "When I'm searching for products to brand or for small upcoming dropshipping brands, I turn to AfterLib. Its page library is highly effective.", score: 4.9 },
    { id: 2, name: "Sarah J.", handle: "ecom_sarah", tag: "7-figures seller", text: "The best tool for market research I have used this year. The ad library features are unmatched compared to other tools.", score: 5.0 },
    { id: 3, name: "Mike Ross", handle: "m_ross_marketing", tag: "Agency Owner", text: "AfterLib saves my team hours of manual research. We find winning products faster and scale ads with confidence.", score: 4.8 },
    { id: 4, name: "Jessica P.", handle: "jess_dropship", tag: "Top Rated Seller", text: "I was skeptical at first, but the data accuracy is incredible. It has completely changed how I plan my product launches.", score: 4.9 },
    { id: 5, name: "Alex Chen", handle: "scale_with_alex", tag: "Marketing Pro", text: "Simple interface but powerful insights. Highly recommended for anyone serious about e-commerce branding.", score: 5.0 },
    { id: 6, name: "Liam N.", handle: "liam_taken", tag: "Brand Manager", text: "If you are looking for a tool that finds products, I will tell you... AfterLib is the one. A particular set of skills.", score: 4.7 },
  ];
</script>

<section class="w-full bg-primary py-16 px-4 md:px-8">
  <div class="responsive-container mx-auto">
    
    <div class="text-center mb-12 space-y-4">
      <h2 class="font-plus-jakarta-sans text-[40px] font-bold text-center custom-black tracking-tight leading-tight">
        Trusted by professional <br />
        marketers worldwide
      </h2>
      <div class="inline-block custom-green text-white font-bold px-1 py-1.5 text-xl h-10">
        Review score 4.9
      </div>
    </div>

    <div 
      bind:this={scrollContainer}
      on:scroll={checkScroll}
      class="flex overflow-x-auto gap-6  snap-x snap-mandatory scrollbar-hide"
      style="scrollbar-width: none; -ms-overflow-style: none;"
    >
      {#each reviews as review (review.id)}
        <div class="w-full md:w-[calc(50%-12px)] snap-start shrink-0">
          <div class="flex flex-col items-start ">
            
            <div class="flex items-start ">
               <div class="h-8 w-8 bg-black shrink-0">
                    <img src={avatarImage} alt={review.name} class="w-full h-full object-cover block" />
               </div>
               <div class="h-8 bg-black text-white px-3 flex items-center font-medium text-sm whitespace-nowrap">
                 {review.name}
               </div>
            </div>

            <div class="text-lg md:text-xl font-medium leading-8 text-gray-900 ml-px mb-0.5">
               <span class="bg-white px-2 py-1 merged-outline">
                 {review.text}
               </span>
            </div>
             
            <div class="flex items-start">
              <div class="h-7 bg-[#00C060] text-white px-3 flex items-center gap-2 text-xs font-bold shrink-0">
                <img src={twitterIcon} alt="Twitter" class="w-3.5 h-3.5 invert brightness-0" />
                {review.handle}
              </div>
              <div class="h-7 bg-black text-white px-3 flex items-center text-xs font-medium whitespace-nowrap">
                {review.tag}
              </div>
            </div>

          </div>
        </div>
      {/each}
    </div>

<div class="flex justify-center items-center mt-8">
  <button 
    on:click={() => !atStart && scroll('left')}
    disabled={atStart}
    class="w-12 h-12 flex items-center justify-center border border-gray-300 border-r-0 bg-white transition-all 
           {atStart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 active:scale-95 cursor-pointer'}"
  >
    <img src={arrowIcon} alt="Previous" class="w-5 h-5 opacity-70 rotate-180" />
  </button>

  <div style="width:0.5px; height:48px; background:#d4d4d4;"></div>

  <button 
    on:click={() => !atEnd && scroll('right')}
    disabled={atEnd}
    class="w-12 h-12 flex items-center justify-center border border-gray-300 border-l-0 bg-white transition-all 
           {atEnd ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 active:scale-95 cursor-pointer'}"
  >
     <img src={arrowIcon} alt="Next" class="w-5 h-5 opacity-70" />
  </button>
</div>


  </div>
</section>

<style>
  .merged-outline {
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    filter: 
drop-shadow(0 1px 0.3px #e3e3e3)
drop-shadow(0 -1px 0.3px #e3e3e3)
drop-shadow(1px 0 0.3px #e3e3e3)
drop-shadow(-1px 0 0.3px #e3e3e3);
  }
</style>