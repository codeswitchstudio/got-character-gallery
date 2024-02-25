import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
  return (
    <Card style={{ width: '96%' }}>
      <Card.Img variant="top" src={project.image}/>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text><a href=''>
        <Button variant="primary">Go somewhere</Button></a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;