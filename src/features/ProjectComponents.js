import styles from './ProjectComponents.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../assets/images.png';

function ProjectComponents() {
  return (
    <Card className={styles.card}>
      <Card.Img src={pic} className={styles.image}/>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>
            Gas Cost Calculator
        </Card.Title>
        <Card.Text className={styles.cardText}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectComponents;
