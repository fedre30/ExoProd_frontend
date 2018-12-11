import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

class Thumbnail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ThumbnailComponent>

      </ThumbnailComponent>
    );
  }
}

const ThumbnailComponent = styled.div
  `
  width: 100%;
  display: flex;
  padding: 2rem 1rem;
  .logo {
    margin: 1.2rem 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: ${Colors.text};
    font-family: ${Fonts.logo};
    
  }
  .menu-list{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem 2rem;
  
  }
  
  .menu-item {
    list-style: none;
    margin: 1rem 3rem;
    
    
  }
  
  a {
  color: ${Colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  }
  
 @media(max-width: 560px) {
   
  .logo {
  margin:  0 auto;
  text-align: center;
  }
 }
  
  `
;


export default Thumbnail;
