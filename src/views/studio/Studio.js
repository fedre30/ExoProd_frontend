import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import ovale from '../../assets/img/ovale-dotted.png'
import ControlePlayer from "../../components/studio/ControlePlayer";
import protosound from '../../assets/proto-sound/silence-voice.mp3';
import { Grid, Responsive } from 'semantic-ui-react';
//import Button from '../../components/studio/Button';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';


class Studio extends Component {
  constructor(props) {
    super(props);

    this.buttons = []; //initialisation de mes buttons

    // je sélectionne tous mes boutons ('équivalent d'un querySelectorAll('button') grace à l'attribut ref que j'ai placé soigneusement dans chaque bouton
    // ainsi qu'a l'initialisation de mon tableau')
    this.selectorButtons = element => {
      this.buttons = [...this.buttons,element] // à chaque boucle j'insère mes boutons dans mon tableau, remarque: on peut simplement faire un push(element) mais je trouve ça plus badass
    };
  }
  state = {
    isSelected: false,
    select:{
      name:'',
      img:'',
      details:'',
    },
    // données statiques, on fera une boucle par la suite
    instruments: [
      {
        name:"Bag pipes",
        img: 'Bagpipes-portrait.png',
        details: "yooo"
      },
      {
        name:"Nani",
        img: 'file.png',
        details: "yooo"
      },
      {
        name:"Latin Percu",
        img: 'latin-percu.png',
        details: "yooo"
      },
      {
        name:"Taiko",
        img: 'taiko.png',
        details: "yooo"
      },
    ]
  }

  removeButtonClasse(index,className){
    if(this.buttons[index].classList.contains(className)) {
      this.buttons[index].classList.remove(className)
    }
  }

  selectInstrument(id) {
    // à faire: changement de style
    const current_btn = this.buttons[id];
    if(current_btn.classList.contains('selected')) {
      console.log('this button is alreated selected')
      return false;
    }

    this.buttons.map((button,i) => {
      if(current_btn === button) {
        button.classList.add('selected')
        this.removeButtonClasse(i,'unselected')

        //j'insere mon instrument dans l'état select
        const name = this.state.instruments[id].name;
        const img = this.state.instruments[id].img;
        const details = this.state.instruments[id].details;
        this.setState({
          isSelected: true,
          select: {name,img,details}
        })
      } else {
        //du style css
        button.classList.add('unselected')
        this.removeButtonClasse(i,'selected')
      }
    })
  }


  render(){
    const {isSelected,select} = this.state;
    return (
      <StudioComponent>
        <Menu/>
        <h1 id="title">Mélodie</h1>
        <Grid centered >
          <Grid.Row centered columns={16} >
            <Grid.Column textAlign='center' mobile={16} tablet={8} computer={5}>
              <div className="studio-display-container">
                <div className="studio-display-instrument">
                {!isSelected ? (
                  <p className="studio-display-instrument-instruction">Choisissez un instrument</p>
                ):
                <div className='studio-display-instrument_selected'>
                  <h2>{select.name}</h2>
                  <img src={require(`../../assets/img/instruments/${select.img}`)}/>
                </div>
                }
                  <img className="studio-display-instrument-img" src={ovale}/>
                </div>
              </div>
              <h1 className="studio-title">{this.props.title}</h1>
              <h2 className="studio-artist">{this.props.artist}</h2>
              <ControlePlayer
              url={protosound}
              selected={this.state.isSelected}
              />
          </Grid.Column>
          <Grid.Column className="chooseInstrument-container" verticalAlign="middle" textAlign='center'  mobile={16} tablet={1} computer={1} >
            {this.state.instruments.map((intrument,i) =>(
              <button
              key={i} //à référencer quand on map du html (cf react)
              ref={this.selectorButtons} //ma référence me permet de cibler ce button pour récupérer des éléments de celui-ci
              onClick={() =>this.selectInstrument(i)} // quand je clique, je récupère mon button, à finir
              className={`chooseInstrument-btn`}
              >
                <img src={require(`../../assets/img/instruments/${intrument.img}`)}/>
              </button>
            ))}
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </StudioComponent>
    )
  }
};

const StudioComponent = styled.div
  `
  height:100vh;
  background: rgb(13,0,35);
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);

  #title {
    text-align:center;
    font-size: 18px;
    margin-top: 28px;
    margin-bottom:16px;
    color: ${Colors.text};
    font-family: ${Fonts.title};
  }
  .ui.button.studio-btn-audio.mobile {
    transition: all 0.3s ease;
    background-color: #741AB0;
    color:#FFFCF2;
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
  .studio-title,
  .studio-artist {
    color: ${Colors.text};
    font-family: ${Fonts.title};
    font-size:18px;
    font-weight:400;
    margin-bottom:0;
  }
  .studio-title{
    margin-top:44px;
  }
  .studio-artist {
    margin-top:0;
  }
  .studio-display-instrument {
    position:relative;
    z-index:1;
    width: 220px;
    height: 220px;
    border-radius:50%;
    background-color:rgba(100,100,100,0.39);
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .studio-display-instrument-img {
    position:absolute;
    z-index:0;
    width:284px;
    height:284px;
    transform:translate(-50%;-50%);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @media screen and (min-width:768px) {
    .studio-display-instrument {
      width: 320px;
      height: 320px;
    }
    .studio-display-instrument-img {
      width: 400px;
      height: 400px;
    }        
  }


  .studio-display-instrument-instruction {
    color: ${Colors.text};
    font-family: ${Fonts.title};
    font-size: 16px;
    position: relative;
    z-index:1;
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
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin: 0 8px;
    cursor: pointer;
    border: 0;
    padding: 12px;
    background-color: rgba(216,216,216,0.20);
    cursoir: pointer;
    transition: all 0.4s ease;
  }

  .chooseInstrument-btn.selected {
    background-color: rgba(216,216,216,0.4);
  }

  .chooseInstrument-btn.unselected {
    opacity:0.5;
  }
  .chooseInstrument-btn img {
    height: 100%;
  }
  .chooseInstrument-container {
    padding-top:12px;
  }
  @media screen and (min-width:768px){
    .chooseInstrument-container {
      padding-top:0;
      position: relative;
      top: 200px;
      transform: translateY(-50%);
    }
    .chooseInstrument-btn {
      width: 72px;
      height: 72px;
    }
    .chooseInstrument-btn:not(:first-child),
    .chooseInstrument-btn:not(:last-child)
     {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .chooseInstrument-btn:first-child,
    .chooseInstrument-btn:last-child
     {
      margin-left:-50%;
    }
  }
  .studio-display-instrument_selected {
    width:100%;
    height:80%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    position: relative;
    z-index:5;
  }
  .studio-display-instrument_selected h2 {
    color: ${Colors.text};
    font-family: ${Fonts.title};
    font-weight:400;
    font-size: 18px;
  }
  .studio-display-instrument_selected img {
    height:120px;
  }
  @media screen and (min-width:768px) {
    .studio-display-instrument_selected {
      height: 90%;
    }

    .studio-display-instrument_selected img {
      height:180px;
    }
  }
  `;

export default Studio;