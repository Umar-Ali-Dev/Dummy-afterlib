// svelte.config.js

// Change this line:
// import adapter from '@sveltejs/adapter-auto'; 
import adapter from '@sveltejs/adapter-vercel'; // <-- NEW

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // Now it explicitly uses the Vercel adapter
        adapter: adapter()
    }
};

export default config;