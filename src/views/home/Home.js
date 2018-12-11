import React from "react";
import styled from 'styled-components';


const HomeComponent = styled.div
  `
  background-color: red;
  
  `
;
const Home = () => (
  <HomeComponent>
    <h1>Homepage</h1>
  </HomeComponent>
);


export default Home;
