import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import '../../styles/animation.css';
import ovale from '../../assets/img/ovale-dotted.png';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import leftarrow from '../../assets/img/left-arrow.png';
import rightarrow from '../../assets/img/right-arrow.png';

import { Link } from "react-router-dom";
class DisplayInstrument extends Component{

state = {
  index : 0,
}

swap = (index) => () => {this.setState({index})};

render(){
  const {isSelected,showInstrument,exit,enter,name,img,details,id} = this.props;

  return(
    <DisplayInstrumentComponent>
    <div className="studio-display-container">
      <div className="studio-display-instrument">
        <CSSTransition
          in={!isSelected}
          timeout={300}
          unmountOnExit
          onExit={exit}
          classNames='instrument'>
          <p className="studio-display-instrument-instruction">Choisissez un instrument</p>
        </CSSTransition>
            
        <CSSTransition
          in={showInstrument}
          timeout={300}
          unmountOnExit
          onEntering={enter}
          onExit={exit}
          classNames='instrument'>

            <div className="studio-display-instrument_selected-container">
            <CSSTransition
            in={this.state.index !== 0}
            timeout={500}
            unmountOnExit
            classNames='button'>
            <button className="left" onClick={this.swap(0)}>
              <img src={leftarrow} alt="previous" />
            </button>
            </CSSTransition>

            <CSSTransition
            in={this.state.index === 0}
            timeout={500}
            unmountOnExit
            classNames='button'>
            <button className="right" onClick={this.swap(1)}>
              <img src={rightarrow} alt="next" />
            </button>
            </CSSTransition>

              <div style={{left:`${this.state.index*-100}%`}} className="studio-display-instrument_selected-wrapper">
                <div className='studio-display-instrument_selected'>
                  <h2>{name}</h2>
                  <div className='studio-display-instrument_selected-img'>
                    <img src={img} alt='instrument'/>
                  </div>
                </div>          
                <div className='studio-display-instrument_selected'>
                  <h2>{name}</h2>
                  <ul>
                    <li className="studio-display-instrument_list"><b>Type:</b> {details.type}</li>
                    <li className="studio-display-instrument_list"><b>Forme:</b> {details.shape}</li>
                    <li className="studio-display-instrument_list"><b>Origine:</b> {details.origin}</li>
                    <li className="studio-display-instrument_list"><b>Année:</b> {details.year}</li>
                  </ul>
                  <Link
                    className="studio-display-instrument-link"
                    to={{
                      pathname: `/instrument/${id}`,
                      state: { id }
                    }}
                  >
                  En savoir plus
                  </Link>
                </div>
              </div>
            </div>
        </CSSTransition>
      </div>
  </div>
    <img className="studio-display-instrument-img" src={ovale} alt=''/>
  </DisplayInstrumentComponent>
  )
}

};
DisplayInstrument.defaultProps = {
  isSelected: false,
  showInstrument: false,
  details: '',
  text:'',


}

const DisplayInstrumentComponent = styled.div`
  position: relative;
  .studio-display-container {
    position: relative;
    margin-top: 32px;
    margin-bottom: 12px;
    width: 100%;
    height: 100%;
  }
  .studio-display-instrument {
    position: relative;
    z-index: 1;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(100,100,100,0.39);
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
  }
  .studio-display-instrument .studio-display-instrument-img{
    overflow: visible;
  }

  .studio-display-instrument-img {
    position: absolute;
    z-index: 0;
    width: 244px;
    height: 244px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @media screen and (min-width:768px) {
    .studio-display-instrument {
      min-width: 320px;
      min-height: 320px;
      width:20vw;
      height:20vw;
    }
    .studio-display-instrument-img {
      min-width: 400px;
      min-height: 400px;
      width:24vw;
      height:24vw;
    }        
  }


  .studio-display-instrument-instruction {
    color: ${Colors.text};
    font-family: ${Fonts.text};
    font-size: 12px;
    position: relative;
    z-index: 1;
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    .studio-display-instrument-instruction {
      font-size: 16px;
    }    
  }
  .studio-display-instrument_selected-container{
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .studio-display-instrument_selected-wrapper{
    max-width: 100%;
    margin: 0 auto;
    flex-wrap: nowrap;
    display: flex;
    height: 100%;
    align-items: center;
    position: relative;
    transition: all 0.6s cubic-bezier(.6,.04,.46,.97);
  }
  .studio-display-instrument_selected {
    min-width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;

  }
  .studio-display-instrument_selected h2,
  .studio-display-instrument_selected p,
  .studio-display-instrument-link {
    color: ${Colors.text};
    font-family: ${Fonts.title};
  }
  .studio-display-instrument_list {
    text-align:left;
    font-family: ${Fonts.text};
    color: ${Colors.text};
    font-size: 12px;
    margin-left: 16px;
  }
  @media screen and (min-width: 768px) {
    .studio-display-instrument_list { 
      margin-left: 0;
    }
  }
  .studio-display-instrument_selected h2 {
    font-weight: 400;
    font-size: 18px;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    .studio-display-instrument_selected h2 {
      font-size: 20px;
    }
  }
  .studio-display-instrument_selected p {
    font-size: 12px;
    margin: 0 20%;
    text-align: center;
    line-height:1.1
  }
  @media screen and (min-width: 768px) {
    .studio-display-instrument_selected p {
      font-size: 14px;
      line-height: 1.3;
      text-align: justify;
    }    
  }
  .studio-display-instrument-link {
    padding: 4px 16px;
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 50px;
    font-weight: 400;
    font-size: 12px;
    transition: all 0.4s ease;
  }
  .studio-display-instrument-link:hover {
    background: rgba(255,255,255,1);
    border: 1px solid rgba(255,255,255,1);
    color: purple;
    transition: all 0.4s ease;
  }

  .studio-display-instrument_selected-img {
    width:60%;
    height:60%;
    max-width: 200px;
    max-height: 200px;
  }
  .studio-display-instrument_selected-img img {
    width:100%;
  }
  @media screen and (min-width:768px) {
    .studio-display-instrument_selected {
      width: 80%;
    }
    .studio-display-instrument_selected-img {
      width:50%;
      height:50%;
    }

  }
  .studio-display-instrument_selected-container .right{
    right: 0;
  }
  .studio-display-instrument_selected-container .left{
    left: 0;
  }
  .studio-display-instrument_selected-container .left,
  .studio-display-instrument_selected-container .right{
    background:none;
    top: 50%;
    position: absolute;
    outline: 0;
    border: 0;
    z-index: 10;
    cursor: pointer;
    transform: translateY(-50%);
    padding: 8px;
  }
  .studio-display-instrument_selected-container .right img,
  .studio-display-instrument_selected-container .left img {
    width: 12px;
  }
  @media screen and (min-width: 768px)
  {
    .studio-display-instrument_selected-container .right{
      margin-right: 5%;
    }
    .studio-display-instrument_selected-container .left{
      margin-left: 5%;
    }

    .studio-display-instrument_selected-container .right img,
    .studio-display-instrument_selected-container .left img {
      width: 16px;
    }   
  }
  `;


export default withRouter(DisplayInstrument);