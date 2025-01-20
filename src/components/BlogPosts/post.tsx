import React from 'react';
import styles from './blog_posts.module.css';

interface BlogPostProps {
    id: number;
    title: string;
    content: string;
    category: string;
    image: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ id, title, content, category, image }) => {
    return (
        <div className={styles.post}>
            <img src={image} alt={title} className={styles.postImage} />
            <h2>{title}</h2>
            <p>{content} <a href={`/blog/${id}`} className={styles.readMore}>Read more</a></p>
            <span className={styles.category}>{category}</span>
        </div>
    );
};