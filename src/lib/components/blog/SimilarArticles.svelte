<script lang="ts">
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
		}
	];
</script>

<section class="bg-[#fafaf5]">
	<div
		class="w-full max-w-7xl border-t border-[#e0e0e0] border-solid mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pb-8"
	>
		<!-- Header -->
		<div class="mb-16">
			<h1 class=" font-plus-jakarta-sans text-[40px] font-bold text-left text-[#1e1e1e] mb-4">
				Similar articles
			</h1>
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
	</div>
</section>
