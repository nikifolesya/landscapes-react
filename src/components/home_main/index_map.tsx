import { useEffect, useState } from 'react';
import styles from './map.module.css';
import { YandexMap } from './map';
import { Card } from './place_card';

const landmarks: { title: string; imageUrl: string; coordinates: [number, number] }[] = [
    { title: 'Eiffel Tower', imageUrl: '/place1.jpeg', coordinates: [48.8584, 2.2945] },
    { title: 'Great Wall of China', imageUrl: '/place2.jpeg', coordinates: [40.676735, 117.232209] },
    { title: 'Taj Mahal', imageUrl: '/place3.jpeg', coordinates: [27.1751, 78.0421] },
    { title: 'Colosseum', imageUrl: '/place4.jpg', coordinates: [41.8902, 12.4922] },
    { title: "St. Isaac's Cathedral", imageUrl: '/place5.jpg', coordinates: [59.934081, 30.306125] },
    { title: 'Red Square', imageUrl: '/place6.jpg', coordinates: [55.753460, 37.621601] },
];

export const HomeMap = () => {
    const [selectedCoordinates, setSelectedCoordinates] = useState<[number, number] | null>(null);

    // Получение текущей геопозиции
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setSelectedCoordinates([latitude, longitude]);
                },
                (error) => {
                    console.error("Ошибка получения геопозиции:", error);
                    setSelectedCoordinates([55.7558, 37.6176]); // Москва
                }
            );
        } else {
            console.warn("Браузер не поддерживает Geolocation API");
            setSelectedCoordinates([55.7558, 37.6176]); // Москва
        }
    }, []);

    const handleCardClick = (coordinates: [number, number]) => {
        setSelectedCoordinates(coordinates);
    };

    if (!selectedCoordinates) {
        return <p></p>;
    }

    return (
        <div className={styles.container}>
            <h1>Popular Landmarks</h1>
            <div className={styles.content}>
                <div className={styles.yandexmap}>
                    <YandexMap coordinates={selectedCoordinates} />
                </div>
                <div className={styles.cards}>
                    <div className={styles.gradient}>
                        <img className={styles.gradient1} src="Vector-3.svg" alt="Red gradient" />
                        {/* <img className={styles.gradient2} src="Vector-4.svg" alt="Orange gradient" /> */}
                    </div>
                    {landmarks.map((landmark, index) => (
                        <Card
                            key={index}
                            title={landmark.title}
                            imageUrl={landmark.imageUrl}
                            onClick={() => handleCardClick(landmark.coordinates)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
