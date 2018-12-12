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
        <div className="outer-circle">
          <div className="inner-circle">

          </div>
        </div>
      </ThumbnailComponent>
    );
  }
}

const ThumbnailComponent = styled.div
  `
  width: 100%;
 height: 40vh;
 
 .outer-circle {
  width: 100%;
 }
 
 .inner-circle {
 
 }
  
  `
;


export default Thumbnail;
