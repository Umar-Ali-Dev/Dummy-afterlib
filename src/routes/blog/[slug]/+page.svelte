<script lang="ts">
	import CTA from '$lib/components/blog/CTA.svelte';
	import SidebarCard from '$lib/components/blog/SidebarCard.svelte';
	import WinningAds from '$lib/components/blog/WinningAds.svelte';
	import SimilarArticles from '$lib/components/blog/SimilarArticles.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity';
	import type { PageData } from './$types';
	import PortableImage from '$lib/components/blog/PortableImage.svelte';
	// import PortableLink from '$lib/components/blog/PortableLink.svelte';
	import dummyImg from '$lib/assets/dummy-img.jpg';

	let { data }: { data: PageData } = $props();

	// Format date function
	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	// Get image URL with fallback
	function getImageUrl(image: any): string {
		if (image?.asset?.url) {
			return urlFor(image).width(1200).height(600).url();
		}
		return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23e5e5e5" width="1200" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%234a4a4a" font-size="32" font-family="Arial"%3EBlog Image%3C/text%3E%3C/svg%3E';
	}

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src =
			'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e5e5" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%234a4a4a" font-size="24" font-family="Arial"%3EBlog Image%3C/text%3E%3C/svg%3E';
	}

	const portableTextComponents = {
		types: {
			image: PortableImage
		}
		// marks: {
		// 	link: PortableLink
		// }
	};
</script>

<svelte:head>
	<title>{data.post.title} | AfterLib Blog</title>
	{#if data.post.excerpt}
		<meta name="description" content={data.post.excerpt} />
	{:else}
		<meta name="description" content={data.post.title} />
	{/if}
</svelte:head>

<article class="bg-[#fafaf5]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
		<div class="flex flex-col lg:flex-row gap-8">
			<!-- Main Content (Left - Takes most space) -->
			<div class="flex-1 lg:max-w-3xl">
				<!-- Featured Image -->
				<div class="mb-8 overflow-hidden bg-gray-100">
					<img
						src={getImageUrl(data.post.mainImage)}
						alt={data?.post?.mainImage?.alt || data.post.title}
						class="w-full h-auto object-cover"
						onerror={handleImageError}
					/>
				</div>

				<!-- Title -->
				<h1
					class="self-stretch flex font-plus-jakarta-sans text-[32px] sm:text-[40px] font-bold text-left text-[#1e1e1e] mb-4 leading-tight"
				>
					{data?.post?.title ?? ''}
				</h1>

				<!-- Meta -->
				<div
					class="flex flex-wrap items-center gap-3 text-sm text-[#3d3d3d] mb-8 pb-8 border-b border-gray-200"
				>
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span class="font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#999]">
							{formatDate(data.post.publishedAt)}
						</span>
					</div>

					{#if data.post.author}
						<div class="flex items-center gap-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<span class="font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#999]">
								{data?.post?.author?.name ?? 'N/A'}
							</span>
						</div>
					{/if}

					{#if data.post.excerpt}
						<div class="flex items-center gap-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span class="font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#999]">
								{data?.post?.excerpt ?? 'N/A'}</span
							>
						</div>
					{/if}
				</div>

				<!-- Article Content -->
				{#if data.post.body}
					<!-- <div
						class="prose prose-lg max-w-none font-plus-jakarta-sans prose-headings:font-plus-jakarta-sans text-[#1e1e1e] prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-[#3d3d3d] prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-[#3d3d3d] prose-li:mb-2"
					> -->
					<div
						class="
						prose
						prose-lg
						max-w-none
						font-plus-jakarta-sans
						prose-headings:font-plus-jakarta-sans
						prose-headings:font-bold
						prose-h2:text-3xl
						prose-h2:mt-12
						prose-h2:mb-6
						prose-h3:text-2xl
						prose-h3:mt-8
						prose-h3:mb-4
						prose-p:text-[#3d3d3d]
						prose-p:leading-relaxed
						prose-p:mb-6
						prose-ul:my-6
						prose-ul:list-disc
						prose-ul:ml-6
						prose-li:text-[#3d3d3d]
						prose-li:mb-2
						prose-a:text-blue-600
						prose-a:underline
						prose-a:hover:text-blue-800
						prose-img:rounded-lg
						prose-img:my-6

						blog-content
					"
					>
						<PortableText value={data.post.body} components={portableTextComponents} />
					</div>
				{/if}
			</div>

			<!-- Sidebar (Right) -->
			<aside class="lg:w-80 shrink-0">
				<div class="lg:sticky lg:top-24 space-y-6">
					<SidebarCard
						title="Outscale your competitors"
						description="AfterLib replaces multiple tools and cost less then a single ad test."
						buttonText="Join AfterLib"
						image={dummyImg}
						type="cta"
					/>
					<SidebarCard
						title="Winning product research workflow"
						image={dummyImg}
						videoUrl="https://youtube.com/watch?v=..."
						type="video"
					/>
				</div>
			</aside>
		</div>
	</div>
</article>

<WinningAds
	title="Ready to find real winning ads? Try AfterLib today"
	buttonText="Unlock AfterLib"
	buttonLink="/pricing"
/>
<SimilarArticles relatedPosts={data.relatedPosts} />
<CTA />

<style lang="postcss">
	.blog-content {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

	/* Headings */
	.blog-content :global(h1) {
		font-size: 2.25rem;
		font-weight: 700;
		color: #1e1e1e;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		line-height: 1.2;
	}

	.blog-content :global(h2) {
		font-size: 1.875rem;
		font-weight: 700;
		color: #1e1e1e;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		line-height: 1.3;
	}

	.blog-content :global(h3) {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1e1e1e;
		margin-top: 2rem;
		margin-bottom: 1rem;
		line-height: 1.4;
	}

	/* Paragraphs */
	.blog-content :global(p) {
		color: #3d3d3d;
		line-height: 1.75;
		margin-bottom: 1.5rem;
		font-size: 1.125rem;
	}

	/* Lists */
	.blog-content :global(ul) {
		list-style-type: disc;
		margin-left: 1.5rem;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.blog-content :global(ol) {
		list-style-type: decimal;
		margin-left: 1.5rem;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.blog-content :global(li) {
		color: #3d3d3d;
		line-height: 1.75;
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
	}

	/* Links */
	.blog-content :global(a) {
		color: #02a758;
		text-decoration: underline;
		font-weight: 600;
	}

	.blog-content :global(a:hover) {
		color: #028f4a;
	}

	/* Strong */
	.blog-content :global(strong) {
		font-weight: 700;
		color: #1e1e1e;
	}

	/* Em */
	.blog-content :global(em) {
		font-style: italic;
	}

	/* Code */
	.blog-content :global(code) {
		background-color: #f3f4f6;
		padding: 0.125rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		font-family: monospace;
	}

	.blog-content :global(pre) {
		background-color: #1f2937;
		color: white;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	.blog-content :global(pre code) {
		background-color: transparent;
		padding: 0;
	}

	/* Blockquotes */
	.blog-content :global(blockquote) {
		border-left: 4px solid #02a758;
		padding-left: 1rem;
		font-style: italic;
		margin: 1.5rem 0;
		color: #3d3d3d;
	}
</style>
