<script>
	import logo from '$lib/assets/logo.png';
	import iconChatEmpty from '$lib/assets/footer/icon-chat-empty.svg';
	import iconHelp from '$lib/assets/footer/icon-help.svg';
	import iconLeaves from '$lib/assets/footer/icon-leaves.svg';
	import star from '$lib/assets/footer/star.svg';
	import twitter from '$lib/assets/footer/twitter.svg';
	import telegram from '$lib/assets/footer/telegram.svg';

	const currentYear = new Date().getFullYear();

	const footerLinks = {
		main: [
			{ name: 'Become a member', href: '/become-member' },
			{ name: 'Features', href: '/features' },
			{ name: 'Pricing', href: '/pricing' },
			{ name: 'Tutorial', href: '/tutorial' },
			{ name: 'Blog', href: '/blog' }
		],
		resources: [
			{ name: 'Affiliate partnership', href: '/affiliate', icon: iconLeaves },
			{ name: 'Contact support', href: '/contact', icon: iconChatEmpty },
			{ name: 'Reviews', href: '/reviews', icon: star },
			{ name: 'FAQ', href: '/faq', icon: iconHelp }
		],
		legal: [
			{ name: 'Terms of service', href: '/terms' },
			{ name: 'Privacy policy', href: '/privacy' }
		]
	};
</script>

<footer class="bg-[#fafaf5]">
	<div
		class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-8 border-t border-[#e0e0e0] border-solid"
	>
		<div class="grid grid-cols-1 md:grid-cols-12 gap-12">
			<!-- Brand Section (Left) -->
			<div class="md:col-span-5">
				<!-- Logo -->
				<div class="flex items-center mb-8">
					<a href="/" class="flex items-center">
						<img src={logo} alt="logo" class="w-full" />
					</a>
				</div>

				<!-- Tagline -->
				<h3 class=" font-plus-jakarta-sans text-2xl font-bold text-left text-[#1e1e1e] mb-3">
					Ready to find winning ads<br />
					and outscale your competitors?
				</h3>

				<!-- Description -->
				<p class="font-plus-jakarta-sans text-lg text-left text-[#1e1e1e] mb-6">
					Join thousands of marketers who trust<br />
					AfterLib for real ad intelligence.<br />
					No fake data. No hype. Just facts.
				</p>

				<!-- CTA Button -->
				<button
					class=" cursor-pointer h-14 flex font-bold text-white flex-row justify-center items-center gap-2 p-4 bg-[#02a758]"
				>
					Start winning
				</button>
			</div>

			<!-- Links Sections (Right) -->
			<div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
				<!-- Main Column -->
				<div>
					<h4
						class="font-normal opacity-[0.6] font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#3d3d3d] mb-6"
					>
						Main
					</h4>
					<ul class="space-y-3">
						{#each footerLinks.main as link}
							<li>
								<a
									href={link.href}
									class="self-stretch font-plus-jakarta-sans text-[14px] font-bold leading-[1.43px] text-left text-[#1e1e1e]"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Resources Column -->
				<div>
					<h4
						class="font-normal opacity-[0.6] font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#3d3d3d] mb-6"
					>
						Resources
					</h4>
					<ul class="space-y-3">
						{#each footerLinks.resources as link}
							<li>
								<a
									href={link.href}
									class="flex items-center gap-2 self-stretch font-plus-jakarta-sans text-[14px] font-bold leading-[1.43px] text-left text-[#1e1e1e]"
								>
									<img src={link.icon} alt={link.name} class="w-6 h-6" />
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Legal Column -->
				<div>
					<h4
						class="font-normal opacity-[0.6] font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#3d3d3d] mb-6"
					>
						Legal
					</h4>
					<ul class="space-y-3">
						{#each footerLinks.legal as link}
							<li>
								<a
									href={link.href}
									class="self-stretch font-plus-jakarta-sans text-[14px] font-bold leading-[1.43px] text-left text-[#1e1e1e]"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="border-t border-[#e0e0e0] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
		>
			<!-- Copyright -->
			<p class="flex font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#1e1e1e]">
				Copyright @ {currentYear}
			</p>

			<!-- Social Links -->
			<div class="flex space-x-4">
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-600 hover:text-gray-900 transition-colors"
					aria-label="Twitter"
				>
					<img src={twitter} alt="twitter" class="w-5 h-5" />
				</a>
				<a
					href="https://telegram.org"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-600 hover:text-gray-900 transition-colors"
					aria-label="Telegram"
				>
					<img src={telegram} alt="telegram" class="w-5 h-5" />
				</a>
			</div>
		</div>

		<!-- Disclaimer -->
		<div class="mt-8 pt-6 border-t border-gray-200">
			<p class="flex font-plus-jakarta-sans text-sm leading-7 text-left text-[#3d3d3d]">
				Please note that this site is an independent entity and is not affiliated with, sponsored
				by, or endorsed by Facebook (fk.a. Meta Platform Inc., Instagram, Shopify, or any of their
				respective Affiliates or subsidiaries. The names Facebook, Meta, Instagram, and Shopify, as
				well as any associated logos and trademarks, are the exclusive property of their respective
				owners and are used here for identification and descriptive purposes only. Any such use does
				not imply any ownership, sponsorship, or endorsement of or by Facebook, Meta, Instagram, or
				Shopify. All product and company names, logos, and brands acknowledged to be the property of
				their respective owners. Any references to these trademarks are used solely for descriptive
				purposes and do not imply any endorsement or association with their respective holders.
			</p>
		</div>
	</div>
</footer>
