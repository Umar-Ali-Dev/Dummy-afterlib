<script>
  import adsLibrary from "$lib/assets/images/AdsLibrary.png"
  export let title = "Loading title..."; 
  export let subtitle = "";
  // Original primary CTA properties
  export let ctaLabel = "Join AfterLib"; // Changed default to match image
  export let ctaLink = "#";
</script>

<section class="bg-primary py-8 md:py-10">
  <div class="responsive-container mx-auto px-4 sm:px-6 lg:px-8 ">
    <div class="text-center mb-12">
      <p class="font-plus-jakarta-sans text-lg text-center text-[#1e1e1e]">
        The trusted standard since 2022
      </p>
    </div>

    <div class="text-center mb-6">
      <h1 class="font-plus-jakarta-sans text-[40px] font-bold text-center custom-black mb-4 leading-[1.2] max-w-2xl mx-auto">
        {title} 
      </h1>
    </div>

    <div class="text-center mb-10">
      <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>

    <div class="flex justify-center flex-col items-center mb-12 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
      <a
        href={ctaLink}
        class="font-plus-jakarta-sans cursor-pointer text-[18px] font-semibold text-center text-white h-14 px-6 flex justify-center items-center custom-green w-full sm:w-auto"
      >
        {ctaLabel}
      </a>
      
      <a
        href="#" 
        class="font-plus-jakarta-sans cursor-pointer text-[18px] font-semibold text-center text-white h-14 px-6 flex justify-center items-center bg-black w-full sm:w-auto z-20 md:hidden"
      >
        <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
        </svg>
        Watch AfterLib demo
      </a>
    </div>
    <div class="mx-auto hidden md:block"> 
      <div class="relative border border-gray-200">
          <div class="relative bg-linear-to-br from-gray-50 to-gray-100 "> 
              <div class="relative rounded-lg ">
                 
                <img
                      src={adsLibrary}
                      alt="Dashboard Preview"
                      class="w-full h-full object-cover"
                  />
                 
                  <div 
                      class="absolute inset-0 z-10"
                      style="
                          /* Starts white at the bottom (0%) and becomes transparent at 40% height */
                          background-image: linear-gradient(to top, white 0%, transparent 40%);
                          z-index: 10;
                      "
                  ></div>

                  <div class="flex items-center left-0 right-0 absolute top-0 h-12 m-auto -mt-4 max-w-fit gap-1 z-20">
                      <div class="bg-black text-white px-3 flex items-center max-w-fit h-12 m-auto">
                          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                          </svg>
                          <span class="font-semibold">Watch demo</span>
                      </div>
                      <div class="bg-black text-white px-3 flex items-center max-w-fit h-12 m-auto">
                          01:25
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</section>