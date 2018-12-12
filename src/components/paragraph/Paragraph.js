import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import PropTypes from "prop-types";

const Paragraph = ({title, text}) => (
  <ParagraphComponent>
    <h3 className="title">{title}</h3>
    <p className="text">{text}</p>
  </ParagraphComponent>
);

Paragraph.propTypes = {

  title: PropTypes.string,
  text: PropTypes.string


};

const ParagraphComponent = styled.div
  `
  width: 100%;
  .title {
    font-weight: 900;
    font-size: 3rem;
  }
  
  .text {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }


  
  `
;


export default Paragraph;
