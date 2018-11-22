import React from "react";
import { withRouter } from "react-router-dom";
import Instrument from "./Instrument";
import API from '../../helpers/api'

class InstrumentContainer extends React.Component {
  state = {

  }
  componentDidMount(){



  }
  render() {

    return <Instrument />;
  }
}
export default withRouter(InstrumentContainer);
