import React from "react";
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';


const HomeComponent = styled.div
  `
  width: 100%;
  height: 100vh;
  background: rgb(13,0,35);
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
  
  .title {
  
  }
  .subtitle {
  
  }
  

  `
;
const Home = () => (
  <HomeComponent>
    <Menu/>
    <h2 className="title">Une expérience musicale inédite</h2>
    <h3 className="subtitle">Découvrez des instruments uniques et amusez vous avec…</h3>
  </HomeComponent>
);


export default Home;
