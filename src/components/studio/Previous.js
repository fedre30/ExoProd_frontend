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
                étape précédente
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
button {
    outline: 0;
}
@media screen and (min-width: 768px){
    top:calc(3vw + 60px);
    left:50%;
    transform: translateX(-50%);
}
@media screen and (min-width: 920px){
    top:5vw;
}
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

img:first-child {
    width:20px;
    height: 20px;
    opacity:0.7;
}

img:first-child{
    animation: rotating 4s linear infinite;
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
    text-transform: uppercase;
    cursor: pointer;
    font:${Fonts.subtitle};
    border:0;
    font-size: 12px;
    background:0;
    font-weight:bolder;
    color:${Colors.text};
    :after{
        background-image:url('${arrowDown}');
        width: 16px;
        content: " ";
        position: absolute;
        right: -24px;
        height:16px;
        transform:rotate(180deg);
        line-height: normal;
        animation: up 1.5s linear infinite;
    }
    @keyframes up{
        0% {
         bottom:-12px;
         opacity: 0;
        }
        10%{
         opacity: 0;
        }
        50%{
        opacity:1;
        }
        90% {
        opacity:0;
        }
        100% {
        bottom: 12px;
        opacity:0;
        }
    }
}
`
export default Previous;