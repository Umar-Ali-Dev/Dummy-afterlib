import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
	_type: 'image';
	asset: {
		_id: string;
		url: string;
	};
	alt?: string;
}

export interface Author {
	_id: string;
	name: string;
	slug: {
		current: string;
	};
	image?: SanityImage;
	bio?: PortableTextBlock[];
}

export interface Category {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	description?: string;
}

export interface BlogPost {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	excerpt?: string;
	publishedAt: string;
	featured?: boolean;
	mainImage?: SanityImage;
	body?: PortableTextBlock[];
	author?: Author;
	categories?: Category[];
}

export interface BlogPostSummary {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	excerpt?: string;
	publishedAt: string;
	featured?: boolean;
	mainImage?: SanityImage;
	author?: {
		name: string;
		image?: SanityImage;
	};
	categories?: Category[];
}
