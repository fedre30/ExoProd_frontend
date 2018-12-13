import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Colors from '../../styles/colors';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }


  render() {
    return (
      <FooterComponent>

      </FooterComponent>
    );
  }
}

const FooterComponent = styled.div
  `
  width: 100%;
  height: 3rem;
  display: flex;
  padding: 2rem 1rem;
  background-color: ${Colors.footer};
  position: absolute;
  bottom: 0;
  

  
  `
;


export default Footer;
