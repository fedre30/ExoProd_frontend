import React from 'react';
import '../../styles/animation.css';
import Fonts from '../../styles/fonts';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Modal = ({modal,handlerModal}) => {
    return (
        <CSSTransition
        in={modal}
        timeout={300}
        classNames="modal"
        unmountOnExit
        >
        <ModalComponent >
            <div className="modal-wrap">
                <h3>Comment jouer ?</h3>
                <ul>
                    <li>Vous avez la possibilité de modifier 4 pistes: mélodie, accords, basse et percussions.</li>
                    <li>Choisissez un nouvel instrument pour chaque piste afin de trouver le son que vous cherchez.</li>
                    <li>Ecoutez le résultat final et amusez-vous à mixer les pistes.</li>
                </ul>
                <button onClick={handlerModal}>J'ai compris</button>
            </div>
        </ModalComponent>
        </CSSTransition>
    )
};

const ModalComponent = styled.div`
position: fixed;
filter: blur(0px);
height: 100vh;
width: 100%;
z-index: 99999999;
background: rgba(0,0,0,0.4);

.modal-wrap {
    position: relative;
    top: 50%;
    left: 50%;
    border-radius: 8px;
    transform: translate(-50%,-50%);
    height: 50vh;
    width: 80%;
    font-style:${Fonts.subtitle};
    max-width: 600px;
    max-height: 320px;
    background: rgb(95,6,163);
    background: linear-gradient(218deg, rgba(95,6,163,1) 0%, rgba(168,21,221,1) 100%);
    border: 1px solid rgba(255,255,255);
}
@media screen and (min-width: 768px) {
    .modal-wrap {
        font-size: 16px;
    } 
}
.modal-wrap li,
.modal-wrap h3 {
    color: white;
    box-sizing: border-box;
}
.modal-wrap h3 {
    margin: 24px 0;
    font-weight: bolder;
}
@media screen and (min-width: 768px) {
    .modal-wrap h3{
        font-size: 24px;
    } 
}
ul {
    margin: 0 24px;
}

ul li{
    list-style-type: decimal;
    font-weight: 400;
}
li {
    margin: 4vh 0;
}

@media screen and (min-width: 768px) { 
    ul {
       padding-top: 4px;
       margin: 0 48px;
    }
    li {
        margin: 5% 0;
    }
}
.modal-wrap h3 {
    fonts: ${Fonts.title};
    text-align: center;
    font-weight: bolder;
}
.modal-wrap button {
    cursor: pointer;
    margin:0 auto;
    color: #5B09BA;
    text-transform: uppercase;
    font-weight: 900;
    outline: 0;
    border: 0;
    border-radius: 40px;
    padding: 8px 24px;
    position:absolute;
    left: 50%;
    bottom: -24px;
    transform: translate(-50%, -8px);
}
@media screen and (min-width: 768px) {
    .modal-wrap button {
        border-radius: 40px;
        padding: 16px 48px;
        font-size: 14px;
        transform: translate(-50%, 0px);
    }
}
`;

export default Modal;