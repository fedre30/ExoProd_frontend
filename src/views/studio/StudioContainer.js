import React from "react";
import { withRouter } from "react-router-dom";
import Studio from "./Studio";
import API from '../../helpers/api'

class StudioContainer extends React.Component {
  state = {
    title:"Viva la vida",
    artist: "COLDPLAY", 
  }
  componentDidMount(){



  }
  render() {
    return <Studio 
            title={this.state.title}
            artist={this.state.artist}
            />;
  }
}
export default withRouter(StudioContainer);
