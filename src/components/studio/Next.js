import React from 'react';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import arrowDown from '../../assets/img/down-arrow.png';
const Next = ({handleIndex}) => {
    return(
        <Button onClick={handleIndex}>
            étape suivante
        </Button>
    )
};

const Button = styled.button
`
position: absolute;
bottom: 5.5vw;
left: 50%;
transform: translateX(-50%);
text-transform: uppercase;
cursor: pointer;
font:${Fonts.subtitle};
border:0;
font-size: 12px;
background:0;
font-weight:bolder;
color:${Colors.text};
outline: 0;
:after{
    background-image:url('${arrowDown}');
    width: 16px;
    content: " ";
    position: absolute;
    right: -16px;
    height:16px;
    line-height: normal;
    animation: down 1.5s linear infinite;
}
@keyframes down{
    0% {
     top:-12px;
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
    top: 12px;
    opacity:0;
    }
}
`
export default Next;