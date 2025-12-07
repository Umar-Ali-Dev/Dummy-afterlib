<script lang="ts">
	import CTA from '$lib/components/blog/CTA.svelte';
	import SidebarCard from '$lib/components/blog/SidebarCard.svelte';
	import WinningAds from '$lib/components/blog/WinningAds.svelte';
	import SimilarArticles from '$lib/components/blog/SimilarArticles.svelte';

	interface RelatedPost {
		title: string;
		image: string;
		slug: string;
	}

	// This will come from CMS - using sample data for now
	const post = {
		title: "SharePoint search not working? Here's your game-changing solution!",
		date: 'Jan 21, 2025',
		author: 'Alex from AfterLib',
		readTime: '3 minute read',
		category: 'Tutorial',
		featuredImage: '/images/blog/sharepoint-hero.jpg',
		content: `
			<p>If you're among the countless SharePoint users pulling your hair out over inconsistent search results, you're not alone. From missing content to permission-related issues, SharePoint search problems can bring productivity to a grinding halt.</p>
			
			<p>But what if there was a better way?</p>
			
			<p>Yes! Qatalog is your AI-powered solution for seamless SharePoint search. For just $15 per month (with a free trial!), you can enable ChatGPT-like search across your entire SharePoint environment and Microsoft 365 suite.</p>

			<h2>The real SharePoint search pain points</h2>
			
			<p>Let's address the elephant in the room: here are some of the most common issues you've probably encountered (or searched for):</p>
			
			<ul>
				<li>Incomplete results: Users can't find documents, even when they definitely exist in the library</li>
				<li>Outdated search results: Modified files not showing up in searches until hours (or days) later</li>
				<li>Large library nightmare: Difficulty searching through libraries with hundreds or thousands of files</li>
				<li>Permission issues: Shared documents don't show up or only appear based on access levels</li>
				<li>Metadata headaches: Content based on metadata not working as it's been used to</li>
			</ul>

			<h2>How to improve the SharePoint search experience?</h2>
			
			<p>The most effective way to enhance your SharePoint search capabilities is by using ChatGPT, an AI tool that improves the search function. Instead of struggling with traditional metadata-based queries, ChatGPT lets users ask natural, conversational questions and get accurate, context-aware responses.</p>
			
			<p>Simply connect ChatGPT to your SharePoint environment and start asking questions like:</p>
			
			<ul>
				<li>"Show me all project proposals from the marketing team that expired"</li>
				<li>"Find documents shared by Sarah about the annual budget"</li>
				<li>"Which document talks about the new product launch we discussed last quarter?"</li>
				<li>"How do I update budget files for clients?"</li>
			</ul>

			<h2>Want to improve your SharePoint search experience?</h2>
			
			<p>The most effective way to enhance your SharePoint search capabilities is by using ChatGPT, an AI tool that improves the search function. Instead of struggling with traditional metadata-based queries, ChatGPT lets users ask natural, conversational questions and get accurate, context-aware responses.</p>
		`
	};

	const relatedPosts: RelatedPost[] = [
		{
			title: 'Outscale your competitors',
			image: '/images/blog/related-1.jpg',
			slug: 'outscale-competitors'
		},
		{
			title: 'Winning product research workflow',
			image: '/images/blog/related-2.jpg',
			slug: 'winning-product-research'
		}
	];

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src =
			'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e5e5" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%234a4a4a" font-size="24" font-family="Arial"%3EBlog Image%3C/text%3E%3C/svg%3E';
	}
</script>

<svelte:head>
	<title>{post.title} | AfterLib Blog</title>
	<meta name="description" content={post.title} />
</svelte:head>

<article class="bg-[#fafaf5]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
		<div class="flex flex-col lg:flex-row gap-8">
			<!-- Main Content (Left - Takes most space) -->
			<div class="flex-1 lg:max-w-3xl">
				<!-- Featured Image -->
				<div class="mb-8 overflow-hidden bg-gray-100 rounded-lg">
					<img
						src={post.featuredImage}
						alt={post.title}
						class="w-full h-auto object-cover"
						onerror={handleImageError}
					/>
				</div>

				<!-- Title -->
				<h1
					class="self-stretch flex font-plus-jakarta-sans text-[40px] font-bold text-left text-[#1e1e1e] mb-4 leading-tight"
				>
					{post.title}
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
						<span class="font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#999]"
							>{post.date}</span
						>
					</div>
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<span class="font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#999]"
							>{post.author}</span
						>
					</div>
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span class="font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#999]"
							>{post.readTime}</span
						>
					</div>
				</div>

				<!-- Article Content -->

				<div
					class="prose prose-lg max-w-none font-plus-jakarta-sans prose-headings:font-plus-jakarta-sans text-[#1e1e1e] prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-[#3d3d3d] prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-[#3d3d3d] prose-li:mb-2"
				>
					{@html post.content}
				</div>
			</div>

			<!-- Sidebar (Right) -->
			<aside class="lg:w-80 shrink-0">
				<div class="lg:sticky lg:top-24 space-y-6">
					<SidebarCard
						title="Outscale your competitors"
						description="AfterLib replaces multiple tools and cost less then a single ad test."
						buttonText="Join AfterLib"
						image="/images/sidebar/cta.jpg"
						type="cta"
					/>
					<SidebarCard
						title="Winning product research workflow"
						image="/images/sidebar/workflow-thumbnail.jpg"
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
<SimilarArticles />
<CTA />
