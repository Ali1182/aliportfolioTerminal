import styles from './Home_Body.module.css';

function Home_Body() {
    return (
        <div className={`${styles.home_body} ${styles.background}`}>
            <h1 className={styles.text_home_header}>   
                Welcome to Ali Haq's website....
            </h1>
            <p className={styles.text_paragraph}>
                I am a software engineer with a passion for creating innovative solutions to complex problems.
                I am a quick learner and I am always looking to expand my skills.
            </p>

        </div>
    )
}

export default Home_Body;
