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
            <ButtonMobileVTwo onClick={previous}>
                étape précédente
            </ButtonMobileVTwo>
            {/*<ButtonMobile onClick={previous}>
                <img src={require('../../assets/img/back.png')} alt='back' />
                <img style={{position:'absolute'}} src={require('../../assets/img/mini-ovale-dotted.png')} alt='' />
            </ButtonMobile>-->*/}
            <ButtonDesktop onClick={previous}>
                étape précédente
            </ButtonDesktop>
        </Responsive>
        </CSSTransition>
    )
};
// to ButtonMobile, replace top to calc(50% - 200px)
// and left: 15vw
// remove transform
const Responsive = styled.div
`
position:absolute;
z-index: 999999;
top:calc(14vh);
left:50%;
transform:translateX(-50%);
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
const ButtonMobileVTwo = styled.button
`
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
@media screen and (min-width: 768px){
    display:none;
}
@keyframes up{
    0% {
     bottom:-24px;
     opacity: 0;
    }
    10%{
     opacity: 0;
    }
    50%{
    opacity:0.7;
    }
    90% {
    opacity:0;
    }
    100% {
    bottom: 12px;
    opacity:0;
    }
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
    position: absolute;
    animation: up 2s linear infinite;
}


@media screen and (min-width: 768px){
    display:none;
}
@keyframes up{
    0% {
     bottom:-24px;
     opacity: 0;
    }
    10%{
     opacity: 0;
    }
    50%{
    opacity:0.7;
    }
    90% {
    opacity:0;
    }
    100% {
    bottom: 12px;
    opacity:0;
    }
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