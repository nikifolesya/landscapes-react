import React from 'react';
import styles from './review.module.css';
import { Carousel } from './carousel';

// Типы для данных отзыва
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

// Пример данных для отзывов
const reviews: Review[] = [
  {
    author: {
      name: 'Иван Иванов',
      avatar: '/avatar.jpg'
    },
    date: '2022-01-01',
    text: 'Отличный сайт! Нашел много интересных мест для путешествия.',
    rating: 5,
    place: {
      name: 'Париж, Франция'
    }
  },
  {
    author: {
      name: 'Мария Петрова',
      avatar: '/avatar.jpg'
    },
    date: '2022-02-01',
    text: 'Сайт помог мне найти лучшие достопримечательности в Риме.',
    rating: 4,
    place: {
      name: 'Рим, Италия'
    }
  }
];

export const Review: React.FC = () => {
  return (
    <div className={styles.review}>
      <h2>Отзывы наших пользователей</h2>
      <Carousel reviews={reviews} />
    </div>
  );
};
