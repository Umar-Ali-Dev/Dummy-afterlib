<script>
    // 1. IMPORT ALL NECESSARY ICONS DIRECTLY
    // Payment Icons
    import applyPayIcon from '$lib/assets/icons/ApplyPay.png';
    import visaIcon from '$lib/assets/icons/Visa.png';
    import mastercardIcon from '$lib/assets/icons/MasteCcard.png';
    import americanExpressIcon from '$lib/assets/icons/AmericanExpress.png';
    import googlePayIcon from '$lib/assets/icons/GooglePay.png';

    // Info Icons
    import verifiedIcon from '$lib/assets/icons/IconVerified.png';
    import creditCardIcon from '$lib/assets/icons/CreditCard.png';


    // 2. CONSTRUCT DATA ARRAYS USING THE IMPORTED VARIABLES

    // Array for Payment Icons
    const paymentIcons = [
        { 
            src: applyPayIcon, 
            alt: 'Apple Pay' 
        },
        { 
            src: visaIcon, 
            alt: 'Visa' 
        },
        { 
            src: mastercardIcon, 
            alt: 'Mastercard' 
        },
        { 
            src: americanExpressIcon, 
            alt: 'American Express' 
        },
        { 
            src: googlePayIcon, 
            alt: 'Google Pay' 
        },
    ];
    // Data for Info Icons (Secured Payment and Cancel Anytime)
    const infoIcons = [
        { 
            src: verifiedIcon, 
            text: 'Secured payment',
            alt: 'Verified Checkmark' 
        },
        { 
            src: creditCardIcon, 
            text: 'Cancel anytime', 
            alt: 'Credit Card' 
        }
    ];
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

<div class="min-h-screen custom-green py-16 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-12">
			<h1
				class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
			>
				Simple & transparent pricing
			</h1>
			<p
				class="text-base sm:text-lg text-white max-w-2xl mx-auto"
			>
				AfterLib replaces multiple tools and saves you weeks of research, all for less than you'd
				spend testing one ad.
			</p>
		</div>

		<div class="flex flex-nowrap overflow-x-auto scrollbar-hide snap-x gap-6 mb-12 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
			{#each pricingPlans as plan}
				<div class="bg-white shadow-lg flex flex-col relative shrink-0 w-full sm:w-auto snap-start">
					{#if plan.badge}
						<div class="absolute top-0.5 right-0.5 transform z-10">
							<span
								class="flex justify-center items-center gap-2 bg-[#02a758] text-xs font-semibold text-white px-4 py-1"
							>
								{plan.badge}
							</span>
						</div>
					{/if}

					<div class="pb-3 pt-6 px-6 border-b border-b-[#e0e0e0]">
						<h3 class="text-xl sm:text-2xl font-bold text-left text-[#1e1e1e] pb-2">
							{plan.name}
						</h3>
						<div
							class="text-2xl sm:text-3xl font-semibold leading-tight text-left text-[#1e1e1e] pb-3"
						>
							{plan.price}
						</div>
						<p class="text-sm text-left text-[#3d3d3d] mb-3">
							{plan.description}
						</p>
						<div class="flex items-center">
							<label class="inline-flex items-center cursor-pointer">
								<input type="checkbox" value="" class="sr-only peer" />
								<div
									class="relative w-9 h-5 bg-[#e0e0e0] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"
								></div>
								<p class="text-sm font-semibold text-[#1e1e1e] ml-2">
									Yearly billing <span class="text-[12px]">{plan.yearlyBilling}</span>
								</p>
							</label>
						</div>
					</div>

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
												class="w-5 h-5 custom-green rounded-2xl text-white"
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
										class="flex items-center gap-[5px] text-sm font-semibold text-left text-[#1e1e1e]"
									>
										{feature.text}
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

					<button
						class="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 transition-colors"
					>
						Continue
					</button>
				</div>
			{/each}
		</div>

		<div class=" p-4 text-white">
    
            <div class="flex justify-center items-center flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 mb-4 sm:mb-8">
                {#each paymentIcons as icon}
                    <img 
                        src={icon.src} 
                        alt={icon.alt} 
                        class="h-5 w-auto" 
                    />
                {/each}
            </div>


            <div class="flex flex-col sm:flex-row justify-center items-center text-sm font-light space-y-2 sm:space-y-0 sm:space-x-6 mb-6">
                {#each infoIcons as info}
                    <div class="flex items-center space-x-1">
                        <img 
                            src={info.src} 
                            alt={info.alt} 
                            class="h-4 w-4" 
                        />
                        <span>{info.text}</span>
                    </div>
                {/each}
            </div>
        </div>
		
		<div class="text-center">
			<p
				class="text-lg font-semibold text-center text-[#1e1e1e] inline-block bg-white px-3 py-1 shadow-md"
			>
				Trusted by your competitors and thousands of marketers worldwide.
			</p>
		</div>
	</div>
</div>

