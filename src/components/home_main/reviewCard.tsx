//reviewCard.tsx

import React from 'react';
import styles from './review.module.css';

interface Author {
  name: string;
  avatar: string;
}

interface Place {
  name: string;
}

interface Review {
  author: Author;
  date: string;
  text: string;
  rating: number;
  place: Place;
}

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className={styles.review_card}>
      <div className={styles.review_header}>
        <img src={review.author.avatar} alt={review.author.name} className={styles.avatar} />
        <div className={styles.review_author}>
          <h3>{review.author.name}</h3>
          <p>{review.date}</p>
        </div>
      </div>
      <p className={styles.review_text}>{review.text}</p>
      <div className={styles.review_rating}>
        <span>⭐️ {review.rating}/5</span>
        {/* {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fa fa-star${review.rating > i ? ' checked' : ''}`}
          />
        ))} */}
      </div>
      <p className={styles.review_place}>📍{review.place.name}</p>
    </div>
  );
};
