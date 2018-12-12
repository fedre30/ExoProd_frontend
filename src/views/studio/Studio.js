import React from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Grid, Image, Button } from 'semantic-ui-react';

const Studio = () => (
  <StudioComponent>
    <h1>Menu</h1>
    <h1 id="title">Mélodie</h1>
    <Grid verticalAlign='middle' centered columns={3}>
      <Grid.Column textAlign='center' width={3}>
        <Button className="btn-audio" circular icon='info' size='large'/>
      </Grid.Column>

      <Grid.Column textAlign='center'width={4}>
        <Button className="btn-audio" circular icon='play' size='huge'/>
      </Grid.Column>

      <Grid.Column textAlign='center' width={3} >
        <Button className="btn-audio" circular icon='volume off' size='large'/>
      </Grid.Column>

    </Grid>

  </StudioComponent>
);

const StudioComponent = styled.div
  `
  height:100vh;
  background: ${Colors.primary};
  background: linear-gradient(21deg, rgba(153,11,223,1) 0%, rgba(152,35,141,1) 100%);
  
  #title{
    text-align:center;
    font-size: 24px;
    margin-bottom:16px;
    color: ${Colors.text};
    font-family: ${Fonts.title};
  }
  .ui.button.btn-audio{
    transition: all 0.3s ease;
    background-color:rgba(0,0,0,0.39);
    color:#FFFCF2;
  }
  .ui.button.btn-audio:hover{
    background-color:rgba(0,0,0,0.8);
  }
  `

export default Studio;
