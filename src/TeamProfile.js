import React from "react";
import { DB_CONFIG } from "./config/firebase";
import firebase from "firebase";
import "firebase/database";

class TeamProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(DB_CONFIG);
    }
    let ref = firebase
      .database()
      .ref()
      .child(this.props.match.params.id);
    ref.once("value").then(dataSnapshot => {
      this.response = dataSnapshot.exportVal();
      this.setState({ data: this.response });
    });
  }

  render() {
    let dataUI = !this.state.data ? (
      <h3>No Data</h3>
    ) : (
      <>
        {Object.values(this.state.data).map(value => {
          return <p>{value}</p>;
        })}
      </>
    );
    return (
      <div>
        <h3>Национален отбор по футбол на {this.props.match.params.id}</h3>
        {dataUI}
      </div>
    );
  }
}

export default TeamProfile;
