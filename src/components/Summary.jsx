export default function Summary(props){
    const { experience } = props
    const summaryData = experience.map((experience, index) => {
        return (
            <tr key={index}>
                        <td><a href={experience.companyUrl} target="_blank">{experience.company}</a></td>
                        <td><a href={"#" + experience.id}>{experience.title}</a></td>
                        <td>{experience.shortTenure}</td>
            </tr>
        )
    })
    return (
        <>
            <div className="stickyHeader">
                <h2>Employment Summary</h2>
            </div>
            <table>
                <tbody>
                    {summaryData}
                </tbody>
            </table>
        </>
    )
}