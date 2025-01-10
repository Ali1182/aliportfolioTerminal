import styles from './ProjectComponents.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../assets/images.png';

function ProjectComponents({image, title, text}) {
  return (
    <Card className={styles.card}>
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
