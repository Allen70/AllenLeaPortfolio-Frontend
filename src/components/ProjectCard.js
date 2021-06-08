export function ProjectCard({project}){

    
    let convertLinks = () => {
        let links = project.project_links.split(' ')
        return links.map((link,index) => {
            return (
                <span>
                    <a href={link}>{index === 0? 'Frontend':'Backend'}</a>
                </span>
            )
        })
    }

    return (
        <div className="project-card">
            <div className="project-name">{project.name}</div>
            <span className="project-links">
                {convertLinks()}
            </span>
            <div className="project-description">{project.description}</div>
            <div className="technologies-list">{project.tech_list}</div>
            <div className="personal-collaborative">{project.is_collaborative? 'Collaborative':'Personal'}</div>
        </div>
    )
}