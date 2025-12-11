import { getBlogPosts, getLandingPage } from '$lib/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    // Fetch both at the same time for better performance
    const [posts, landingPage] = await Promise.all([
        getBlogPosts(),
        getLandingPage()
    ]);

    return {
        posts,       // Your existing blog data
        landingPage  // Your new landing page data
    };
};