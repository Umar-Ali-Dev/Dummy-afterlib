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
					<div class="pb-3 pt-6 px-6 border-b border-b-[#e0e0e0]">
						<h3 class="font-plus-jakarta-sans text-2xl font-bold text-left text-[#1e1e1e] pb-2">
							{plan.name}
						</h3>
						<div
							class="font-plus-jakarta-sans text-lg font-semibold leading-[1.33px] text-left text-[#1e1e1e] pb-3"
						>
							{plan.price}
						</div>
						<p class="font-plus-jakarta-sans text-sm text-left text-[#3d3d3d] mb-3">
							{plan.description}
						</p>
						<div class="items-center">
							<label class="inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" class="sr-only peer" />
								<div
									class="relative w-9 h-5 bg-[#e0e0e0] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"
								></div>
								<p class="text-[14px] font-semibold text-[#1e1e1e] ml-2">
									Yearly billing <span>{plan.yearlyBilling}</span>
								</p>
							</label>
						</div>
					</div>

					<!-- Features -->
					<div class="grow mb-6 px-6 mt-3">
						<ul class="space-y-3">
							{#each plan.features as feature}
								<li
									class="flex items-start text-sm {feature.small
										? 'text-xs text-gray-500'
										: 'text-gray-700'}"
								>
									<span class="mr-2 mt-0.5">
										{#if feature.icon}
											<svg
												class="w-5! h-5! bg-[#02a758] rounded-2xl text-white"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										{:else}
											<svg
												class="w-5 h-5 flex rounded-2xl bg-[#f2f2f2]"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										{/if}
									</span>
									<span
										class="flex items-center gap-[5px] font-plus-jakarta-sans text-sm font-semibold text-left text-[#1e1e1e]"
									>
										{feature.text}
										<!-- svg  -->
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#150kde1ova)" fill="#1E1E1E">
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M8.172 5.35a1.333 1.333 0 0 0-1.483.872.667.667 0 0 1-1.258-.443 2.667 2.667 0 0 1 5.183.889c0 1.02-.757 1.694-1.297 2.054-.29.193-.576.336-.787.43a9.905 9.905 0 0 1-.36.147c-.033.013.019-.006 0 0a.68.68 0 0 1-.855-.421.666.666 0 0 1 .42-.843c-.022.008.01-.004 0 0a4.032 4.032 0 0 0 .842-.423c.46-.306.703-.632.703-.945v-.001A1.333 1.333 0 0 0 8.172 5.35z"
												/>
												<path
													d="M7.334 11.334c0-.368.298-.667.666-.667h.007a.667.667 0 0 1 0 1.333H8a.667.667 0 0 1-.666-.666z"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M.667 8a7.333 7.333 0 1 1 14.667 0A7.333 7.333 0 0 1 .667 8zM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z"
												/>
											</g>
											<defs>
												<clipPath id="150kde1ova">
													<path fill="#fff" d="M0 0h16v16H0z" />
												</clipPath>
											</defs>
										</svg>
									</span>
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
