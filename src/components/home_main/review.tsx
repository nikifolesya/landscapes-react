import React from 'react';
import styles from './review.module.css';
import { Carousel } from './carousel';

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

const reviews: Review[] = [
  {
    author: {
      name: 'John Doe',
      avatar: '/avatar.jpg'
    },
    date: '2023-01-01',
    text: 'This is an amazing product! Highly recommend to everyone.',
    rating: 5,
    place: {
      name: 'New York, USA'
    }
  },
  {
    author: {
      name: 'Jane Smith',
      avatar: '/avatar.jpg'
    },
    date: '2023-02-01',
    text: 'Great quality and excellent customer service.',
    rating: 4,
    place: {
      name: 'London, UK'
    }
  },
  {
    author: {
      name: 'Alice Johnson',
      avatar: '/avatar.jpg'
    },
    date: '2023-03-01',
    text: 'I am very satisfied with my purchase. Will buy again.',
    rating: 5,
    place: {
      name: 'Sydney, Australia'
    }
  },
  {
    author: {
      name: 'Robert Brown',
      avatar: '/avatar.jpg'
    },
    date: '2023-04-01',
    text: 'The product exceeded my expectations. Five stars!',
    rating: 5,
    place: {
      name: 'Tokyo, Japan'
    }
  },
  {
    author: {
      name: 'Emily Davis',
      avatar: '/avatar.jpg'
    },
    date: '2023-05-01',
    text: 'Fast shipping and the product is exactly as described.',
    rating: 4,
    place: {
      name: 'Berlin, Germany'
    }
  },
  {
    author: {
      name: 'Michael Wilson',
      avatar: '/avatar.jpg'
    },
    date: '2023-06-01',
    text: 'Fantastic experience from start to finish. Highly recommend.',
    rating: 5,
    place: {
      name: 'Paris, France'
    }
  }
];

export const Review: React.FC = () => {
  return (
    <div className={styles.review}>
      <h2>User Reviews</h2>
      <Carousel reviews={reviews} />
    </div>
  );
};
