import React from "react";
import { withRouter } from "react-router-dom";
import Home from "./Home";
import API from '../../helpers/api'

class HomeContainer extends React.Component {
  state = {

  }
  componentDidMount(){



  }
  render() {
    return <Home />;
  }
}
export default withRouter(HomeContainer);
