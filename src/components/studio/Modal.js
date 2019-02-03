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
        <ModalComponent>
            <div className="modal-wrap">
                <h3>Comment jouer ?</h3>
                <ul>
                    <li>Vous avez la positibilité de modifier 4 parties: Mélodie, accord, basse...</li>
                    <li>Choisissez un nouvel instrument pour customiser votre morceaux selon vos envies</li>
                    <li>Ecoutez le résultat final et enregistrer votre propre création !</li>
                </ul>
                <button onClick={handlerModal}>J'ai compris</button>
            </div>
        </ModalComponent>
        </CSSTransition>
    )
};

const ModalComponent = styled.div`
position: fixed;
height: 100vh;
width: 100%;
z-index: 99999999;
background: rgba(0,0,0,0.4);
.modal-wrap {
    position: relative;
    top: 50%;
    left: 50%;
    background: red;
    border-radius: 8px;
    transform: translate(-50%,-50%);
    height: 50vh;
    width: 80%;
    background: rgb(95,6,163);
    background: linear-gradient(218deg, rgba(95,6,163,1) 0%, rgba(168,21,221,1) 100%);
    border: 1px solid rgba(255,255,255);
}
.modal-wrap li,
.modal-wrap h3 {
    color: white;
    margin: 24px 0;
    box-sizing: border-box;
}
ul {
    margin: 0 24px;
}
ul li{
    list-style-type: decimal;
    fonts: ${Fonts.subtitle};
}
li {
    margin: 2.5% 0;
}
.modal-wrap h3 {
    fonts: ${Fonts.title};
    text-align: center;
}
.modal-wrap button {
    cursor: pointer;
    margin:0 auto;
    outline: 0;
    border: 0;
    border-radius: 40px;
    padding: 8px 24px;
    position:absolute;
    left: 50%;
    bottom: -24px;
    transform: translate(-50%, -8px);
}
`;

export default Modal;