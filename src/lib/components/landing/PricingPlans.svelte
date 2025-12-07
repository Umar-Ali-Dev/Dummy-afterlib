<script>
	const pricingPlans = [
		{
			name: 'Starter',
			price: '$49',
			description: 'For individuals who want to learn about market behavior.',
			yearlyBilling: '(save $147)',
			features: [
				{ text: '5,000 credits', icon: true },
				{ text: 'Basic filters', icon: false },
				{ text: 'Categories', icon: false },
				{ text: 'Notifications', icon: false },
				{ text: 'Collections', icon: false }
			],
			badge: null
		},
		{
			name: 'Basic',
			price: '$89',
			description: 'For entrepreneurs who do light research, once in a week.',
			yearlyBilling: '(save $267)',
			features: [
				{ text: '10,000 credits', icon: true },
				{ text: 'Basic filters', icon: false },
				{ text: 'Categories', icon: false },
				{ text: 'Notifications', icon: false },
				{ text: 'Collections', icon: false }
			],
			badge: null
		},
		{
			name: 'Pro',
			price: '$119',
			description: 'For professionals who want full control, on daily basis.',
			yearlyBilling: '(save $297)',
			features: [
				{ text: 'Unlimited credits', icon: true },
				{ text: 'Filters Pro+', icon: true },
				{ text: 'Categories Pro+', icon: true },
				{ text: 'Notifications Pro+', icon: true },
				{ text: 'Collections', icon: false },
				{ text: '3 free team slots', icon: false }
			],
			badge: 'Best seller'
		},
		{
			name: 'Team',
			price: '$299',
			description: 'For teams and organizations ready to elevate their game.',
			yearlyBilling: '(save $597)',
			features: [
				{ text: 'Unlimited credits', icon: true },
				{ text: 'Filters Pro+', icon: true },
				{ text: 'Categories Pro+', icon: true },
				{ text: 'Notifications Pro+', icon: true },
				{ text: 'Collections', icon: false },
				{ text: 'Collections for team', icon: false },
				{ text: 'Threads for team', icon: false },
				{ text: '3 free team slots', icon: false },
				{ text: 'Additional spot $39/month', small: true }
			],
			badge: null
		}
	];
</script>

<div class="min-h-screen bg-[#02a758] py-16 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1
				class=" font-plus-jakarta-sans text-[40px] text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
			>
				Simple & transparent pricing
			</h1>
			<p
				class="font-plus-jakarta-sans text-2xl text-center text-white sm:text-lg max-w-2xl mx-auto"
			>
				AfterLib replaces multiple tools and saves you weeks of research, all for less than you'd
				spend testing one ad.
			</p>
		</div>

		<!-- Pricing Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
			{#each pricingPlans as plan}
				<div class="bg-white shadow-lg flex flex-col relative">
					<!-- Badge -->

					{#if plan.badge}
						<div class="absolute top-[.6px] right-[.6px] transform">
							<span
								class="flex justify-center items-center gap-2 bg-[#02a758] font-plus-jakarta-sans text-xs font-semibold text-left text-white px-4 py-1"
							>
								{plan.badge}
							</span>
						</div>
					{/if}

					<!-- Header -->
					<div class="mb-6 pt-6 px-6">
						<h3 class="font-plus-jakarta-sans text-2xl font-bold text-left text-[#1e1e1e] pb-2">
							{plan.name}
						</h3>
						<div
							class="font-plus-jakarta-sans text-lg font-semibold leading-[1.33px] text-left text-[#1e1e1e] pb-3"
						>
							{plan.price}
						</div>
						<p class="font-plus-jakarta-sans text-sm text-left text-[#3d3d3d] mb-2">
							{plan.description}
						</p>
						<p class="text-xs text-gray-500">
							Yearly billing <span class="text-green-600">{plan.yearlyBilling}</span>
						</p>
					</div>

					<!-- Features -->
					<div class="grow mb-6 px-6">
						<ul class="space-y-3">
							{#each plan.features as feature}
								<li
									class="flex items-start text-sm {feature.small
										? 'text-xs text-gray-500'
										: 'text-gray-700'}"
								>
									<span class="mr-2 mt-0.5">
										{#if feature.icon}
											<svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clip-rule="evenodd"
												/>
											</svg>
										{:else}
											<svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										{/if}
									</span>
									{feature.text}
								</li>
							{/each}
						</ul>
					</div>

					<!-- Button -->
					<button
						class="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 transition-colors"
					>
						Continue
					</button>
				</div>
			{/each}
		</div>

		<!-- Payment Icons are missing -->

		<!-- <div class="flex flex-wrap justify-center items-center gap-4 mb-6">
			<span class="text-white text-sm"> Pay</span>
			<span class="text-white text-sm">VISA</span>
			<span class="text-white text-sm">●●</span>
			<span class="text-white text-sm">AMEX</span>
			<span class="text-white text-sm">G Pay</span>
		</div> -->

		<!-- Trust Badges -->
		<div class="flex flex-wrap justify-center items-center gap-6 mb-6">
			<div class="flex items-center gap-2 text-white text-sm">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
				Secured payment
			</div>
			<div class="flex items-center gap-2 text-white text-sm">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				Cancel anytime
			</div>
		</div>

		<!-- Trust Message -->
		<div class="text-center">
			<p
				class="font-plus-jakarta-sans text-lg font-semibold text-center text-[#1e1e1e] inline-block bg-white px-1 py-1"
			>
				Trusted by your competitors and thousands of marketers worldwide.
			</p>
		</div>
	</div>
</div>
