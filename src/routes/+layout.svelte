<script lang="ts">
	import '../app.css';
	import './layout.css';
	import favicon from '$lib/assets/logo.png';
	import Header from '$lib/components/shared/Header.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />
