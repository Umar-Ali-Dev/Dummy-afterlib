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
			<h2 class="font-plus-jakarta-sans text-2xl sm:text-[32px] font-bold text-left text-white">
				{title}
			</h2>

			<!-- CTA Button -->
			<a
				href={buttonLink}
				class="w-full sm:w-auto border-solid bg-white font-plus-jakarta-sans text-base sm:px-8 sm:py-6 py-4 transition-colors whitespace-nowrap shrink-0 font-plus-jakarta-sans font-extrabold text-center sm:text-left text-[#1e1e1e]"
			>
				{buttonText}
			</a>
		</div>
	</div>
</section>
