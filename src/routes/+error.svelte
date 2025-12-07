<script>
	import { onMount } from 'svelte';
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<div class="min-h-screen bg-[#fafaf5] flex items-center justify-center px-4">
	<div class="max-w-2xl text-center">
		<!-- Big 404 -->
		<h1
			class="self-stretch font-plus-jakarta-sans text-[40px] font-bold text-center text-[#1e1e1e]"
		>
			404
		</h1>

		<!-- Main message -->
		<h2
			class="self-stretch font-plus-jakarta-sans text-[40px] font-bold text-center text-[#1e1e1e]"
		>
			Oops! Page not found
		</h2>

		<p class="mt-6 font-plus-jakarta-sans text-2xl text-center text-[#1e1e1e]">
			Looks like this page went on a coffee break and forgot to come back.<br
				class="hidden md:block"
			/>
			Don't worry — let's get you back on track!
		</p>

		<!-- Buttons -->
		<div class="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/"
				class="font-plus-jakarta-sans cursor-pointer text-[16px] font-semibold text-left text-white h-10 px-4 flex flex-row justify-center items-center gap-1 p-2 shadow-[0 0.5px 0.8px 0 rgba(10, 19, 53, 0.08), 0 0 0.5px 0 rgba(0, 0, 0, 0.4), 0 0 0.5px 0 rgba(0, 0, 0, 0.64)] bg-[#02a758]"
			>
				Go back home
			</a>
		</div>
	</div>
</div>
