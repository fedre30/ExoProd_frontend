import React from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import AudioPlayer from '../../components/studio/AudioPlayer';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const Studio = () => (
  <StudioComponent>
    <h1>Menu</h1>
    <h1 id="title">Mélodie</h1>

      <AudioPlayer/>
    <Grid centered columns={2}>
      <Grid.Column  circulartextAlign='center'>
        <div size='large' className="studio-displayInstrument">
          
        </div>
      </Grid.Column>
      <Grid.Row verticalAlign='middle' centered columns={1}>
        <Grid.Column textAlign='center' >
          <Button className="studio-btn-audio" circular icon='info' size='large'/>
          <Button className="studio-btn-audio" circular icon='play' size='huge'/>
          <Button className="studio-btn-audio" circular icon='volume off' size='large'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </StudioComponent>
);

const StudioComponent = styled.div
  `
  height:100vh;
  background: ${Colors.primary};
  background: linear-gradient(21deg, rgba(153,11,223,1) 0%, rgba(152,35,141,1) 100%);
  
  #title {
    text-align:center;
    font-size: 24px;
    margin-bottom:16px;
    color: ${Colors.text};
    font-family: ${Fonts.title};
  }
  .ui.button.studio-btn-audio {
    transition: all 0.3s ease;
    background-color:rgba(0,0,0,0.39);
    color:#FFFCF2;
  }
  .ui.button.studio-btn-audio:hover {
    background-color:rgba(0,0,0,0.8);
  }
  .studio-btn-audio:nth-child(2){
    margin: 0 16px;
  }

  `

export default Studio;
