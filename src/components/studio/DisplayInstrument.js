import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/animation.css';
import ovale from '../../assets/img/ovale-dotted.png';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';


const DisplayInstrument = ({isSelected,showInstrument,exit,enter,name,img}) => {
return(
  <DisplayInstrumentComponent>
  <div className="studio-display-container">
  <div className="studio-display-instrument">
    <CSSTransition
      in={!isSelected}
      timeout={300}
      unmountOnExit
      onExit={exit}
      classNames='instrument'
    >
      <p className="studio-display-instrument-instruction">Choisissez un instrument</p>
    </CSSTransition>
        
    <CSSTransition
      in={showInstrument}
      timeout={300}
      unmountOnExit
      onEntering={enter}
      onExit={exit}
      classNames='instrument'>
        <div className='studio-display-instrument_selected'>
          <h2>{name}</h2>
          <img src={img}/>
        </div>  
    </CSSTransition>

    </div>
</div>
<img className="studio-display-instrument-img" src={ovale} alt=''/>
</DisplayInstrumentComponent>
)
};
DisplayInstrument.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  showInstrument:  PropTypes.bool.isRequired,
  enter: PropTypes.func.isRequired,
  exit:  PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
const DisplayInstrumentComponent = styled.div
  `
  position:relative;
  .studio-display-container {
    position:relative;
    margin-top: 32px;
    margin-bottom: 12px;
    width:100%;
    height:100%;
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
    flex-direction:column;
    overflow:hidden;
    justify-content:center;
  }
  .studio-display-instrument .studio-display-instrument-img{
    overflow:visible;
  }
  .studio-display-instrument-instruction {
    color: ${Colors.text};
    font-family: ${Fonts.title};
    font-size: 16px;
    position: relative;
    z-index:1;
  }
  .studio-display-instrument-img {
    position:absolute;
    z-index:0;
    width:284px;
    height:284px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
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


export default DisplayInstrument;