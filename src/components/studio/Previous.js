import React from 'react';
import '../../styles/animation.css';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import arrowDown from '../../assets/img/down-arrow.png';
import { CSSTransition } from 'react-transition-group';
const Previous = ({previous,index}) => {
    return(
        <CSSTransition
        in={index !== 0}
        timeout={500}
        classNames="scale"
        unmountOnExit
        >
        <Responsive>
            <ButtonMobile onClick={previous}>
                <img src={require('../../assets/img/back.png')} alt='back' />
                <img style={{position:'absolute'}} src={require('../../assets/img/mini-ovale-dotted.png')} alt='' />
            </ButtonMobile>
            <ButtonDesktop onClick={previous}>
                étape précente
            </ButtonDesktop>
        </Responsive>
        </CSSTransition>
    )
};
const Responsive = styled.div
`
position:absolute;
z-index: 999999;
top:calc(50% - 200px);
left:15vw;

`
const ButtonMobile = styled.button
`
position: relative;
cursor: pointer;
border: 1px solid white;
background: none;
border:0;
border-radius: 50%;
display:flex;
align-items:center;
justify-content: center;
outline: 0;

img:first-child {
    width:20px;
    height: 20px;
    opacity:0.4;
}

img:first-child{
    animation: rotating 3s linear infinite;
}


@keyframes rotating {
   
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(-360deg);
      -moz-transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
      -o-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
@media screen and (min-width: 768px){
    display:none;
}
`
const ButtonDesktop = styled.button
`
display:none;
@media screen and (min-width: 768px){
    display:block;
}
`
export default Previous;