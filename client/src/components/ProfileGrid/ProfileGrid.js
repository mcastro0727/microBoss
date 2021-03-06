import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import API from '../../utils/API';
//import ProjectForm from '../ProjectForm'
import { Form, Button } from 'react-bootstrap'
import ProjectDetails from '../ProjectDetails'
import { ProjectList } from '../ProjList'
import { Route } from 'react-router-dom'
class ProfileGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userProjects: [],
            clickedPDBtn: true,
            projectTitle: '',
            creator: '',
            startDate: '',
            deadLine: '',
            todos: '',
            assignee: '',
            clickedFBtn: true
        }
        console.log(props)
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    // handleFormSubmit
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState({ projects: [] });
        console.log(this.state);
        API.saveProject({
            projectTitle: this.state.projectTitle,
            creator: this.state.creator,
            startDate: this.state.startDate,
            deadLine: this.state.deadLine,
            todos: this.state.todos,
            assignee: this.state.assignee
        })
            .then(obj => console.log(obj))
            .catch(err => console.log(err));
        window.location.reload();
    };
    componentDidMount() {
        this.getProjects();
        console.log(this.state.userProjects)
    }
    getProjects = () => {
        API.getProjects()
            .then(e =>
                this.setState({
                    userProjects: e.data
                })
            )
            .catch(err => console.log(err));
    }
    
    
    // method for hide form, show data
    toggleData = (e) => {
        /*
        //console.log(e.target)
        //console.log(e.target.value)
        //console.log({ [Object]:e.target })
        console.log({
            [Object]: e.target.firstChild.data
        })
        this.setState({
            btnPressed: {
                [Object]: e.target.firstChild.data 
            } 
            
        })
        //console.log(this.state.btnPressed)
        */
        API.getProjects()
            .then(res => console.log(res.data))
        this.setState({
            clickedPDBtn: false,
            clickedFBtn: true
        })
        console.log(this.state.clickedFBtn);
        console.log(this.state.clickedPDBtn)
    }
    
    toggleForm = () => {
        this.setState({
            clickedFBtn: false,
            clickedPDBtn: true
        })
        console.log(this.state.clickedFBtn);
        console.log(this.state.clickedPDBtn)
    }
    handleSelectChange = (e) => {
        console.log(e.target.value)
        this.toggleData(e)
    }
    selectedProject = (proj) => {
        console.log(proj)
        
        
    }
    render() {
        
        const projects = this.state.userProjects;
        //console.log(projects);
        const detailBtn = this.state.clickedPDBtn;
        const formBtn = this.state.clickedFBtn;
        //const BUTTON = this.state.btnPressed;
        //console.log(BUTTON)
        //console.log(`constructedSTATE:DATA-------\n\nshow_ProjectDetail: ${detailBtn}\n--------\n\nshow_Form: ${formBtn}`)
        
        const map_select = projects.map((project) => {
            return (<option 
            key={project._id} 
            value={project._id}>
            {project.projectTitle}</option>
            )})
        return (
            <React.Fragment>
                <Container>
                    <div className="leftpane">
                        <h1 style={{ fontStyle: "italic", fontWeight: "bold", color: "white" }}>Project List</h1>
                        <br />
                        <button
                            className="btn-success"
                            type="button"
                            onClick={this.toggleForm}>Create New Project</button>
                        <br />
                        <br />
                        <ProjectList>
                            {/** PUT MAPPED SELECT HERE */}
                            <select
                                onChange={this.handleSelectChange}
                                value={this.selectedProject}
                            >
                                {map_select}
                            </select>
                            {/* {projects.map((project) => {
                                return (
                                    <button
                                        className="btn-warning"
                                        type='button'
                                        key={project._id}
                                        value={BUTTON}
                                        onClick={this.toggleData}>{project.projectTitle}</button>
                                )
                            })} */}
                        </ProjectList>
                    </div>
                    <div className="middlepane">
                        <Form hidden={formBtn}>
                        <h1 style={{ fontStyle: "italic", fontWeight: "bold", color: "green" }}>Project Form</h1> <br />
                            <Form.Group controlId="formUserName">
                                <Form.Label>Project Administrator</Form.Label>
                                <Form.Control
                                    name="creator"
                                    value={this.state.creator}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Enter username"
                                />
                            </Form.Group>
                            <Form.Group controlId="formProjectTitle">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control
                                    name="projectTitle"
                                    value={this.state.projectTitle}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="What are you working on?"
                                />
                            </Form.Group>
                            <Form.Group controlId="formStartDate">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="When was this assigned?"
                                />
                            </Form.Group>
                            <Form.Group controlId="formDeadLine">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control
                                    name="deadLine"
                                    value={this.state.deadLine}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="When is this to be completed by?"
                                />
                            </Form.Group>
                            <Form.Group controlId="formObjectives">
                                <Form.Label>Task at Hand</Form.Label>
                                <Form.Control
                                    name="todos"
                                    value={this.state.todos}
                                    onChange={this.handleInputChange}
                                    type="textarea"
                                    placeholder="TODO"
                                />
                            </Form.Group>
                            <Form.Group controlId="formObjectives">
                                <Form.Label>Assignee</Form.Label>
                                <Form.Control
                                    name="assignee"
                                    value={this.state.assignee}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Who's doing this task?"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleFormSubmit} >
                                Submit
                </Button>
                        </Form>
                        <div className="details" hidden={detailBtn} >
                            
                            {projects.map((detail) => {
                                return (
                                    <div key={detail._id}>
                                        <ProjectDetails 
                                            // detail={detail}
                                            title={detail.projectTitle}
                                            creator={detail.creator}
                                            startDate={detail.startDate}
                                            deadLine={detail.deadLine}
                                            notes={detail.todos}
                                            assignee={detail.assignee} />
                                    </div>    
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
export default ProfileGrid







