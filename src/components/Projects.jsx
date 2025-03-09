export default function Projects(props) {
const { project } = props
const projectData = project.map((project, index) => {
    return (
        <div className="projectCard" key={index}>
            <div className="cardColumn">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <p>I created the {project.name} using:</p>
                <ul>
                    {project.callouts.map((val, i) => <li key={i}>{val}</li>)}
                </ul>
                <ul className="technologies">
                    {project.technologies.map((val, i) => <li key={i}>{val}</li>)}
                </ul>
            </div>
            <div className="projectImage">
                <a className="externalLink" href={project.imageUrl} target="_blank">
                    <img src={project.image} width="100%"/><br/>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    )
})

    return(
        <>
            <div className="stickyHeader">
                <h2>Projects</h2>
            </div>
            {projectData}
        </>
    )
}