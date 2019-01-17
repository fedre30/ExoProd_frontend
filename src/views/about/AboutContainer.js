import React from "react";
import { withRouter } from "react-router-dom";
import Map from "./About";
import API from '../../helpers/api'

class AboutContainer extends React.Component {
  state = {

  }
  componentDidMount(){



  }
  render() {
    return <Map />;
  }
}
export default withRouter(AboutContainer);
