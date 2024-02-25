import Project from '../Project';
import projects from '../../projects.json';
import './../Project/index.css'


const ProjectGallery = () => {
	return (

		<div id='gallery'>

		<h1>And here they are.</h1>
		<div className="grid-container">			
					
					{projects.map(project => (
						<Project key ={project.id} project={project} />
							)
						)
					}	
		</div>
    </div>
			
			)	}

export default ProjectGallery;

