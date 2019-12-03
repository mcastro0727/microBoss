import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    return(
        <>
        <h5>projectTitle: ...{props.projectTitle}</h5>
        <p>creator: ...{props.creator}</p>
        <p>startDate: ...{props.startDate}</p>
        <p>deadLine: ...{props.deadLine}</p>
        <p>TODOS: ...{props.todos}</p>
        <p>assignee: ...{props.assignee}</p>
        </>
    )
}
export default ProjectDetails