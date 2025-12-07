<script lang="ts">
	interface Props {
		title: string;
		buttonText: string;
		buttonLink?: string;
	}

	let { title, buttonText, buttonLink = '#' }: Props = $props();
</script>

<section class=" bg-[#fafaf5] pb-24">
	<div class="max-w-7xl py-12 md:py-16 bg-[#02a758] mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6">
			<!-- Title -->
			<h2
				class="font-plus-jakarta-sans text-[32px] font-bold leading-[1.25px] text-left text-white"
			>
				{title}
			</h2>

			<!-- CTA Button -->
			<a
				href={buttonLink}
				class=" p-4 border-solid bg-white font-plus-jakarta-sans text-base px-8 py-6 transition-colors whitespace-nowrap shrink-0 font-plus-jakarta-sans font-extrabold leading-[1.14px] text-left text-[#1e1e1e]"
			>
				{buttonText}
			</a>
		</div>
	</div>
</section>
