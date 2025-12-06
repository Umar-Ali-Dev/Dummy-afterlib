<script lang="ts">
	import messageIcon from '$lib/assets/faq/message-smile-square.svg';

	// message-smile-square
	let openIndex: number | null = null;

	const faqs: Array<{ question: string; answer: string }> = [
		{
			question: 'Is there a free trial available?',
			answer:
				'Yes! We offer a 7-day free trial with full access to all features. No credit card required to start your trial.'
		},
		{
			question: 'How do credits work and what happens when I run out?',
			answer:
				'Credits are used for searching and analyzing ads. Each search costs 1 credit. When you run out, you can purchase more credits or upgrade to a higher plan with more monthly credits included.'
		},
		{
			question: "What's the difference between Regular and Pro+ filters?",
			answer:
				'Regular filters include basic search parameters like country, platform, and date range. Pro+ filters add advanced options like engagement metrics, ad spend estimates, growth signals, and more detailed targeting data.'
		},
		{
			question: 'Can I switch between plans?',
			answer: `Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in cost.`
		},
		{
			question: 'Can I cancel my subscription anytime?',
			answer: `Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period.`
		},
		{
			question: 'Do you offer discounts for teams or agencies?',
			answer:
				'Yes! We offer special pricing for teams of 5+ users and agencies. Contact our sales team for a custom quote tailored to your needs.'
		},
		{
			question: 'Can I pay in Euro or other currencies?',
			answer:
				'Currently, we accept payments in USD, EUR, and GBP. Your card will be charged in your preferred currency at the current exchange rate.'
		},
		{
			question: 'What is your refund policy?',
			answer: `We offer a 30-day money-back guarantee. If you're not satisfied with AfterLib within the first 30 days, contact support for a full refund.`
		},
		{
			question: 'Do I need experience with ads to use AfterLib?',
			answer:
				'Not at all! AfterLib is designed for both beginners and professionals. Our intuitive interface and comprehensive tutorials make it easy to start finding winning ads right away.'
		},
		{
			question: 'How can I use AfterLib to get the best results?',
			answer:
				'Start by searching for ads in your niche, use filters to narrow down high-performing campaigns, analyze engagement patterns, and save successful ads to your collections for reference when creating your own campaigns.'
		},
		{
			question: 'How does the Reach filter and estimated ad spend feature work?',
			answer:
				'Our AI analyzes ad engagement metrics, platform data, and historical patterns to estimate reach and ad spend. While estimates may vary, they provide valuable insights for competitive analysis.'
		},
		{
			question: 'Do you track Shopify sales or show store sales estimates?',
			answer:
				'We track Shopify stores and provide sales estimates based on various data points including traffic, engagement, and market indicators to help you identify successful products and stores.'
		},
		{
			question: 'Why choose AfterLib over other spy tools?',
			answer:
				'AfterLib provides real, verified data with 500K+ new ads added daily, advanced filters, growth signals, and accurate reach estimates. No fake data, no hype – just actionable intelligence for scaling your campaigns.'
		},
		{
			question: 'Do you show the engagement on ads?',
			answer:
				'Yes! We display comprehensive engagement metrics including likes, comments, shares, and engagement rates to help you identify truly performing ads, not just ads with high impressions.'
		}
	];

	function toggle(index: number): void {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="bg-[#fafaf5] py-16 md:py-24">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-14">
			<h2
				class="self-stretch flex justify-center font-plus-jakarta-sans text-[40px] font-bold text-center text-[#1e1e1e] mb-4"
			>
				Frequently Asked Questions
			</h2>
			<p
				class="self-stretch flex justify-center font-plus-jakarta-sans text-2xl leading-[1.33px] text-center text-[#1e1e1e]"
			>
				Everything you need to know about AfterLib and ad intelligence.
			</p>
		</div>

		<!-- FAQ Items -->
		<div class="space-y-3">
			{#each faqs as faq, index}
				<div
					class={`bg-white overflow-hidden mb-0 border-l border-r border-[#e0e0e0] ${index === 0 ? 'border-t' : ''} ${index - 1 ? 'border-b   ' : ''} `}
				>
					<button
						on:click={() => toggle(index)}
						class="w-full flex justify-between items-center px-5 py-8 text-left transition-colors"
					>
						<span
							class="font-plus-jakarta-sans text-2xl font-semibold leading-[1.33px] text-left text-[#1e1e1e] pr-4"
						>
							{faq.question}
						</span>
						<svg
							class="w-5 h-5 text-[#3d3d3d] shrink-0 transition-transform duration-200 {openIndex ===
							index
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
		</div>

		<!-- Contact Support CTA -->
		<div class="mt-12 text-center">
			<p class="text-2xl text-center text-[#1e1e1e] mb-6">
				Have a question? We're here for you!<br /> Our support team is ready to assist you
			</p>
			<div class="flex items-center justify-center">
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
