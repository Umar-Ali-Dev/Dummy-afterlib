<script>
	import logo from '$lib/assets/logo.png';

	let isMenuOpen = false;

	const navigation = [
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Features', href: '/features' },
		{ name: 'Affiliate', href: '/affiliate' },
		{ name: 'Blog', href: '/blog' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header class="bg-[#fafaf5] py-6">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center">
					<img src={logo} alt="logo" class="w-[100px]" />
				</a>
				<!-- <span class="ml-2 text-xs bg-gray-900 text-white px-2 py-1 rounded"> v2.0 released </span> -->
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-8">
				{#each navigation as item}
					<a
						href={item.href}
						class="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
					>
						{item.name}
					</a>
				{/each}
				<button
					class="font-plus-jakarta-sans cursor-pointer text-[12px] font-semibold leading-[1.33px] text-left text-[#fff] h-8 flex flex-row justify-center items-center gap-1 p-2 shadow-[0 0.5px 0.8px 0 rgba(10, 19, 53, 0.08), 0 0 0.5px 0 rgba(0, 0, 0, 0.4), 0 0 0.5px 0 rgba(0, 0, 0, 0.64)] bg-[#02a758]"
				>
					Join AfterLib
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={toggleMenu}
					class="text-gray-700 hover:text-gray-900 p-2"
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
							class="text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
							on:click={closeMenu}
						>
							{item.name}
						</a>
					{/each}
					<button
						class=" w-22 h-8 flex flex-row justify-center items-center gap-1 p-2 shadow-[0 0.5px 0.8px 0 rgba(10, 19, 53, 0.08), 0 0 0.5px 0 rgba(0, 0, 0, 0.4), 0 0 0.5px 0 rgba(0, 0, 0, 0.64)] bg-[#02a758]"
					>
						Join AfterLib
					</button>
				</div>
			</div>
		{/if}
	</nav>
</header>
