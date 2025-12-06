<script>
	let isMenuOpen = false;

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Features', href: '#features' },
		{ name: 'Pricing', href: '#pricing' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact', href: '#contact' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="shrink-0">
				<a href="/" class="text-2xl font-bold text-blue-600"> Brand </a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-8">
				{#each navigation as item}
					<a
						href={item.href}
						class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
					>
						{item.name}
					</a>
				{/each}
				<button
					class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
				>
					Get Started
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={toggleMenu}
					class="text-gray-700 hover:text-blue-600 p-2"
					aria-label="Toggle menu"
				>
					{#if isMenuOpen}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="md:hidden py-4 border-t border-gray-200">
				<div class="flex flex-col space-y-3">
					{#each navigation as item}
						<a
							href={item.href}
							class="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
							on:click={closeMenu}
						>
							{item.name}
						</a>
					{/each}
					<button
						class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-left"
					>
						Get Started
					</button>
				</div>
			</div>
		{/if}
	</nav>
</header>
