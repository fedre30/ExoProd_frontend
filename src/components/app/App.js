import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import HomeContainer from "../../views/home/HomeContainer";
import InstrumentContainer from "../../views/instrument/InstrumentContainer";
import MapContainer from '../../views/map/MapContainer';
import StudioContainer from '../../views/studio/StudioContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/instrument" component={InstrumentContainer}/>
            <Route exact path="/map" component={MapContainer}/>
            <Route exact path="/studio" component={StudioContainer}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
