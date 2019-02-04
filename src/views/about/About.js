
import React, {Component} from "react";
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Colors from '../../styles/colors';
import Paragraph from "../../components/paragraph/Paragraph";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import Footer from "../../components/footer/Footer";
import ExoButton from "../../components/button/Button";
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/animation.css';


//IMAGES
import thumbnail from '../../assets/img/piano.jpg';
import title from '../../assets/img/fiche_title.svg';


// STATE

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'About',
      pronunciation: '[əˈbaʊt]',
      width: window.innerWidth,
      text: 'Le concept de “Production exotique” consiste à explorer et découvrir le potentiel d’instruments méconnus, soi-disant exotiques. Grâce à notre studio faites sortir vos âmes de musiciens comme les nombreux artistes qui expérimentent encore, de nos jours ces instruments peu communs. Jouez avec la mélodie, les accords, les basses et les percussions avec notre sélection d’instruments pour transformer vos musiques pop préférées du moment en une toute nouvelle expérience musicale, laissez-vous porter par cette richesse de savoir et de son.',
      secondParagraph: {
        title: "Prenez en main les instruments et créez votre propre son",
        text:"Le concept de “Production exotique” consiste à explorer et découvrir le potentiel d’instruments méconnus, soi-disant exotiques. Grâce à notre studio faites sortir vos âmes de musiciens comme les nombreux artistes qui expérimentent encore, de nos jours ces instruments peu communs. Jouez avec la mélodie, les accords, les basses et les percussions avec notre sélection d’instruments pour transformer vos musiques pop préférées du moment en une toute nouvelle expérience musicale, laissez-vous porter par cette richesse de savoir et de son.",
        direction: "left"
      },
    }


  }

  // METHODS

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  // RENDER

  render() {


    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <AboutComponent>
        <Header>
          <Menu/>
          <div className="heading">
            <div className="pronunciation">{this.state.pronunciation}</div>
            <div className="title">{this.state.title}</div>
          </div>
          <ScrollAnimation animateIn='fade-left'>
            <div className="about-section">
              <Paragraph text={this.state.text} direction="left"/>

            </div>
          </ScrollAnimation>

          <div className="header-thumbnail">
              <Thumbnail image={thumbnail}/>
          </div>

        </Header>

        <ScrollAnimation animateIn={`paragraph-${this.state.secondParagraph.direction}`} duration={0.6} delay={0.2}>
          <Secondsection>
            <div className="text-rectangle"></div>
                <Paragraph title={this.state.secondParagraph.title} text={this.state.secondParagraph.text}
                           direction={this.state.secondParagraph.direction}/>
                <ExoButton link={'/studio'} text={'Decouvrir le studio'}/>
          </Secondsection>
        </ScrollAnimation>


        <Footer/>

      </AboutComponent>
    )
  }
}


// STYLES

const AboutComponent = styled.div
  `
  width: 100%;
  height: auto;
  background: rgb(13,0,35);
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
  overflow: hidden;
  position: relative;
  
  @media(max-width: 560px) {
    height: auto;
  }
 

  `


const Header = styled.div`  
 width: 100%;
  height: 100vh;
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
  
  .pronunciation {
    font-size: 5rem;
    color: ${Colors.tertiary};
  }
  
  .header-thumbnail {
    position: absolute;
    right: 45%;
    top: 35%;
    
  }
  
  .about-section {
    width: 60%;
    margin: 3rem 3rem;
  }
  
  
  
  
  @media(max-width: 560px) {
  height: 120vh;
  .heading {
    background: none;
  }
  .about-section {
    
  width: 70%;
  margin: 10rem 1rem 3rem 5rem;
    }
  
    
`
;

const Secondsection = styled.div`  
  width: 100%;
  height: 100vh;
  padding: 8rem;
  position: relative;
  z-index: 0;
  
  .text-rectangle {
  width: 450px;
  height: 30px;
  background-color: ${Colors.fourth};
  position: absolute;
  right: 42rem;
  top: 11rem;
  z-index: -1;
 
}
  
  @media(max-width: 560px) {
    padding: 2rem;
    height: 120vh;
  }
  

`





export default About;
