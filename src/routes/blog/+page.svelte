<script lang="ts">
	import CTA from '$lib/components/blog/CTA.svelte';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';

	interface BlogPost {
		id: number;
		title: string;
		date: string;
		readTime: string;
		image: string;
		slug: string;
	}

	const blogPosts: BlogPost[] = [
		{
			id: 1,
			title: 'Blog post headline for article that will be this long to be optimized for SEO',
			date: 'Jan 24, 2025',
			readTime: 'Five from AfterLib',
			image: '/images/blog/post-1.jpg',
			slug: 'blog-post-headline-seo'
		},
		{
			id: 2,
			title: 'Blog post headline for article that will be this long to be optimized for SEO',
			date: 'Jan 24, 2025',
			readTime: 'Five from AfterLib',
			image: '/images/blog/post-2.jpg',
			slug: 'blog-post-headline-seo-2'
		},
		{
			id: 3,
			title: 'Blog post headline for article that will be this long to be optimized for SEO',
			date: 'Jan 24, 2025',
			readTime: 'Five from AfterLib',
			image: '/images/blog/post-3.jpg',
			slug: 'blog-post-headline-seo-3'
		},
		{
			id: 4,
			title: 'Blog post headline for article that will be this long to be optimized for SEO',
			date: 'Jan 24, 2025',
			readTime: 'Five from AfterLib',
			image: '/images/blog/post-4.jpg',
			slug: 'blog-post-headline-seo-4'
		},
		{
			id: 5,
			title: 'Blog post headline for article that will be this long to be optimized for SEO',
			date: 'Jan 24, 2025',
			readTime: 'Five from AfterLib',
			image: '/images/blog/post-5.jpg',
			slug: 'blog-post-headline-seo-5'
		},
		{
			id: 6,
			title: 'Blog post headline for article that will be this long to be optimized for SEO',
			date: 'Jan 24, 2025',
			readTime: 'Five from AfterLib',
			image: '/images/blog/post-6.jpg',
			slug: 'blog-post-headline-seo-6'
		}
	];

	let currentPage = 1;
	const totalPages = 5;

	function goToPage(page: number): void {
		currentPage = page;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function showMore(): void {
		// Handle show more functionality
		console.log('Show more clicked');
	}
</script>

<svelte:head>
	<title>Blog - News, insights, and more | AfterLib</title>
</svelte:head>

<section class="bg-[#fafaf5] py-16 md:py-24">
	<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-12">
			<h1 class=" font-plus-jakarta-sans text-[40px] font-bold text-left text-[#1e1e1e] mb-4">
				News, insights, and more
			</h1>
			<p class="text-2xl text-left text-[#1e1e1e] max-w-3xl">
				Learn how AfterLib approaches ad intelligence – helping marketers find top
				performing/highest-profit ads and high-performing campaigns.
			</p>
		</div>

		<!-- Blog Grid -->
		<div class="flex flex-wrap gap-6 mb-14">
			{#each blogPosts as post}
				<BlogCard
					title={post.title}
					date={post.date}
					readTime={post.readTime}
					image={post.image}
					slug={post.slug}
				/>
			{/each}
		</div>

		<!-- Pagination -->
		<div class="flex items-center justify-center gap-4">
			<!-- Previous Button -->
			<button
				on:click={() => goToPage(currentPage - 1)}
				disabled={currentPage === 1}
				class="px-6 flex justify-center cursor-pointer items-center py-2 font-plus-jakarta-sans text-xs font-semibold text-left text-[#1e1e1e] bg-white border border-[#e0e0e0] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
			>
				<svg class="w-4 h-4 text-[#1e1e1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
				class=" px-30 py-2 cursor-pointer font-plus-jakarta-sans text-xs font-semibold text-left text-[#1e1e1e] bg-white border border-[#e0e0e0] hover:bg-gray-50 transition-colors"
			>
				Show more
			</button>

			<!-- Next Button -->
			<button
				on:click={() => goToPage(currentPage + 1)}
				disabled={currentPage === totalPages}
				class="px-6 py-2 flex justify-center items-center cursor-pointer font-plus-jakarta-sans text-xs font-semibold text-left text-[#1e1e1e] bg-white border border-[#e0e0e0] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
			>
				Next <svg
					class="w-4 h-4 text-[#1e1e1e]"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>
</section>

<!-- CTA -->
<CTA />
