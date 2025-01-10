import ProjectComponents from "./ProjectComponents";
import styles from './Projects.module.css';
import image1 from '../assets/images.png';
import image2 from '../assets/CyberProject.png';
import image3 from '../assets/syluz.png';


function Projects(){


    return(
        <div className = {styles.projects}>
            <ProjectComponents
            image={image1}
            title='Gas Calculator App'
            text='This app calculates the total cost of gas for a trip based on the distance and the fuel efficiency of the car.'
            />
            <ProjectComponents
            image = {image2}
            title = ' Cypher Cyber Security Clinc'
            text = 'This is a website for a cyber security clinic that provides services to help protect your data.'
            />
            <ProjectComponents
            image={image3}
            title = 'Syluz Ecommerce Store '
            text = 'This is an ecommerce store that I created that sells a variety of products.'
            
            
            />
        </div>
    )
}

export default Projects;
