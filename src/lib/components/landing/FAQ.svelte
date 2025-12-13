<script lang="ts">
	import messageIcon from '$lib/assets/faq/message-smile-square.svg';

	// 1. DEFINE THE DATA TYPE
	type FAQItem = {
		question: string;
		answer: string;
	};

	// 2. ACCEPT DATA AS A PROP
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
				class="text-2xl sm:text-[40px] font-bold text-center text-[#1e1e1e] mb-4"
			>
				Frequently Asked Questions
			</h2>
			<p
				class="text-base sm:text-2xl text-center text-[#1e1e1e] max-w-2xl mx-auto"
			>
				Everything you need to know about AfterLib and ad intelligence.
			</p>
		</div>

		<div class="space-y-0 border-t border-[#e0e0e0]">
			{#if faqs && faqs.length > 0}
				{#each faqs as faq, index}
					<div
						class={`bg-white overflow-hidden border-x border-b border-[#e0e0e0]`}
					>
						<button
							on:click={() => toggle(index)}
							class="w-full flex justify-between items-center px-5 py-4 sm:py-6 text-left transition-colors"
						>
							<span
								class="text-base sm:text-lg lg:text-xl font-semibold text-left text-[#1e1e1e] pr-4"
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
								<p class="text-sm sm:text-md text-[#3d3d3d] leading-relaxed">
									{faq.answer}
								</p>
							</div>
						{/if}
					</div>
				{/each}
			{:else}
				<p class="text-center text-gray-500 py-8">No FAQs available at the moment.</p>
			{/if}
		</div>

		<div class="mt-12 text-center">
			<p class="text-lg sm:text-2xl text-[#1e1e1e] mb-6">
				Have a question? We're here for you!<br class="hidden sm:block" /> Our support team is ready to assist you
			</p>
			<div class="flex items-center justify-center">
				<button
					class="flex gap-2 cursor-pointer items-center h-12 flex-row justify-center p-4 border border-[#c2c2c2] border-solid bg-white text-sm font-bold leading-none text-[#1e1e1e] shadow-sm hover:shadow-md transition-shadow duration-200"
				>
					<img src={messageIcon} alt="messageIcon" class="w-5 h-5" />
					Contact support
				</button>
			</div>
		</div>
	</div>
</section>