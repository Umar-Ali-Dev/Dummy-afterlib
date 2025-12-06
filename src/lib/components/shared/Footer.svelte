<script>
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		product: [
			{ name: 'Features', href: '#features' },
			{ name: 'Pricing', href: '#pricing' },
			{ name: 'FAQ', href: '#faq' },
			{ name: 'Documentation', href: '#docs' }
		],
		company: [
			{ name: 'About', href: '/about' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'Careers', href: '#careers' },
			{ name: 'Contact', href: '#contact' }
		],
		legal: [
			{ name: 'Privacy', href: '#privacy' },
			{ name: 'Terms', href: '#terms' },
			{ name: 'Cookie Policy', href: '#cookies' }
		],
		social: [
			{ name: 'Twitter', href: '#', icon: '𝕏' },
			{ name: 'LinkedIn', href: '#', icon: 'in' },
			{ name: 'GitHub', href: '#', icon: 'GH' }
		]
	};
</script>

<footer class="bg-gray-900 text-gray-300">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Brand Column -->
			<div class="col-span-1">
				<a href="/" class="text-2xl font-bold text-white mb-4 block"> YourBrand </a>
				<p class="text-sm text-gray-400">Building amazing products for amazing people.</p>
			</div>

			<!-- Product Links -->
			<div>
				<h3 class="text-white font-semibold mb-4">Product</h3>
				<ul class="space-y-2">
					{#each footerLinks.product as link}
						<li>
							<a href={link.href} class="text-sm hover:text-white transition-colors">
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Company Links -->
			<div>
				<h3 class="text-white font-semibold mb-4">Company</h3>
				<ul class="space-y-2">
					{#each footerLinks.company as link}
						<li>
							<a href={link.href} class="text-sm hover:text-white transition-colors">
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Legal Links -->
			<div>
				<h3 class="text-white font-semibold mb-4">Legal</h3>
				<ul class="space-y-2">
					{#each footerLinks.legal as link}
						<li>
							<a href={link.href} class="text-sm hover:text-white transition-colors">
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
		>
			<p class="text-sm text-gray-400">
				© {currentYear} YourBrand. All rights reserved.
			</p>

			<!-- Social Links -->
			<div class="flex space-x-6 mt-4 md:mt-0">
				{#each footerLinks.social as social}
					<a
						href={social.href}
						class="text-gray-400 hover:text-white transition-colors"
						aria-label={social.name}
					>
						{social.icon}
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
