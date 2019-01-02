import React, {Component} from "react";
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import {Grid} from 'semantic-ui-react'
import Paragraph from "../../components/paragraph/Paragraph";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";


//IMAGES
import backgroundImage from '../../assets/img/header.svg';
import triangle from '../../assets/img/Barres.png';
import thumbnail from '../../assets/img/background_home.jpg';
import title from '../../assets/img/fiche_title.svg';



// STATE

class Instrument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Banjo',
      pronounciation: '[bɑ̃.dʒo]',
      type: 'Cordes frappées',
      shape: 'A queue ou droit',
      origin: 'Amérique du Nord',
      year: 'XVIIIe',
      description: {
        title: 'Un instrument pas seulement utilisé dans la musique country',
        text: 'lorem ipsum'
      },
      artists: [
        'Taylor Swift',
        'John Mayer'
      ],
      sound: {
        filePath: '',
        type: 'mp3'
      },
      videoUrl: ''
    }



  }

  // METHODS



  // RENDER

  render() {
    return (
      <CardComponent>
        <Header>
          <Menu/>
          <div className="heading">
            <div className="pronounciation">{this.state.pronounciation}</div>
            <div className="title">{this.state.title}</div>
          </div>
          <div className="header-thumbnail">
            <Thumbnail image={thumbnail}/>
          </div>
        </Header>




        <Footer/>

      </CardComponent>
    )
  }
}


// STYLES

const CardComponent = styled.div
  `
  width: 100%;
  height: 400vh;
  background: rgb(13,0,35);
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
  overflow: hidden;
  position: relative;
  
  @media(max-width: 560px) {
    height: 500vh;
  }
 

  `


const Header = styled.div`  
 width: 100%;
  height: 70vh;
  position: relative;
  
  .heading {
    width: 50%;
    background: url(${title}) no-repeat;
    background-size: 100% 100%;
    padding: 25vh 4rem;
  }

  .title {
    color: ${Colors.text};
    font-size: 4.7rem;
   
    
  }
  
  .pronounciation {
    font-size: 5rem;
    color: ${Colors.tertiary};
  }
  
  .header-thumbnail {
    position: absolute;
    right: 40%;
    top: 35%;
    
  }
  


`
;










export default Instrument;
