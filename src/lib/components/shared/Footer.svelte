<script lang="ts">
	import { onMount } from 'svelte';
	// You will need to make sure the sanity client is accessible here:
	import { client } from '$lib/sanity'; 

	// Assets
	import logo from '$lib/assets/logo.png';
	import iconChatEmpty from '$lib/assets/footer/icon-chat-empty.svg';
	import iconHelp from '$lib/assets/footer/icon-help.svg';
	import iconLeaves from '$lib/assets/footer/icon-leaves.svg';
	import star from '$lib/assets/footer/star.svg';
	import twitter from '$lib/assets/footer/twitter.svg';
	import telegram from '$lib/assets/footer/telegram.svg';

	const currentYear = new Date().getFullYear();
    
    // State for fetched data
    let footerData: { copyright: string, socialLinks: string[] } | null = null;
    let loading = true;

    // Fetch the data on component mount
    onMount(async () => {
        try {
            // Fetching only the footer object
            const result = await client.fetch(`*[_type == "landingPage"][0]{ footer }`);
            footerData = result?.footer;
        } catch (error) {
            console.error("Error fetching footer data:", error);
        } finally {
            loading = false;
        }
    });

	const footerLinks = {
		main: [
			{ name: 'Become a member', href: '/become-member' },
			{ name: 'Features', href: '/features' },
			{ name: 'Pricing', href: '/pricing' },
			{ name: 'Tutorial', href: '/tutorial' },
			{ name: 'Blog', href: '/blog' }
		],
		resources: [
			{ name: 'Affiliate partnership', href: '/affiliate', icon: iconLeaves },
			{ name: 'Contact support', href: '/contact', icon: iconChatEmpty },
			{ name: 'Reviews', href: '/reviews', icon: star },
			{ name: 'FAQ', href: '/faq', icon: iconHelp }
		],
		legal: [
			{ name: 'Terms of service', href: '/terms' },
			{ name: 'Privacy policy', href: '/privacy' }
		]
	};

    /**
     * Helper functions to match the URL to a local icon asset.
     * We need to add a local LinkedIn icon or use a public SVG URL.
     */
    const getSocialIcon = (url: string) => {
        if (url.includes('twitter')) return twitter;
        if (url.includes('linkedin')) return "https://www.svgrepo.com/show/349340/linkedin.svg"; 
        if (url.includes('telegram')) return telegram;
        // Default icon if link is unknown
        return null; 
    };

    const getSocialName = (url: string) => {
        if (url.includes('twitter')) return 'Twitter';
        if (url.includes('linkedin')) return 'LinkedIn';
        if (url.includes('telegram')) return 'Telegram';
        return 'Social Link';
    };

</script>

<footer class="bg-[#fafaf5]">
	<div
		class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-8 border-t border-[#e0e0e0] border-solid"
	>
		<div class="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div class="md:col-span-4">
                <div class="flex items-center mb-8">
                    <a href="/" class="flex items-center">
                        <img src={logo} alt="logo" class="w-full" />
                    </a>
                </div>

                <h3 class=" font-plus-jakarta-sans text-2xl font-bold text-left text-[#1e1e1e] 
                mb-3">
                    Ready to find winning ads<br class="hidden sm:block" />
                    and outscale your competitors?
                </h3>

                <p class="font-plus-jakarta-sans text-lg text-left text-[#1e1e1e] mb-6">
                    Join thousands of marketers who trust<br class="hidden sm:block" />
                    AfterLib for real ad intelligence.<br class="hidden sm:block" />
                    No fake data.
                    No hype. Just facts.
                </p>

                <button
                    class="w-full sm:w-auto cursor-pointer h-12 flex font-plus-jakarta-sans text-[14px] font-bold text-white flex-row justify-center items-center gap-2 p-4 md:px-8 bg-[#02a758]"
                >
                    Start winning
                </button>
            </div>

            <div class="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h4
                        class="font-normal opacity-[0.6] font-plus-jakarta-sans text-sm leading-[1.43px] text-left text-[#3d3d3d] mb-6"
                    >
                        Main
                    </h4>
                    <ul class="space-y-3">
                        {#each footerLinks.main as link}
                            <li>
                                <a
                                    href={link.href}
                                    class="self-stretch font-plus-jakarta-sans text-[14px] font-bold 
                                    leading-[1.43px] text-left text-[#1e1e1e]"
                                >
                                    {link.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>

                <div>
                    <h4
                        class="font-normal opacity-[0.6] font-plus-jakarta-sans text-sm text-left text-[#3d3d3d] mb-6"
                    >
                        Resources
                    </h4>
                    <ul class="space-y-3">
                        {#each footerLinks.resources as link}
                            <li>
                                <a
                                    href={link.href}
                                    class="flex items-center gap-2 self-stretch font-plus-jakarta-sans text-[14px] font-bold text-left text-[#1e1e1e]"
                                >
                                    <img src={link.icon} alt={link.name} class="w-6 h-6" />
                                    {link.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>

                <div>
                    <h4
                        class="font-normal opacity-[0.6] font-plus-jakarta-sans text-sm text-left text-[#3d3d3d] mb-6"
                    >
                        Legal
                    </h4>
                    <ul class="space-y-3">
                        {#each footerLinks.legal as link}
                            <li>
                                <a
                                    href={link.href}
                                    class="self-stretch font-plus-jakarta-sans text-[14px] font-bold text-left text-[#1e1e1e]"
                                >
                                    {link.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>

		<div class="border-t border-[#e0e0e0] mt-12 pt-8 flex justify-between items-center">
			<p class="flex font-plus-jakarta-sans text-sm text-left text-[#1e1e1e]">
				{footerData?.copyright || `Copyright @ ${currentYear}`}
			</p>

			<div class="flex space-x-4">
				{#if footerData?.socialLinks && !loading}
					{#each footerData.socialLinks as linkUrl}
						<a
							href={linkUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-600 hover:text-gray-900 transition-colors"
							aria-label={getSocialName(linkUrl)}
						>
							<img src={getSocialIcon(linkUrl)} alt={getSocialName(linkUrl)} class="w-5 h-5" />
						</a>
					{/each}
				{:else}
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-600 hover:text-gray-900 transition-colors"
						aria-label="Twitter"
					>
						<img src={twitter} alt="twitter" class="w-5 h-5" />
					</a>
					<a
						href="https://telegram.org"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-600 hover:text-gray-900 transition-colors"
						aria-label="Telegram"
					>
						<img src={telegram} alt="telegram" class="w-5 h-5" />
					</a>
				{/if}
			</div>
		</div>

		<div class="mt-8 pt-6 border-t border-gray-200">
			<p class="flex font-plus-jakarta-sans text-sm leading-7 text-left text-[#3d3d3d]">
				Please note that this site is an independent entity and is not affiliated with, sponsored
				by, or endorsed by Facebook (fk.a.
				Meta Platform Inc., Instagram, Shopify, or any of their
				respective Affiliates or subsidiaries.
				The names Facebook, Meta, Instagram, and Shopify, as
				well as any associated logos and trademarks, are the exclusive property of their respective
				owners and are used here for identification and descriptive purposes only.
				Any such use does
				not imply any ownership, sponsorship, or endorsement of or by Facebook, Meta, Instagram, or
				Shopify.
				All product and company names, logos, and brands acknowledged to be the property of
				their respective owners.
				Any references to these trademarks are used solely for descriptive
				purposes and do not imply any endorsement or association with their respective holders.
			</p>
		</div>
	</div>
</footer>