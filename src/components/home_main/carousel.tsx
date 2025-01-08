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
    <div className={styles.carousel_container}>
      <CarouselProvider
        className={styles.carousel_cards}
        naturalSlideWidth={45}
        naturalSlideHeight={30}
        totalSlides={reviews.length}
        visibleSlides={3} // Указываем, что на странице должно быть видно 3 слайда
      >
        <ButtonBack className={styles.button_back}><img className={styles.arrow} src="/back-arrow.png" alt="back" /></ButtonBack>
        <Slider className={styles.slider}>
          {reviews.map((item, index) => (
            <Slide index={index} key={index} className={styles.slide}>
              <ReviewCard review={item} />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className={styles.button_next}><img className={styles.arrow} src="/next-arrow.png" alt="next" /></ButtonNext>
      </CarouselProvider>
    </div>
  );
};
