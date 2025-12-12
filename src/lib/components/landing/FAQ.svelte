<script lang="ts">
	import messageIcon from '$lib/assets/faq/message-smile-square.svg';

	// 1. DEFINE THE DATA TYPE
	// This tells the component what the Sanity data looks like
	type FAQItem = {
		question: string;
		answer: string;
	};

	// 2. ACCEPT DATA AS A PROP
	// We export this variable so the parent page can pass data into it.
	// We default it to [] so the page doesn't crash if data is empty.
	export let faqs: FAQItem[] = [];

	// 3. ACCORDION LOGIC (Kept exactly the same)
	let openIndex: number | null = null;

	function toggle(index: number): void {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="bg-[#fafaf5] py-16 md:py-24">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-14">
			<h2
				class="self-stretch flex justify-center font-plus-jakarta-sans text-[24px] sm:text-[40px] font-bold text-center text-[#1e1e1e] mb-4"
			>
				Frequently Asked Questions
			</h2>
			<p
				class="self-stretch flex justify-start sm:justify-center font-plus-jakarta-sans text-[18px] sm:text-2xl text-left sm:text-center text-[#1e1e1e]"
			>
				Everything you need to know about AfterLib.
			</p>
		</div>

		<div class="space-y-3">
			{#if faqs && faqs.length > 0}
				{#each faqs as faq, index}
					<div
						class={`bg-white overflow-hidden mb-0 border-l border-r border-[#e0e0e0] ${index === 0 ? 'border-t' : ''} ${index - 1 ? 'border-b' : 'border-b'} `}
					>
						<button
							on:click={() => toggle(index)}
							class="w-full flex justify-between items-center px-5 py-8 text-left transition-colors"
						>
							<span
								class="font-plus-jakarta-sans text-[18px] sm:text-2xl font-semibold text-left text-[#1e1e1e] pr-4"
							>
								{faq.question}
							</span>
							<svg
								class="w-5 h-5 text-[#3d3d3d] shrink-0 transition-transform duration-200 {openIndex === index
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>

						{#if openIndex === index}
							<div class="px-5 pb-5 pt-0">
								<p class="font-plus-jakarta-sans text-md text-[#3d3d3d] leading-relaxed">
									{faq.answer}
								</p>
							</div>
						{/if}
					</div>
				{/each}
			{:else}
				<p class="text-center text-gray-500">No FAQs available at the moment.</p>
			{/if}
		</div>

		<div class="mt-12 text-left sm:text-center">
			<p class="text-2xl text-left sm:text-center text-[#1e1e1e] mb-6">
				Have a question?
				We're here for you!<br class="hidden sm:block" /> Our support team is ready to assist you
			</p>
			<div class="flex items-center justify-start sm:justify-center">
				<button
					class=" flex gap-2 cursor-pointer items-center h-12 flex-row justify-center p-4 border border-[#c2c2c2] border-solid bg-white plus-jakarta-sans text-sm font-bold leading-[1.14px] text-left text-[#1e1e1e]"
				>
					<img src={messageIcon} alt="messageIcon" class="w-5 h-5" />
					Contact support
				</button>
			</div>
		</div>
	</div>
</section>