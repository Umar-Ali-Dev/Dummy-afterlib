<script lang="ts">
	interface Props {
		portableText: {
			value: {
				href: string;
				blank?: boolean;
			};
		};
		children: any;
	}

	let { portableText, children }: Props = $props();
</script>

<a
	href={portableText.value.href}
	class="text-[#02a758] underline hover:text-[#028f4a] transition-colors font-semibold"
	target={portableText.value.blank ? '_blank' : '_self'}
	rel={portableText.value.blank ? 'noopener noreferrer' : undefined}
>
	{@render children?.()}
</a>
