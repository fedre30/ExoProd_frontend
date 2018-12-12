import React from "react";
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import backgroundImage from '../../assets/img/background_home.jpg';


const Home = () => (
  <HomeComponent>
    <Header>
      <Menu/>
      <div className="title-container">
        <h2 className="title">Une expérience musicale inédite</h2>
        <h3 className="subtitle">Découvrez des instruments uniques et amusez vous avec…</h3>
      </div>
    </Header>
  </HomeComponent>
);


const HomeComponent = styled.div
  `
  width: 100%;
  height: 500vh;
  background: rgb(13,0,35);
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
  overflow: hidden;
 

  `


  const Header = styled.div `  
 width: 100%;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat;
  background-size: 100% 100%;
  .title-container {
    margin: 30vh auto;
    text-align: center;
    width: 100%;
    height: 6rem;
    
    
  }
  .title {
    color: ${Colors.text};
    font-family: ${Fonts.title};
    text-transform: uppercase;
    font-size: 4.58rem;
    margin-bottom: 3.5rem;
  }
  .subtitle {
    color: ${Colors.text};
    font-family: ${Fonts.subtitle};
    font-size: 2.3rem;
    font-weight: 200;
  }
  
  @media(max-width: 560px) {
   .header {
    background-size: cover;
   }
   
    .title {
    width: 70%;
   
    font-size: 2.2rem;
    margin-bottom: 3.5rem;
    line-height: 3rem;
    padding:  0 0 0 4rem;
  }
  .subtitle {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  
  }

`
;


export default Home;
