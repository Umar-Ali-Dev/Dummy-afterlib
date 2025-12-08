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

<header class="bg-[#fafaf5] py-6 relative">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center">
					<img src={logo} alt="logo" class="w-[90px]" />
				</a>
				<span
					class="ml-3 font-plus-jakarta-sans text-xs font-semibold bg-black text-white px-2 py-1"
				>
					v3.0 released
				</span>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-6">
				{#each navigation as item}
					<a
						href={item.href}
						class=" flex flex-row justify-center items-center gap-1 p-2 border #c2c2c2 border-solid bg-[#fafaf5] font-plus-jakarta-sans text-left text-[#1e1e1e] text-sm font-medium transition-colors"
					>
						{item.name}
					</a>
				{/each}
				<button
					class="font-plus-jakarta-sans cursor-pointer text-sm font-semibold text-left text-white p-2 flex justify-center items-center gap-1 shadow-[0 0.5px 0.8px 0 rgba(10, 19, 53, 0.08), 0 0 0.5px 0 rgba(0, 0, 0, 0.4), 0 0 0.5px 0 rgba(0, 0, 0, 0.64)] bg-[#02a758]"
				>
					Join AfterLib
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<div class="flex gap-1">
					<button
						class="font-plus-jakarta-sans cursor-pointer text-[11px] font-semibold text-left text-white p-1 flex justify-center items-center shadow-[0 0.5px 0.8px 0 rgba(10, 19, 53, 0.08), 0 0 0.5px 0 rgba(0, 0, 0, 0.4), 0 0 0.5px 0 rgba(0, 0, 0, 0.64)] bg-[#02a758]"
					>
						Join AfterLib
					</button>
					<button
						on:click={toggleMenu}
						class="text-gray-700 hover:text-gray-900 border #c2c2c2 border-solid bg-[#fafaf5] p-2"
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
		</div>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div
				class="md:hidden border-t h-screen z-50 border-gray-200 absolute bg-[rgba(0,0,0,0.8)] w-full left-0"
			>
				<div class="flex flex-col space-y-3 bg-[#f2f2f2]">
					{#each navigation as item}
						<a
							href={item.href}
							class="text-gray-700 text-center hover:text-gray-900 px-3 py-2 text-base font-bold"
							on:click={closeMenu}
						>
							{item.name}
						</a>
					{/each}
					<div class="p-2 w-full">
						<button
							class="h-12 w-full flex flex-row justify-center items-center gap-2 p-4 border #c2c2c2 border-solid bg-white"
							on:click={closeMenu}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>
