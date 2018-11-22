import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InstrumentContainer from '../../views/instrument/InstrumentContainer';

const Home = () => (
  <div>
    <h1>Homepage</h1>

    <li><Link to='/instrument' >
      instrument
    </Link></li>
    <li><Link to='/map' >
      map
    </Link></li>
    <li><Link to='/studio' >
      studio
    </Link></li>

  </div>
);


export default Home;
