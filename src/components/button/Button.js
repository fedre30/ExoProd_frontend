import React from "react";
import styled from "styled-components";
import Colors from '../../styles/colors';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import dotted from '../../assets/img/button_bg.svg';

const Button = ({link, text}) => (
  <ButtonComponent>
    <div className="outer">
      <div className="inner">
        <Link to={link}><p className="button-text">{text}</p></Link>
      </div>
    </div>
  </ButtonComponent>
);


Button.propTypes = {

  link: PropTypes.string,
  text: PropTypes.string,


};

const ButtonComponent = styled.div
  `
   width: 300px;
 height: 150px;
 margin: 0 auto;
 

 
 .outer {
  width: 300px;
  height: 150px;
  background: url(${dotted}) no-repeat;
  background-size: 100%;
 
 }
 
 .inner {
 width: 250px;
 height: 75px;
 margin: 0 auto;
 border-radius: 100px;
 background-color: ${Colors.text};
 transform: translateY(25%);
 overflow: hidden;

 
 img {
 width: 150%;
 overflow: hidden;
 }
 
 }
  .button-text{
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
    font-weight: 900;
    margin-top: 2rem;
    
  }
  
  a {
  font-size: 1rem;
    color: ${Colors.tertiary};
  }
  
  @media(max-width: 560px) {
   
  }


  
  `
;


export default Button;
