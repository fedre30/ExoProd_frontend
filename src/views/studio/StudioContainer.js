import React from "react";
import { withRouter } from "react-router-dom";
import Studio from "./Studio";
import API from '../../helpers/api'
import Menu from '../../components/menu/Menu';
import Step from '../../components/studio/Step';
class StudioContainer extends React.Component {
  state = {
    title:"Viva la vida",
    artist: "COLDPLAY", 
  }
  componentDidMount(){



  }
  render() {
    return (
    <div>
      <Menu/>
      <Step/>
      <Studio 
            title={this.state.title}
            artist={this.state.artist}
            />
    </div>
    )
  }
}
export default withRouter(StudioContainer);
