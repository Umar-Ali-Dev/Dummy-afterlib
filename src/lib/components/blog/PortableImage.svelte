<script lang="ts">
	import { urlFor } from '$lib/sanity';

	interface Props {
		portableText: {
			value: {
				asset: {
					_ref: string;
					_type: string;
				};
				alt?: string;
			};
		};
	}

	let { portableText }: Props = $props();

	function getImageUrl(): string {
		try {
			return urlFor(portableText.value).width(800).url();
		} catch (error) {
			console.error('Error loading image:', error);
			return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23e5e5e5" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%234a4a4a" font-size="24" font-family="Arial"%3EImage%3C/text%3E%3C/svg%3E';
		}
	}
</script>

<img src={getImageUrl()} alt={portableText.value.alt || ''} class="my-4 w-full h-auto" />
