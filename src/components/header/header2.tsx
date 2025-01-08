import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.container}>
                    <li className={styles.button_header}>
                        <a href='#footer' onClick={() => navigate('/blog')}>About us</a>
                    </li>
                    <li className={styles.button_header}>
                        <a onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li className={styles.special_button}>
                        <a onClick={() => navigate('/login')}>Sign in</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

