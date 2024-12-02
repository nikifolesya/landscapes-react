// Card.js
import styles from './place_card.module.css'; // Создадим CSS модуль для стилей

export const Card = ({ title, imageUrl, onClick }: { title: string; imageUrl: string; onClick: () => void }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <button className={styles.button} onClick={onClick}>{title}</button>
        </div>
    );
};
