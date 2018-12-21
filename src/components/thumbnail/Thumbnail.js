import React from "react";
import styled from "styled-components";
import Colors from '../../styles/colors';
import dotted from '../../assets/img/Oval.png';


const Thumbnail = ({image}) => (
  <ThumbnailComponent>
    <div className="outer-circle">
      <div className="inner-circle">
        <img src={image} alt=""/>
      </div>
    </div>
  </ThumbnailComponent>
)

const ThumbnailComponent = styled.div
  `
  width: 100%;
 height: 60vh;
 position: absolute;
 right: -300px;

 
 .outer-circle {
  width: 600px;
  height: 600px;
  background: url(${dotted}) no-repeat;
  background-size: 100%;
 
 }
 
 .inner-circle {
 width: 500px;
 height: 500px;
 margin: 0 auto;
 border-radius: 200vw;
 background-color: ${Colors.tertiary};
 transform: translateY(10%);
 overflow: hidden;

 
 img {
 width: 150%;
 overflow: hidden;
 }
 
 }
 
 @media(max-width: 560px) {
  position: static;
  left: -200px;
   .outer-circle {
    width: 300px;
    height: 300px;
 
 }
 
 .inner-circle {
    width: 200px;
    height: 200px;
    transform: translateY(25%);
 }
 
 }
  
  `
;


export default Thumbnail;
