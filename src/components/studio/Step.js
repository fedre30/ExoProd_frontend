import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

const Step = () => {
    return (
        <StepContainer >
            <div className="desktop">
            <ul className="type-list-container">
            <li className='type-list-items'>
                    <h2>Step</h2>
                </li>
                <li className='type-list-items actif'>
                    <label>1</label>
                    <h3>melodie</h3>
                </li>
                <li className='type-list-items'>
                    <label>2</label>
                    <h3>accord</h3>
                </li>
                <li className='type-list-items'>
                    <label>3</label>
                    <h3>basse</h3>
                </li>
                <li className='type-list-items'>
                    <label>4</label>
                    <h3>percussion</h3>
                </li>
                <li className='type-list-items'>
                    <label>5</label>
                    <h3>fin</h3>
                </li>
            </ul>
            </div>
        </StepContainer>
 
    )
};
const StepContainer = styled.div
`
display:none;
@media screen and (min-width: 768px){
    display: block;
    position: absolute;
    left:0;
    top:0;
    z-index: 100;
    height: 80vh;

    display:flex;
    align-items:center;
    min-height:400px;

    .type-list-container {
        height: 400px;
        display:flex;
        width: 20%;
        flex-direction: column;
        justify-content: space-around;
    }
    .type-list-items h3 {
        padding: 0;
        margin: 0;
    }
    .type-list-items h2 {
        opacity: 0.36;
    }
    .type-list-items {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 4px 0;
        width: 200px;
        display: flex;
        position: relative;
        z-index:1;
        left:0;
    }
    .type-list-items label{
        padding-left:40px;
        position: relative;
        z-index:1;
        color: ${Colors.text};
        font-family: ${Fonts.text};
        font-weight: 400;
    }
    .type-list-items h2 {
        padding-left: 20px;

    }
    .type-list-items h3{
        padding-right:40px;
        margin-left: 40px;
        line-height: normal;
        position: relative;
        z-index:1;
        color: ${Colors.text};
        font-family: ${Fonts.text};
        font-weight:400;
        text-transform: uppercase;
        width:50px;
        text-shadow: 0 2px 3px white;
    }
    .type-list-items:not(:first-child){
        opacity:0.4;
    }
    .type-list-items:not(:first-child)::before{
        content:'';
        position: absolute;
        width:80px;
        left:0;
        height:100%;
        background:blue;
        z-index:0;
        transition: all 0.3s ease;
    }
    .type-list-items.actif{
        opacity: 1;
    }
    .type-list-items.actif::before{
        width:100%;
    }
    .type-list-items:nth-child(2)::before {
        background: #19003C;
    }
    .type-list-items:nth-child(3)::before {
        background: #36017D;
    }
    .type-list-items:nth-child(4)::before {
        background: #5209B1;
    }
    .type-list-items:nth-child(5)::before {
        background: #6204AD;
    }
    .type-list-items:nth-child(6)::before {
        background: #940EFF;
    }
}
`
export default Step;