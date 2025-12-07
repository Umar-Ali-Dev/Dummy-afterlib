import { getBlogPost, getRelatedPosts } from '$lib/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await getBlogPost(params.slug);

	if (!post) {
		throw error(404, {
			message: 'Post not found'
		});
	}

	// Get related posts based on categories
	const categoryIds = post.categories?.map((cat) => cat._id) || [];
	const relatedPosts = await getRelatedPosts(post._id, categoryIds, 3);

	return {
		post,
		relatedPosts
	};
};
