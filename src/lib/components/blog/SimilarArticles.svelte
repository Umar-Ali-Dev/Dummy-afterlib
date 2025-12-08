<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import { urlFor } from '$lib/sanity';

	// Accept related posts as prop from parent
	export let relatedPosts: any[] = [];

	// Format date function
	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	// Calculate read time or return author name
	function getReadTime(post: any): string {
		return post.author?.name || 'AfterLib Team';
	}

	// Get image URL with fallback
	function getImageUrl(post: any): string {
		if (post.mainImage?.asset?.url) {
			return urlFor(post.mainImage).width(600).height(400).url();
		}
		// Fallback to placeholder
		return '/images/blog/post-1.jpg';
	}
</script>

<section class="bg-[#fafaf5]">
	<div
		class="w-full max-w-7xl border-t border-[#e0e0e0] border-solid mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pb-8"
	>
		<!-- Header -->
		<div class="mb-4 sm:mb-16">
			<h1
				class=" font-plus-jakarta-sans text-[32px] sm:text-[40px] font-bold text-left text-[#1e1e1e] mb-2 sm:mb-4"
			>
				Similar articles
			</h1>
		</div>

		<!-- If NO related posts -->
		{#if relatedPosts.length === 0}
			<p class="text-[#555] text-lg font-plus-jakarta-sans pb-8">No similar articles found.</p>
		{:else}
			<!-- Blog Grid -->
			<div class="flex flex-wrap gap-6 mb-14">
				{#each relatedPosts as post}
					<BlogCard
						title={post.title}
						date={formatDate(post.publishedAt)}
						readTime={getReadTime(post)}
						image={getImageUrl(post)}
						slug={post.slug.current}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>
