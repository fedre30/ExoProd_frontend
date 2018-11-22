import React from "react";
import { withRouter } from "react-router-dom";
import Studio from "./Studio";
import API from '../../helpers/api'

class StudioContainer extends React.Component {
  state = {

  }
  componentDidMount(){



  }
  render() {
    return <Studio />;
  }
}
export default withRouter(StudioContainer);
