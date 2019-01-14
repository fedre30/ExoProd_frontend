import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import {Grid} from 'semantic-ui-react'
import Paragraph from "../../components/paragraph/Paragraph";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Markers,
} from "react-simple-maps";
import geography from '../../utils/topoJSON';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/animation.css';


//IMAGES
import backgroundImage from '../../assets/img/header.svg';
import triangle from '../../assets/img/Barres.png';
import thumbnail from '../../assets/img/background_home.jpg';
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";


// STATE

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstParagraph: {
        title: "De nouvelles sonorités à travers les instruments d’autres pays du monde",
        text: " Le concept de “Production exotique” consiste à proposer une expérience de découverte d’instruments méconnus, soi-disant exotiques.\n" +
          "Analyser comment les styles et les instruments d’outre-mer ont eu un impact sur la musique actuelle et rester émerveillé de la quantité d’artistes qui experiment avec ces instruments pour enrichir leur musique.",
        direction: "left"
      },
      secondParagraph: {
        title: "Prenez en main les instruments et créez votre propre son",
        text: "Explorez le potentiel des ces instruments à travers vos chansons préférées, en modifiant la mélodie, les accords ou d’autres pistes avec l’instrument le plus souhaitable à votre goût.\n" +
          "Transformez un morceau pop actuel en un oeuvre qui va au-delà de toute limite spatio-temporelle pour un résultat époustouflant ! \n",
        direction: "right"
      },
      mapTitle: 'Voyagez à travers le monde pour un tout nouveau son',
      markers: [
        {markerOffset: -45, name: "Theremine", coordinates: [67.075459,37.933009], url: 'instrument'},
        {markerOffset: -45, name: "Sitar", coordinates: [78.962880, 20.593684], url: 'instrument'},
        {markerOffset: 55, name: "Dulcimer", coordinates: [12.340171, 62.278648], url: 'instrument'},
        {markerOffset: 55, name: "Banjo", coordinates: [-95.712891, 37.090240], url: 'instrument'},
        {markerOffset: 55, name: "Castanets", coordinates: [-3.749220, 40.463667], url: 'instrument'},
        {markerOffset: 55, name: "Koto", coordinates: [139.691706, 35.689487], url: 'instrument'},
      ],

      redirect: false,
      width: window.innerWidth,
    }

  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  // METHODS

  handleClickMarker(marker)  {
    const url = marker.url;
    this.props.history.push(url);
    window.scrollTo(0, 0);



  }


  // RENDER

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <HomeComponent>
        <Header>
          <Menu/>
          <div className="heading">
            <Grid columns={2}>
              <Grid.Column>
                <div className="title-container">
                  <h2 className="title">Un voyage musical intemporel</h2>
                  <h3 className="subtitle">Découvrez des instruments uniques et amusez-vous avec…</h3>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="header-image">
                  <img src={backgroundImage} alt="music notes and people"/>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </Header>
        <ScrollAnimation animateIn={`paragraph-${this.state.firstParagraph.direction}`} duration={0.6} delay={0.2}>
          <Firstsection>
            <Grid columns={12}>
              <Grid.Column width={5}>
                <div className="triangle">
                  <img src={triangle} alt=""/>
                </div>
              </Grid.Column>
              <Grid.Column computer={9} mobile={16}>
                <Paragraph title={this.state.firstParagraph.title} text={this.state.firstParagraph.text}
                           direction={this.state.firstParagraph.direction}/>
              </Grid.Column>
            </Grid>
          </Firstsection>
        </ScrollAnimation>
        <ScrollAnimation animateIn={`paragraph-${this.state.secondParagraph.direction}`} duration={0.6} delay={0.2}>
          <Secondsection>
            <Grid columns={12}>
              <Grid.Column computer={9} mobile={16}>
                <Paragraph title={this.state.secondParagraph.title} text={this.state.secondParagraph.text}
                           direction={this.state.secondParagraph.direction}/>
                <Button link={'/studio'} text={'Decouvrir le studio'}/>
              </Grid.Column>
              <Grid.Column width={5}>
                <Thumbnail image={thumbnail}/>
              </Grid.Column>
            </Grid>
          </Secondsection>
        </ScrollAnimation>
        <ScrollAnimation animateIn='map-enter' duration={0.6} delay={0.2 }>
            <Sectionmap>
            <div className="heading">
            <div className="heading-title">{this.state.mapTitle}</div>
            <div className="text-rectangle"></div>
            </div>
            <div className="map">
            <ComposableMap projectionConfig={{
            scale: 250,
            rotation: [-10, 0, 0],
          }} width={1400} height={800} projection="robinson">
            <ZoomableGroup>
            <Geographies geography={geography}>
            {(geographies, projection) => geographies.map(geography => (
              <Geography key={geography.id} geography={geography} projection={projection} style={{
                default: {
                  fill: '#CEA6E9',
                  stroke: "#570AB8",
                  strokeWidth: 0.3,
                  outline: "none"
                },
                hover: {
                  fill: '#CEA6E9',
                  stroke: "#570AB8",
                  strokeWidth: 0.3
                },
                pressed: {
                  fill: '#CEA6E9'
                }
              }}/>
            ))}
            </Geographies>
            <Markers>
            {this.state.markers.map((marker, i) => (
              <Marker
                key={i}
                marker={marker}
                onClick={() => {
                  this.handleClickMarker(marker)
                }}
                style={{
                  default: {fill: Colors.tertiary},
                  hover: {fill: "#FFFFFF"},
                  pressed: {fill: "#FFFFFF"},
                }}
              >
                <circle
                  cx={0}
                  cy={0}
                  r={30}
                  style={{
                    stroke: Colors.tertiary,
                    strokeWidth: 3,
                    opacity: 0.9,
                  }}
                />
                <text
                  textAnchor="middle"
                  y={marker.markerOffset}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fill: "#FFF",
                    fontSize: "20",
                    fontWeight: 'bold'
                  }}
                >
                  {marker.name}
                </text>
              </Marker>
            ))}
            </Markers>
            </ZoomableGroup>
            </ComposableMap>
            </div>
            </Sectionmap>

        </ScrollAnimation>
        <Footer/>

      </HomeComponent>
    )
  }
}


