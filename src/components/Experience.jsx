export default function Experience(props) {
    const { experience } = props
    const experienceData = experience.map((experience, index) =>{
        return (
            <div className="experienceCard" id={experience.id} key={index}>
                <p className="tenure">{experience.tenure}</p>
                <div className="cardColumn">
                    <h4>{experience.title} - {experience.company}</h4>
                    <p className="subtitle">{experience.subtitle}</p>
                    <p className="minortitle">Responsibilities</p>
                    <ul>
                        {experience.responsibilities.map((val, i) => <li key={i}>{val}</li>)}
                    </ul>
                    {!experience.achievements ? "" : 
                    <><p className="minortitle">Achievements</p>
                    <ul>
                        {experience.achievements.map((val, i) => <li key={i}>{val}</li>)}
                    </ul></>}
                    <ul className="technologies">
                        {experience.technologies.map((val, i) => <li key={i}>{val}</li>)}
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="stickyHeader">
                <h2>Experience</h2>
            </div>
            <div className="experienceContent">
                {experienceData}
                <a className="externalLink" href="KeiranHembrowCV2025.pdf" target="_blank"><h4>View Full Résumé <i className="fa-solid fa-arrow-up-right-from-square"></i></h4></a>
            </div>
        </>
    )
}