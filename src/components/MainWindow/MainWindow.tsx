import React, { useEffect, useState } from 'react';
import { Link as ScrollLink} from 'react-scroll';
import styles from './main_window.module.css';
import { MapComponent } from '../Map/MapComponent';

export const MainWindow: React.FC = () => {
    const [location, setLocation] = useState<string>('');
    const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

    const handleSearch = async () => {
        if (location) {
            const response = await fetch(
                `https://geocode-maps.yandex.ru/1.x/?apikey=55560862-2dbf-47f8-9076-5dd76adc09a0&format=json&geocode=${encodeURIComponent(location)}&sco=latlong`
            );
            const data = await response.json();
            const pos = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            setCoordinates([parseFloat(pos[1]), parseFloat(pos[0])]);
        }
    };

    // Получение текущей геопозиции
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoordinates([latitude, longitude]);
                },
                (error) => {
                    console.error("Ошибка получения геопозиции:", error);
                    setCoordinates([55.7558, 37.6176]); // Москва
                }
            );
        } else {
            console.warn("Браузер не поддерживает Geolocation API");
            setCoordinates([55.7558, 37.6176]); // Москва
        }
    }, []);

    if (!coordinates) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.left_container}>
                    <div className={styles.gradient}>
                        <img className={styles.gradient1} src="Vector.svg" alt="Red gradient" />
                        <img className={styles.gradient2} src="Vector-2.svg" alt="Orange gradient" />
                    </div>
                    <div className={styles.search_container}>
                        <div className={styles.header}>
                            <h1>Explore The World's Greatest Landmarks</h1>
                        </div>
                        <div className={styles.search_bar}>
                            <img src="mark.svg" alt="Mark point" />
                            <input
                                type="text"
                                placeholder="Search for the location you want!"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <ScrollLink to="map" smooth={true} duration={500}>
                                <button onClick={handleSearch}>Search</button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="main_img.png" alt="Landmarks" />
                </div>
            </div>
            <MapComponent coordinates={coordinates} />
        </div>
    );
};