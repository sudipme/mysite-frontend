import { error } from '@sveltejs/kit';
import { BaseUrl, ApiBaseUrl } from '$lib/config.js';

export async function load({ params }) {
    const { article_id } = params;

    async function getArticle(articleId: string) {
        try {
            const response = await fetch(`${ApiBaseUrl}article/${articleId}`);
            if (!response.ok) {
                throw error(404, 'Article not found');
            }
            return await response.json();
        } catch (err) {
            console.error("Error fetching article data:", err);
            throw error(500, 'Error fetching article data');
        }
    }

    async function getArticleContent(articleFileName: string) {
        try {
            const response = await fetch(`${ApiBaseUrl}article-content/${articleFileName}`);
            if (!response.ok) {
                throw error(500, 'Error fetching blog content');
            }
            return await response.text();
        } catch (err) {
            console.error("Error fetching blog content:", err);
            throw error(500, 'Error fetching blog content');
        }
    }

    const article = await getArticle(article_id);
    const markdown = await getArticleContent(article.blog_file_name);

    return {
        article,
        markdown,
        metaData: {
            title: article.title,
            description: article.description,
            ogImage: '/images/default-link-preview.png',
            articleLink: `${BaseUrl}blog/${article_id}`
        }
    };
}