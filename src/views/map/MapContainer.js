import React from "react";
import { withRouter } from "react-router-dom";
import Map from "./Map";
import API from '../../helpers/api'

class MapContainer extends React.Component {
  state = {

  }
  componentDidMount(){



  }
  render() {
    return <Map />;
  }
}
export default withRouter(MapContainer);
