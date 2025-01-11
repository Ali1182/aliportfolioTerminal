import styles from './Home_Body.module.css';

function Home_Body() {
    return (
        <div className={`${styles.home_body} ${styles.background}`}>
            <h1 className={styles.text_home_header}>   
                Welcome to Ali Haq's website....
            </h1>


        </div>
    )
}

export default Home_Body;