// STYLES

const HomeComponent = styled.div
  `
  width: 100%;
  height: auto;
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
  height: 100vh;
  .title-container {
    margin: 30vh 5rem;
    text-align: left;
    width: 100%;
    height: 6rem;
  }
  
  .heading {
    margin-top: 5rem;
  }
  
  .header-image {
    width: 100%;
    height: 100vh;
    
    img {
    width: 100%;
    }
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
   
   .title-container {
    margin-top: 40vh;
    padding: 0;
    margin-left: 2rem;
   }
   
    .title {
      width: 90vw;
      margin: 0;
      font-size: 2.2rem;
      line-height: 3rem;
      padding:  0;
      
    }
  .subtitle {
    font-size: 1.5rem;
    line-height: 2.5rem;
    width: 90vw;
    }
    
    .header-image {
      margin: 5vw 0 10vw -50vw;
      width: 100vw;
    }
  
  }
  
  

`
;


const Firstsection = styled.div`  
  width: 100%;
  height: 100vh;
  padding: 8rem;
  position: relative;
  z-index: 0;
  
  .triangle {
  width: 100%;
  position: absolute;
  left: -100px;
  top: 0;
  }
  
  @media(max-width: 560px) {
    padding: 2rem;
  }
  

`


const Secondsection = styled.div`  
  width: 100%;
  height: 100vh;
  padding: 8rem;
  position: relative;
  z-index: 0;
  
  @media(max-width: 560px) {
    padding: 2rem;
    height: 120vh;
  }
  

`

const Sectionmap = styled.div`  
  width: 100%;
  height: 100vh;
  
  .heading {
    margin-bottom: 3rem;
    position: relative;
  }
  
  .heading-title{
    font-size: 3rem;
    color: ${Colors.text};
    text-align: right;
    margin-right: 3rem;
    margin-bottom: 3rem;
  }
  
  .map {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
 
  }
  
  
.text-rectangle {
  width: 450px;
  height: 30px;
  background-color: ${Colors.fourth};
  position: absolute;
  right: 3rem;
  top: 1rem;
  z-index: -1;
 
}
  
  
 
  @media(max-width: 560px) {
  
  .heading-title {
    font-size: 1.7rem;
    line-height: 2rem;
    text-align: center;
    margin: 2rem 1rem;
  }
  
  .text-rectangle {
    display: none;
  }
  
  .map {
    display: none;
  }
    
  }
  

`


export default withRouter(Home);
