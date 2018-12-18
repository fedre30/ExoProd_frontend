import React, {Component} from "react";
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


//IMAGES
import backgroundImage from '../../assets/img/header.svg';
import triangle from '../../assets/img/Barres.png';
import thumbnail from '../../assets/img/background_home.jpg';
import Footer from "../../components/footer/Footer";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstParagraph: {
        title: "Lorem",
        text: "lorem ipsum",
        direction: "left"
      },
      secondParagraph: {
        title: "Lorem",
        text: "lorem ipsum",
        direction: "right"
      },
      markers: [
        { markerOffset: -25, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
        { markerOffset: -25, name: "La Paz", coordinates: [-68.1193, -16.4897] },
        { markerOffset: 35, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
        { markerOffset: 35, name: "Santiago", coordinates: [-70.6693, -33.4489] },
        { markerOffset: 35, name: "Bogota", coordinates: [-74.0721, 4.7110] },
        { markerOffset: 35, name: "Quito", coordinates: [-78.4678, -0.1807] },
        { markerOffset: -25, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
        { markerOffset: -25, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
        { markerOffset: 35, name: "Paramaribo", coordinates: [-55.2038, 5.8520] },
        { markerOffset: 35, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
        { markerOffset: -25, name: "Caracas", coordinates: [-66.9036, 10.4806] },
      ]
    }

  }

  // METHODS

  handleClickMarker(marker, e) {
    console.log("Marker data: ", marker)
  }


  // RENDER

  render() {
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
        <Secondsection>
          <Grid columns={12}>
            <Grid.Column width={5}>
              <div className="triangle">
                <img src={triangle} alt=""/>
              </div>
            </Grid.Column>
            <Grid.Column width={7}>
              <Paragraph title={this.state.secondParagraph.title} text={this.state.secondParagraph.text}
                         direction={this.state.secondParagraph.direction}/>
            </Grid.Column>
          </Grid>
        </Secondsection>
        <Firstsection>
          <Grid columns={12}>
            <Grid.Column width={7}>
              <Paragraph title={this.state.firstParagraph.title} text={this.state.firstParagraph.text}
                         direction={this.state.firstParagraph.direction}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Thumbnail image={thumbnail}/>
            </Grid.Column>
          </Grid>
        </Firstsection>
        <Sectionmap>
          <div className="heading">
            <h4 className="heading-title">lorem ipsum</h4>
          </div>
          <div className="map">
            <ComposableMap projectionConfig={{
              scale: 250,
              rotation: [-10,0,0],
            }} width={1400} height={800} projection="robinson">
              <ZoomableGroup>
                <Geographies geography={geography}>
                  {(geographies, projection) => geographies.map(geography => (
                    <Geography key={ geography.id } geography={ geography } projection={ projection } style={{
                      default: {
                        fill: '#CEA6E9',
                        stroke: "#570AB8",
                        strokeWidth: 0.3,
                        outline: "none"
                      },
                      hover: {
                        fill: Colors.tertiary
                      },
                      pressed: {
                        fill: Colors.tertiary
                      }
                    }}/>
                  ))}
                </Geographies>
                <Markers>
                  {this.state.markers.map((marker, i) => (
                    <Marker
                      key={i}
                      marker={marker}
                      style={{
                        default: { fill: Colors.tertiary },
                        hover: { fill: "#FFFFFF" },
                        pressed: { fill: "#FFFFFF" },
                      }}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={10}
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
        <Footer/>

      </HomeComponent>
    )
  }
}

const HomeComponent = styled.div
  `
  width: 100%;
  height: 400vh;
  background: rgb(13,0,35);
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
  overflow: hidden;
  position: relative;
 

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

const Sectionmap = styled.div`  
  width: 100%;
  height: 100vh;
  
  .heading {
    margin-bottom: 3rem;
  }
  
  .heading-title{
    font-size: 3rem;
    color: ${Colors.text};
    text-align: right;
    margin-right: 3rem;
  }
  
  .map {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
 
  }
  
  
 
  @media(max-width: 560px) {
    
  }
  

`


export default Home;
