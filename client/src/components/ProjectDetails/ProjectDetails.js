import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

const ProjectDetails = ({ props }) => {
  console.log(props);

  return (
    <React.Fragment>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Creator</th>
            <th>Start Date</th>
            <th>Deadine</th>
            <th>Todos</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.projectTitle}</td>
            <td>{props.creator}</td>
            <td>{props.startDate}</td>
            <td>{props.deadLine}</td>
            <td>{props.todos}</td>
            <td>{props.assignee}</td>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ProjectDetails;
