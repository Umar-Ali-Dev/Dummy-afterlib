<script lang="ts">
	import CTA from '$lib/components/blog/CTA.svelte';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';

	import { urlFor } from '$lib/sanity';
	import type { PageData } from './$types';

	export let data: PageData;

	// Pagination state
	let currentPage = 1;
	let postsPerPage = 6;
	let totalPages = 0;
	let paginatedPosts: any[] = [];

	// Calculate total pages based on actual posts
	$: totalPages = Math.ceil((data.posts?.length || 0) / postsPerPage);

	// Get posts for current page
	$: paginatedPosts =
		data.posts?.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage) || [];

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function calculateReadTime(post: any): string {
		return post.author?.name || 'AfterLib Team';
	}
	// Navigation functions
	function goToPage(page: number): void {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	function showMore(): void {
		if (currentPage < totalPages) {
			currentPage++;
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
	function getImageUrl(post: any): string {
		if (post.mainImage?.asset?.url) {
			return urlFor(post.mainImage).width(800).height(600).url();
		}
		return '/images/blog/default-post.jpg';
	}
</script>

<svelte:head>
	<title>Blog - News, insights, and more | AfterLib</title>
	<meta
		name="description"
		content="Learn how AfterLib approaches ad intelligence – helping marketers find top performing/highest-profit ads and high-performing campaigns."
	/>
</svelte:head>

<section class="bg-[#fafaf5] py-16 md:py-24">
	<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-12 bg-white md:bg-transparent">
			<h1
				class=" font-plus-jakarta-sans text-[30px] sm:text-[40px] font-bold text-left text-[#1e1e1e] mb-4"
			>
				News, insights, and more
			</h1>
			<p class="text-lg sm:text-2xl text-left text-[#1e1e1e] max-w-3xl">
				Learn how AfterLib approaches ad intelligence – helping marketers find top
				performing/highest-profit ads and high-performing campaigns.
			</p>
		</div>

		<!-- Loading State -->
		{#if !data.posts}
			<div class="flex justify-center items-center py-20">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e1e1e]"></div>
			</div>
			<!-- No Posts State -->
		{:else if data.posts.length === 0}
			<div class="text-center py-20">
				<p class="text-lg sm:text-xl text-gray-600 mb-4">No blog posts available yet.</p>
				<p class="text-gray-500">Check back soon for updates!</p>
			</div>
		{:else}
			<!-- Blog Grid -->
			<div class="flex flex-wrap gap-6 mb-14">
				{#each paginatedPosts as post}
					<BlogCard
						title={post.title}
						date={formatDate(post.publishedAt)}
						readTime={calculateReadTime(post)}
						image={getImageUrl(post)}
						slug={post.slug.current}
					/>
				{/each}
			</div>

			{#if totalPages > 1}
				<!-- Pagination -->
				<div class="flex items-center justify-center gap-4">
					<!-- Previous Button -->
					<button
						on:click={() => goToPage(currentPage - 1)}
						disabled={currentPage === 1}
						class="px-4 sm:px-6 flex justify-center cursor-pointer items-center py-2 font-plus-jakarta-sans text-xs font-semibold text-left text-[#1e1e1e] bg-white border border-[#e0e0e0] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
					>
						<svg
							class="w-4 h-4 text-[#1e1e1e]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 5l-7 7 7 7"
							/>
						</svg> Previous
					</button>

					<!-- Show More Button -->
					<button
						on:click={showMore}
						class=" px-3 sm:px-30 py-2 cursor-pointer font-plus-jakarta-sans text-xs font-semibold text-left text-[#1e1e1e] bg-white border border-[#e0e0e0] hover:bg-gray-50 transition-colors"
					>
						Show more
					</button>

					<!-- Next Button -->
					<button
						on:click={() => goToPage(currentPage + 1)}
						disabled={currentPage === totalPages}
						class="px-4 sm:px-6 py-2 flex justify-center items-center cursor-pointer font-plus-jakarta-sans text-xs font-semibold text-left text-[#1e1e1e] bg-white border border-[#e0e0e0] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
					>
						Next <svg
							class="w-4 h-4 text-[#1e1e1e]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			{/if}
		{/if}
	</div>
</section>

<CTA />
