import React, { Component } from "react";
import { Button, Form, FormControl, Navbar, Nav } from "react-bootstrap";
import API from "../utils/API";

import ProfileGrid from "../components/ProfileGrid";
import EpicMenu from "../components/EpicMenu/EpicMenu";
class Profile extends Component {
  /** SessionLoggedIN & !SessionLoggedIN  //
   * userName that's logged in
   * AccountDetails
   * SECTION FOR PROJECTS_CREATED
   * MIDDLE SECTION FOR PORJECT_SELECTED
   * SECTION FOR CHATBOX
   * use searchar to search people ??MAYBE??
   *
   */
  // STATE / PROPS
  constructor(props) {
    super(props);
  }

  // ++ componentDidMount >> getProjectsByID
  // > get api.profilesByID / 'user logged in'
  /*
    componentDidMount() {
      API.getProjectsByID(this.props.params)
       

      //console.log(this.props)
      

    }
    */

  // fetchData 'projectsCreated' / 'projectsInProgress'::'projectSelected' \ CHATBOX

  render() {
    return (
      <React.Fragment>
        <div className="container center">
          <EpicMenu />
        </div>

        <ProfileGrid />
      </React.Fragment>
    );
  }
}

export default Profile;
