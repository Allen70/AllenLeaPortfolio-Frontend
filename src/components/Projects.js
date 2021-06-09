import { ProjectData } from '../data/ProjectData'
export function Projects(props){
    let projects = ProjectData()

    function defineLinks(project){
        let links = project.links.split(' ')
        return links.map((link,index) => {
            let textContent = ''
            switch(index){
                case(0):
                textContent = "Front End";
                break;
                case(1):
                textContent = "Back End";
                break;
                case(2):
                textContent = "Demo"
                break;
                case(3):
                textContent = "Live"
                break;
                default:
            }
            return (
            <a href={link}>{textContent}</a>
            )
        })
    }
    function isCollaborative(boolean){
        return boolean? 'Collaborative': "Personal"
    }

    function createProjectCards(){
        return projects.map((project) => {
            let links = defineLinks(project)
            let type = isCollaborative(project.isCollaborative)
            return(
                <div className='project-card'>
                    <span className='project-name'>
                        {project.name + ' ' +type}
                    </span>
                    <span className='project-mini-bar'>
                        {links}
                    </span>
                    <div className='project-image'>
                        {project.image}
                    </div>
                    <div className='project-description'>
                        {project.description}
                    </div>
                    <div className='project-tech'>
                        {project.tech}
                    </div>
                </div>
            )
        })
    }

    return (
        <section id='projects' className='projects'>
            <div className='project-container'>
                {createProjectCards()}
            </div>
        </section>
    )
}