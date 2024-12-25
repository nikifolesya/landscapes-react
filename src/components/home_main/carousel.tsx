import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ReviewCard } from './reviewCard';
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

interface CarouselProps {
  reviews: Review[];
}

export const Carousel: React.FC<CarouselProps> = ({ reviews }) => {
  return (
    <CarouselProvider className={styles.carousel_cards} naturalSlideWidth={100} naturalSlideHeight={30} totalSlides={reviews.length}>
      <ButtonNext className={styles.button_next}><img className={styles.arrow} src="/next-arrow.png" alt="next" /></ButtonNext>
      <Slider>
        {reviews.map((item, index) => (
          <Slide index={index} key={index}>
            <ReviewCard review={item} />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={styles.button_back}><img className={styles.arrow} src="/back-arrow.png" alt="back" /></ButtonBack>
    </CarouselProvider>
  );
};
