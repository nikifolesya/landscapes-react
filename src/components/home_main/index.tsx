import styles from './main1.module.css';
export const HomeMain = () => {
    return (
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
                        <input type="text" placeholder="Search for the location you want!" />
                        <button>Search</button>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="img1.svg" alt="Landmarks" />
                    {/* <div className={styles.info_cards}>
                        <div className={styles.info_card}>Info</div>
                        <div className={styles.info_card}>Info</div>
                        <div className={styles.info_card}>Info</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
