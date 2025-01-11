import styles from './Resume.module.css';
import resume from '../assets/Resume.png';
import { Card } from 'react-bootstrap';

function handleCardTilt(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left; // X position within the card
    const y = event.clientY - rect.top;  // Y position within the card
  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
  
    const rotateX = ((y - centerY) / centerY) * -30; // Tilt calculation
    const rotateY = ((x - centerX) / centerX) * 30;
  
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  
function resetCardTilt(event) {
const card = event.currentTarget;
card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

function Resume(){

    return(
        <div className={styles.div}>
            <h1 className={styles.heading}>Resume</h1>
            <Card 
            className={styles.resume}
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
            >
                <img src={resume} className={styles.imageResume}/>
            </Card>
        </div>
    )
}

export default Resume;