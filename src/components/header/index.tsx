import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.container}>
                    <li className={styles.button_header}>
                        <a onClick={() => navigate('/')}>About us</a>
                    </li>
                    <li className={styles.button_header}>
                        <a onClick={() => navigate('/')}>Article</a>
                    </li>
                    <li className={styles.special_button}>
                        <a onClick={() => navigate('/')}>Sign Up!</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
