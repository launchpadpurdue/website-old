import ProjectItem from './ProjectItem'
import classes from './ProjectList.module.css';

function ProjectList(props) {
    return <ul className={classes.list}>
        {props.projects.map(projects => <ProjectItem key={projects.id} 
        id={projects.id} 
        image={projects.image}
        title={projects.title}
        address={projects.address}
        description={projects.description}/>)}
    </ul>
}

export default ProjectList;