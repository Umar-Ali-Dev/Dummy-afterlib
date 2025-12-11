<script lang="ts">
  import greenBg2 from '$lib/assets/images/GreenBg2.png';
  import avatar from '$lib/assets/images/Avatar.png';
  import twitterIcon from '$lib/assets/icons/Twitter.png'; // Make sure this path is correct
</script>

<section class="w-full bg-primary relative">
  <div 
    class="relative max-w-7xl mx-auto py-20 md:py-28 overflow-hidden bg-cover bg-center bg-no-repeat"
    style="background-image: url({greenBg2});"
  >
    <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
      
      <div class="bg-white  shadow-xl p-8 md:p-12 space-y-12">

        <div class="flex flex-col items-start space-y-0">
          
          <div class="flex items-center">
             <img 
              src={avatar} 
              alt="User Avatar" 
              class="w-8 h-8 object-cover block" 
            />
            <div class="bg-black text-white px-4  h-8 flex items-center">
              <p class="text-lg md:text-xl font-bold leading-none tracking-tight">
                I think all spy tools white label AfterLib
              </p>
            </div>
          </div>

          <div class=" custom-green px-3  flex items-center gap-2 w-fit h-8">
            <img src={twitterIcon} alt="Twitter" class="w-4 h-4 brightness-0 invert" />
            <span class="text-white font-bold text-sm tracking-wide">kes1lav</span>
          </div>

        </div>
        
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight pt-4">
          There are plenty of ad spy tools out there, and every few months another copy pops up
        </h2>
        
        <div class="text-gray-600 space-y-4 leading-relaxed">
          <p>
            If you just want to scroll through the same ads everyone else sees and call it "inspiration", any of them will do. Many are even cheaper.
          </p>
          <p>
            Eventually, you might stumble upon a winner by luck.
          </p>
        </div>

        <div class="space-y-4 pt-8 border-t border-gray-100">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Used other tools? <br/>
            You’ve seen it yourself. Their data is limited, outdated, and inaccurate
          </h3>
          <div class="text-gray-600 space-y-4 leading-relaxed">
            <p>
              If you value your time and care about finding what others can’t while knowing the data behind it is real, you’ll need AfterLib.
            </p>
            <p>
              The most complete ad dataset on the market. Built for marketers who can’t afford to guess and trusted by those who actually win.
            </p>
          </div>
        </div>

        <div class="space-y-6 pt-8 border-t border-gray-100">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Used AfterLib before? <br/>
            You’ll barely recognize it now
          </h3>
          <div class="text-gray-600 space-y-4 leading-relaxed mb-8">
            <p>
              Version 3 was rebuilt from scratch — faster data, more depth, new features, a cleaner interface, and an onboarding flow that actually shows you what to do.
            </p>
            <p class="font-medium text-gray-900">
              It’s not an update. It’s the start of a new era.
            </p>
          </div>
          
          <div>
            <button class="custom-green hover:bg-[#009945] text-white font-bold py-4 px-8  text-lg transition-colors duration-200">
              Unlock AfterLib
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>