import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { BlogPost, BlogPostSummary } from './types/sanity';

// Type for Sanity image sources (works with all versions)
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0];

// Sanity client configuration
export const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'mug3d34w',
	dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
	useCdn: true, // false if you want to ensure fresh data
	apiVersion: '2025-12-07' // Use current date
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

// Query to get all blog posts
export async function getBlogPosts(): Promise<BlogPostSummary[]> {
	const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      _id,
      title,
      slug
    }
  }`;

	return await client.fetch<BlogPostSummary[]>(query);
}

// Query to get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
	const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    author->{
      _id,
      name,
      slug,
      image {
        asset->{
          _id,
          url
        }
      },
      bio
    },
    categories[]->{
      _id,
      title,
      slug,
      description
    }
  }`;

	return await client.fetch<BlogPost>(query, { slug });
}

// Query to get featured posts
export async function getFeaturedPosts(): Promise<BlogPostSummary[]> {
	const query = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name
    },
    categories[]->{
      title,
      slug
    }
  }`;

	return await client.fetch<BlogPostSummary[]>(query);
}

// Query to get posts by category
export async function getPostsByCategory(categorySlug: string): Promise<BlogPostSummary[]> {
	const query = `*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name
    },
    categories[]->{
      title,
      slug
    }
  }`;

	return await client.fetch<BlogPostSummary[]>(query, { categorySlug });
}

// Query to get all categories
export async function getCategories() {
	const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }`;

	return await client.fetch(query);
}

// Query to get related posts (posts with similar categories)
export async function getRelatedPosts(
	postId: string,
	categories: string[],
	limit: number = 3
): Promise<BlogPostSummary[]> {
	if (!categories || categories.length === 0) {
		// If no categories, just return recent posts
		const query = `*[_type == "post" && _id != $postId] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      author->{
        name
      }
    }`;

		return await client.fetch<BlogPostSummary[]>(query, { postId, limit });
	}

	const query = `*[_type == "post" && _id != $postId && count((categories[]->_id)[@ in $categories]) > 0] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name
    },
    categories[]->{
      title,
      slug
    }
  }`;

	return await client.fetch<BlogPostSummary[]>(query, { postId, categories, limit });
}
