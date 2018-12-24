import React, { Component } from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import ovale from '../../assets/img/ovale-dotted.png'
import ControlePlayer from "../../components/studio/ControlePlayer";
import protosound from '../../assets/proto-sound/silence-voice.mp3';
import { Grid } from 'semantic-ui-react';
//import Button from '../../components/studio/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../../components/menu/Menu';


class Studio extends Component {
  constructor(props) {
    super(props);

    this.buttons = []; //initialisation de mes buttons

    // je sélectionne tous mes boutons ('équivalent d'un querySelectorAll('button') grace à l'attribut ref que j'ai placé soigneusement dans chaque boutton
    // ainsi qu'a l'initialisation de mon tableau')
    this.selectorButtons = element => {
      this.buttons = [...this.buttons,element] // à chaque boucle j'insère mes boutons dans mon tableau, remarque: on peut simplement faire un push(element) mais je trouve ça plus stylé
    };
  }

  selectInstrument(id) {
    // à faire: changement de style
    console.log(this.buttons[id])
  }
  state = {
    // données statiques, on fera une boucle par la suite
    instruments: [
      {
        name:"Bagpipes",
        img: 'Bagpipes-portrait.png',
        details: "yooo"
      },
      {
        name:"Bagpipes",
        img: 'Bagpipes-portrait.png',
        details: "yooo"
      },
      {
        name:"Bagpipes",
        img: 'Bagpipes-portrait.png',
        details: "yooo"
      },
    ]
  }

  render(){
    return (
      <StudioComponent>
        <Menu/>
        <h1 id="title">Mélodie</h1>
        <Grid centered columns={4}>
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
          <Grid.Row columns={4}>

            {this.state.instruments.map((intrument,i) =>(
              <button
              key={i} //à référencer quand on map du html (cf react)
              ref={this.selectorButtons} //ma référence me permet de cibler ce button pour récupérer des éléments de celui-ci
              onClick={() =>this.selectInstrument(i)} // quand je clique, je récupère mon button, à finir
              className="chooseInstrument-btn" >
                <img src={require(`../../assets/img/instruments/${intrument.img}`)}/>
              </button>
            ))}
          </Grid.Row>
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
    margin-top: 42px;
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
  .btn-instrument.mobile {
    width:32px;
    height:32px;
    border-radius:50%;
  }

  .studio-chose-instrument-items img{
    margin: auto;
    overflow:hidden;
  }
  .chooseInstrument-btn {
    width:64px;
    height:64px;
    border-radius: 50%;
    margin: 0 8px;
    cursor: pointer;
    border:0;
    padding: 12px;
    background: rgba(0,0,0,0.4);
    cursoir: pointer;
  }

  .chooseInstrument-btn img {
    height: 100%;
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
