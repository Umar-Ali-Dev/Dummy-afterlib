<script lang="ts">
	interface Props {
		title: string;
		date: string;
		readTime: string;
		image: string;
		slug: string;
	}

	let { title, date, readTime, image, slug }: Props = $props();
	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src =
			'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e5e5" width="400" height="300"/%3E%3Ctext x="50%25" y="45%25" text-anchor="middle" fill="%234a4a4a" font-size="32" font-family="Arial" font-weight="bold"%3ESEO%3C/text%3E%3Ctext x="50%25" y="55%25" text-anchor="middle" fill="%234a4a4a" font-size="32" font-family="Arial" font-weight="bold"%3EBLOG%3C/text%3E%3C/svg%3E';
	}
</script>

<article class="bg-white overflow-hidden w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
	<!-- Image -->
	<a href="/blog/{slug}" class="block">
		<div class="aspect-4/3 overflow-hidden bg-gray-100">
			<img
				src={image}
				alt={title}
				class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
				onerror={handleImageError}
			/>
		</div>
	</a>

	<!-- Content -->
	<div class="p-6">
		<!-- Title -->
		<a href="/blog/{slug}" class="block mb-4">
			<h2
				class="font-plus-jakarta-sans text-xl font-bold text-left text-[#1e1e1e] leading-tight hover:text-[#02a758] transition-colors"
			>
				{title}
			</h2>
		</a>

		<!-- Meta Info -->
		<div class="flex items-center justify-between text-sm text-[#3d3d3d] mb-4">
			<span class="opacity-50 font-plus-jakarta-sans text-sm text-left text-[#1e1e1e]">
				{date}
			</span>
			<span class="opacity-50 font-plus-jakarta-sans text-sm text-left text-[#1e1e1e]">
				{readTime}
			</span>
		</div>

		<!-- Learn More Button -->
		<div class="flex items-center justify-between">
			<a
				href="/blog/{slug}"
				class="font-plus-jakarta-sans text-sm font-semibold text-left text-[#1e1e1e] hover:text-[#02a758] transition-colors"
			>
				Learn more
			</a>
			<a
				href="/blog/{slug}"
				class="w-8 h-8 flex items-center justify-center bg-[#1e1e1e] hover:bg-[#02a758] transition-colors"
				aria-label="Read more"
			>
				<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</article>
