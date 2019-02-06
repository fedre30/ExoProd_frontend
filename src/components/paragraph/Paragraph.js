import React from "react";
import styled from "styled-components";
import Colors from '../../styles/colors';
import PropTypes from "prop-types";



const Paragraph = ({title, text, direction}) => (
  <ParagraphComponent>
      <h3 className={`title  ${direction === 'left' ? 'left' : 'right'}`}>{title}</h3>
      <p className={`text  ${direction === 'left' ? 'left' : 'right'}`}>{text}</p>
  </ParagraphComponent>
);


Paragraph.propTypes = {

  title: PropTypes.string,
  text: PropTypes.string,
  direction: PropTypes.string


};

const ParagraphComponent = styled.div
  `
  .title {
    font-weight: 600;
    font-size: 3.5rem;
    color: ${Colors.text};
    margin-bottom: 5rem;
  }
  
  .text {
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: ${Colors.text};
    font-weight: 200;
    margin-bottom: 3rem;
  }
  
  .right {
    text-align: right;
  }
  
  .left {
    text-align: left;
  }
  
  @media(max-width: 560px) {
    .title {
    font-size: 2.5rem;
    text-align: left;
    }
    .text {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    }
  }


  
  `
;


export default Paragraph;
