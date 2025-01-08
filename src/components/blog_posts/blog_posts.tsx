import React from 'react';
import { BlogPost } from './post';
import styles from './blog_posts.module.css';

interface BlogPostData {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
}

const blogPosts: BlogPostData[] = [
  {
    id: 1,
    title: 'Top 10 Travel Destinations for 2024',
    content: 'Discover the top 10 travel destinations for 2024. From exotic beaches to bustling cities, find out where you should go next. These destinations offer unique experiences and unforgettable memories.',
    category: 'Travel',
    image: '/travel1.jpeg',
  },
  {
    id: 2,
    title: '5 Essential Travel Hacks for a Smooth Journey',
    content: 'Learn these 5 essential travel hacks to make your journey smoother and more enjoyable. From packing tips to booking tricks, we\'ve got you covered. Make the most of your travels with these simple yet effective hacks.',
    category: 'Life Hacks',
    image: '/lifehack1.jpeg',
  },
  {
    id: 3,
    title: 'Exploring the Wonders of the World',
    content: 'Join us as we explore some of the most amazing wonders of the world. From ancient ruins to natural marvels, these sights are sure to leave you in awe. Discover the history and beauty of these incredible places.',
    category: 'Attractions',
    image: '/attraction1.jpeg',
  },
  {
    id: 4,
    title: 'How to Travel on a Budget',
    content: 'Traveling doesn\'t have to be expensive. Learn how to travel on a budget with these tips and tricks. From finding cheap flights to saving on accommodation, we\'ll show you how to make the most of your money while exploring the world.',
    category: 'Travel',
    image: '/travel2.jpg',
  },
  {
    id: 5,
    title: 'Must-Have Travel Gadgets',
    content: 'Stay ahead of the game with these must-have travel gadgets for 2024. From portable chargers to noise-canceling headphones, these gadgets will make your travels more convenient and enjoyable.',
    category: 'Life Hacks',
    image: '/lifehack2.png',
  },
  {
    id: 6,
    title: 'Underrated Travel Destinations',
    content: 'Discover hidden gems and underrated travel destinations that are off the beaten path. These lesser-known spots offer unique experiences and are perfect for travelers looking for something different.',
    category: 'Attractions',
    image: '/attraction2.jpeg',
  },
];

export const BlogPosts: React.FC = () => {
  return (
    <div id='blog' className={styles.blogPosts}>
      <h1>News and Updates</h1>
      <div className={styles.posts}>
        {blogPosts.map(post => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            category={post.category}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};