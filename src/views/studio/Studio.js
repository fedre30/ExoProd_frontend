import React, { Component } from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import ovale from '../../assets/img/ovale-dotted.png'
import protosound from '../../assets/proto-sound/silence-voice.mp3';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ControlePlayer from "../../components/studio/ControlePlayer";


class Studio extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <StudioComponent>
        <h1>Menu</h1>
        <h1 id="title">Mélodie</h1>
        <Grid centered columns={3}>
          <Grid.Row columns={1}>
            <Grid.Column >
              <div className="studio-display-container">
                <div className="studio-display-instrument mobile">
                  <p className="studio-display-instrument-instruction">Choisissez un instrument</p>
                </div>
                <img style={imageStyle}src={ovale}/>
              </div>
            </Grid.Column>
          </Grid.Row>
          <ControlePlayer
          url={protosound}
          />
        </Grid>
      </StudioComponent>
    )
  }
};

const StudioComponent = styled.div
  `
  height:100vh;
  background: ${Colors.primary};
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
  
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
  .studio-display-container {
    position:relative;
    margin-top: 32px;
    margin-bottom: 12px;
    width:100%;
  }
  .studio-display-instrument.mobile {
    position:relative;
    z-index:1;
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
const imageStyle ={
  position:'absolute',
  zIndex:0,top:'50%',
  left:'50%',
  width:'304px',
  height:'304px',
  transform:'translate(-50%,-50%)',
  KhtmlUserSelect: 'none',
  OUserSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none',
}
export default Studio;
