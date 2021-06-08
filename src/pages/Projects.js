import { ProjectCard } from '../components/ProjectCard'
import { ProjectData } from '../data/ProjectData'

export function Projects(){

    const generateProjectCards = () => {
        let PD = ProjectData()
        return PD.map((project) => {
           return (
               <ProjectCard project={project}/>
           )
       })
    }

    return(
        <span className="project-card-container">
            {generateProjectCards()}
        </span>
    )
}