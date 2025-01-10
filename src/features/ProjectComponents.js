import styles from './ProjectComponents.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../assets/images.png';

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

function ProjectComponents({ image = pic, title, text }) {
  return (
    <Card
      className={styles.card}
      onMouseMove={handleCardTilt}
      onMouseLeave={resetCardTilt}
    >
      <Card.Img src={image} className={styles.image} />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>
          {title}
        </Card.Title>
        <Card.Text className={styles.cardText}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectComponents;
