import styles from './Header.module.css';

function Header(){

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };


    return(
        <div className={styles.header}>

            <button className={styles['button']} onClick={() => scrollToSection('home')}>home</button>
            <button className={styles['button']} onClick={() => scrollToSection('about')}>about</button>
            <button className={styles['button']} onClick={() => scrollToSection('projects')}>projects</button>
            <button className={styles['button']} onSelect={() => scrollToSection('contact')}>contact</button>
        </div>
    )
}

export default Header;