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
      <Grid.Row columns={1}>
        <Grid.Column centered>
          <div className="studio-display-instrument mobile">
            <p className="studio-display-instrument-instruction">Choisissez un instrument</p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row verticalAlign='middle' columns={1}>
        <Grid.Column textAlign='center' >
          <Button className="studio-btn-audio mobile" circular icon='info' size='large'/>
          <Button className="studio-btn-audio mobile" circular icon='play' size='huge'/>
          <Button className="studio-btn-audio mobile" circular icon='volume off' size='large'/>
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
  .ui.button.studio-btn-audio.mobile {
    transition: all 0.3s ease;
    background-color:rgba(0,0,0,0.39);
    color:#FFFCF2;
  }
  .ui.button.studio-btn-audio.mobile:hover {
    background-color:rgba(0,0,0,0.8);
  }
  .studio-btn-audio.mobile:nth-child(2){
    margin: 0 24px;
  }
  .studio-display-instrument.mobile {
    width: 240px;
    height: 240px;
    border-radius:50%;
    background-color:rgba(0,0,0,0.39);
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .studio-display-instrument-instruction {
    color: ${Colors.text};
    font-family: ${Fonts.title};
    font-size: 16px;
  }
  `

export default Studio;
