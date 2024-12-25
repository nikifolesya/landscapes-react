import styles from './footer.module.css';
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.gradient}>
                <img className={styles.gradient1} src="Vector-6.svg" alt="Left gradient 1" />
                <img className={styles.gradient2} src="Vector-5.svg" alt="Left gradient 2" />
                <img className={styles.gradient3} src="Vector-8.svg" alt="Right gradient 1" />
                <img className={styles.gradient4} src="Vector-9.svg" alt="Right gradient 2" />
            </div>

            <div className={styles.container}>
                <div className={styles.left__info}>
                    <div className={styles.info}>
                        <p>We provide information about properties such as countries, cities and the most fascinatig landmarks all over the world!</p>
                    </div>
                    <div className={styles.logo}>
                        <img src="/ant-design_instagram-filled.svg" alt="fb" />
                        <img src="/ant-design_twitter-outlined.svg" alt="xwitter" />
                        <img src="/brandico_facebook.svg" alt="inst" />
                    </div>
                </div>
                <div className={styles.right_info}>
                    <div className={styles.property}>
                        <h1>Property</h1>
                        <a href="">Country</a>
                        <a href="">City</a>
                        <a href="">Landscapes</a>
                    </div>
                    <div className={styles.article}>
                        <h1>Article</h1>
                        <a href="">New Article</a>
                        <a href="">Popular Article</a>
                        <a href="">Most Read</a>
                    </div>
                    <div className={styles.contact}>
                        <h1>Contact</h1>
                        <p>Moscow, Russia</p>
                        <a href="tel:+79001111111">+7-900-111-11-11</a>
                        <a href="mailto:email@example.com" type='email'>email@example.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};