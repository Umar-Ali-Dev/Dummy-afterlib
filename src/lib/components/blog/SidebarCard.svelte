<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		buttonText?: string;
		buttonLink?: string;
		image: string;
		videoUrl?: string;
		type?: 'cta' | 'simple' | 'video';
	}

	let {
		title,
		description,
		buttonText,
		buttonLink = '#',
		image,
		videoUrl,
		type = 'cta'
	}: Props = $props();

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src =
			'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"%3E%3Crect fill="%2302a758" width="400" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="white" font-size="24" font-family="Arial"%3EImage%3C/text%3E%3C/svg%3E';
	}
</script>

{#if type === 'cta'}
	<!-- CTA Card with Button -->
	<div class="bg-white border border-gray-200 overflow-hidden">
		<!-- Image -->
		<div class="aspect-video overflow-hidden bg-gray-100">
			<img src={image} alt={title} class="w-full h-full object-cover" onerror={handleImageError} />
		</div>

		<!-- Content -->
		<div class="p-5">
			<h3
				class="font-plus-jakarta-sans text-sm font-bold leading-[1.14px] text-left text-[#1e1e1e] mb-3"
			>
				{title}
			</h3>
			{#if description}
				<p class="font-plus-jakarta-sans text-sm text-left text-[#1e1e1e] mb-4 leading-relaxed">
					{description}
				</p>
			{/if}
			{#if buttonText}
				<a
					href={buttonLink}
					class="flex w-full self-stretch flex-row justify-center items-center gap-1 p-2 bg-[#02a758] text-white text-center font-plus-jakarta-sans font-normal py-3 px-6 transition-colors"
				>
					{buttonText}
				</a>
			{/if}
		</div>
	</div>
{:else if type === 'video'}
	<!-- Video Card (Image + Title with Play Button) -->
	<a
		href={videoUrl || buttonLink}
		class="block bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
	>
		<!-- Video Thumbnail with Play Button -->
		<div class="aspect-video overflow-hidden bg-gray-100 relative">
			<img
				src={image}
				alt={title}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform"
				onerror={handleImageError}
			/>
			<!-- Play Button Overlay -->
			<div
				class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"
			>
				<div
					class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
				>
					<svg class="w-8 h-8 text-[#1e1e1e] ml-1" fill="currentColor" viewBox="0 0 24 24">
						<path d="M8 5v14l11-7z" />
					</svg>
				</div>
			</div>
		</div>

		<!-- Title -->
		<div class="p-5">
			<h3
				class="font-plus-jakarta-sans text-sm font-bold leading-[1.14px] text-left text-[#1e1e1e] mb-3"
			>
				{title}
			</h3>
		</div>
	</a>
{:else}
	<!-- Simple Card (Image + Title only) -->
	<a
		href={buttonLink}
		class="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
	>
		<!-- Image -->
		<div class="aspect-video overflow-hidden bg-gray-100">
			<img
				src={image}
				alt={title}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform"
				onerror={handleImageError}
			/>
		</div>

		<!-- Title -->
		<div class="p-5">
			<h3
				class="font-plus-jakarta-sans text-sm font-bold leading-[1.14px] text-left text-[#1e1e1e] mb-3"
			>
				{title}
			</h3>
		</div>
	</a>
{/if}
