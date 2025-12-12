<script lang="ts">
  import { onMount } from 'svelte';
  import { client } from '$lib/sanity'; 

  import Hero from '$lib/components/landing/Hero.svelte';
  import FAQ from '$lib/components/landing/FAQ.svelte';
  import PricingPlans from '$lib/components/landing/PricingPlans.svelte';
  import FullStory from '$lib/components/landing/FullStory.svelte';
  import Testimonials from '$lib/components/landing/Testimonials.svelte';
  import TargetAudienceSection from '$lib/components/landing/TargetAudienceSection.svelte';
  import FeatureTabs from '$lib/components/landing/FeatureTabs.svelte';
	import ComparisonSection from '$lib/components/landing/ComparisonSection.svelte';
	import TestimonialsSection from '$lib/components/landing/TestimonialsSection.svelte';

  let data: any = null;
  let loading = true;

  onMount(async () => {
    try {
      const result = await client.fetch(`*[_type == "landingPage"][0]{
        heroSection,
        features[]{
          title,
          description,
          "iconUrl": icon.asset->url 
        },
        faqs,
        footer
      }`);
      
      console.log("🔥 FRESH DATA FROM SANITY:", result);
      data = result;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      loading = false;
    }
  });

  $: hero = data?.heroSection;
  $: features = data?.features;
  $: faqs = data?.faqs;
</script>

{#if loading}
  <div class="flex h-screen w-full items-center justify-center bg-white">
    <p class="text-xl font-medium text-gray-500">Loading AfterLib...</p>
  </div>

{:else if data}
  <Hero 
    title={hero?.mainTitle} 
    subtitle={hero?.subtitle}
    ctaLabel={hero?.ctaButton?.label}
    ctaLink={hero?.ctaButton?.link}
  />

  <Testimonials/>
  <ComparisonSection/>
  <TargetAudienceSection/>
  
  <FeatureTabs features={features} />
  <TestimonialsSection/>
  <FullStory />
  <PricingPlans />
  
  <FAQ faqs={faqs} />

{:else}
  <div class="flex h-screen w-full items-center justify-center">
    <p class="text-red-500">Unable to load content.</p>
  </div>
{/if}