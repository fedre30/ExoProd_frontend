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
const Responsive = styled.div`
position:absolute;
z-index: 999999;
top: calc(10vh + 10px);
left:50%;
transform:translateX(-50%);
button {
    outline: 0;
}

@media screen and (min-width: 768px){
    top:calc(3vw + 60px);
    top:14vh;
    left:50%;
    transform: translateX(-50%);
}
@media screen and (min-width: 920px){
    top:5vw;
}

`
const ButtonMobileVTwo = styled.button`
display:block;
text-transform: uppercase;
cursor: pointer;
font:${Fonts.text};
border:0;
font-size: 12px;
background:0;
font-weight: bolder;
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
    font-size: 14;
}
}
`

const ButtonDesktop = styled.button`
display:none;
@media screen and (min-width: 768px){
    display:block;
    text-transform: uppercase;
    cursor: pointer;
    font:${Fonts.subtitle};
    border:0;
    font-size: 14px;
    background:0;
    font-weight: 400;
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
}
`
export default Previous;