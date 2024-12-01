import styles from './map.module.css';
import { YandexMap } from './map';

export const HomeMap = () => {
    return (
        <div className={styles.container}>
            <h1>Popular Landmarks</h1>
            <div className={styles.content}>
                <div className={styles.yandexmap}>
                    <YandexMap />
                </div>
            </div>
        </div>
    );
};
