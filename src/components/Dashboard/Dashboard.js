import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../Projects/ProjectList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={this.props.projects} />
          </div>

          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  firestoreConnect(["projects"]),
  connect(mapStateToProps)
)(Dashboard);
