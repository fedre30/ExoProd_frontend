import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import {Grid, Button} from 'semantic-ui-react';
import Cover from 'react-video-cover';
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
import { Motion, spring } from "react-motion"
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/animation.css';
import Footer from "../../components/footer/Footer";
import ExoButton from "../../components/button/Button";



//IMAGES
import backgroundImage from '../../assets/img/header.svg';
import triangle from '../../assets/img/Barres.png';
import thumbnail from '../../assets/img/background_home.jpg';
import fingers from '../../assets/img/touch-and-scroll.png';


// INSTRUMENTS

import Instruments  from '../../helpers/api';

//VIDEO
import bgVideo from '../../assets/video/exo.mp4';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstParagraph: {
        title: "De nouvelles sonorités à travers les instruments d’autres pays du monde",
        text: " Le concept de “Production exotique” consiste à proposer une expérience de découverte d’instruments méconnus, soi-disant exotiques.\n" +
          "Analyser comment les styles et les instruments d’outre-mer ont eu un impact sur la musique actuelle et rester émerveillé de la quantité d’artistes qui experiment avec ces instruments pour enrichir leur musique.",
        direction: "right"
      },
      secondParagraph: {
        title: "Prenez en main les instruments et créez votre propre son",
        text: "Explorez le potentiel des ces instruments à travers vos chansons préférées, en modifiant la mélodie, les accords ou d’autres pistes avec l’instrument le plus souhaitable à votre goût.\n" +
          "Transformez un morceau pop actuel en un oeuvre qui va au-delà de toute limite spatio-temporelle pour un résultat époustouflant ! \n",
        direction: "left"
      },
      mapTitle: 'Voyagez à travers le monde pour un tout nouveau son',
      markers: Instruments,

      width: window.innerWidth,
      center: [0,20],
      zoom: 1,
      modal: '',
      show: false,
      currentID: undefined,
    }

    this.handleZoomIn = this.handleZoomIn.bind(this)
      this.handleZoomOut = this.handleZoomOut.bind(this)
      this.handleCityClick = this.handleCityClick.bind(this)
      this.handleReset = this.handleReset.bind(this)

  }

  componentDidMount() {
    for (let i = 0; i < document.querySelectorAll('.rsm-marker').length; i++) {
      document.querySelectorAll('.rsm-marker')[i].setAttribute('data-id', i);
      document.querySelectorAll('.rsm-marker')[i].addEventListener('mouseover', (e) => {
        if (e.target.parentNode.getAttribute('class') === 'rsm-marker rsm-marker--hover') {
          this.setState({currentID: e.target.parentNode.getAttribute('data-id')});
          this.showModal(e.target.parentNode.getAttribute('data-id'));
        }
      })
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
    const url = marker.id;
    this.props.history.push({pathname: `instrument/${url}`, state: {id: url}});
    window.scrollTo(0, 0);

  }

  handleZoomIn() {
    this.setState({
      zoom: this.state.zoom * 2,
    })
  }
  handleZoomOut() {
    this.setState({
      zoom: this.state.zoom / 2,
    })
  }
  handleCityClick(city) {
    this.setState({
      zoom: 5,
      center: city.coordinates,
    })
  }
  handleReset() {
    this.setState({
      center: [0,20],
      zoom: 1,
    })
  }

  showModal = id => {
    console.log(id);
    this.setState({show: true});
    console.log(this.state.show);
  };

  hideModal = () => {
    this.setState({show: false});
    console.log(this.state.show);
  };






  // RENDER

  render() {
    const videoOptions = {
      src: bgVideo,
      autoPlay: true,
      muted: true,
      loop: true,
    }

    const { width } = this.state;
    const isMobile = width <= 500;
    if(!isMobile) {
      return (
        <HomeComponent>
          <Header>
            <Menu/>
            <div className="video-background"><Cover videoOptions={videoOptions}/></div>
            <div className="title-container">
              <h2 className="title">Un voyage musical intemporel</h2>
              <h3 className="subtitle">Découvrez des instruments uniques et amusez-vous avec…</h3>
            </div>
          </Header>
          <ScrollAnimation animateIn='map-enter' duration={0.6} delay={0.2}>
            <Sectionmap>
              <div className="heading" id="map">
                <div className="heading-title">{this.state.mapTitle}</div>
                <div className="text-rectangle"></div>
              </div>
              <div className="paragraph-right">
                <div className="buttons-zoom">
                <Button onClick={this.handleZoomIn}  color="white" icon="zoom-in icon big violet"/>
                <Button onClick={this.handleZoomOut}  color="white" icon="zoom-out icon big violet"/>
                <Button  onClick={this.handleReset}  color="white" icon="undo icon big violet"/>
                </div>
                <div className="buttons-instruments">
                {this.state.markers.map((marker, i) => (
                  <button className="instrument-button"  key={i} onClick={() => {this.handleCityClick(marker)}}>{marker.title}</button>
                ))}
                </div>
                <Motion
                  defaultStyle={{
                    zoom: 1,
                    x: 0,
                    y: 20,
                  }}
                  style={{
                    zoom: spring(this.state.zoom, {stiffness: 310, damping: 30}),
                    x: spring(this.state.center[0], {stiffness: 310, damping: 30}),
                    y: spring(this.state.center[1], {stiffness: 310, damping: 30}),
                  }}
                >
                  {({zoom,x,y}) => (
                <ComposableMap projectionConfig={{
                  scale: 250
                }} width={1920} height={800} projection="robinson">
                  <ZoomableGroup center={[x,y]} zoom={zoom}>
                    <Geographies geography={geography}>
                      {(geographies, projection) => geographies.map(geography => (
                        <Geography key={geography.id} geography={geography} projection={projection} style={{
                          default: {
                            fill: Colors.text,
                            stroke: Colors.fourth,
                            strokeWidth: 0.3,
                            outline: "none"
                          },
                          hover: {
                            fill: Colors.text,
                            stroke: Colors.fourth,
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
                          onMouseOver={() => this.showModal()}
                          onMouseLeave={() => this.hideModal()}
                          style={{
                            default: {fill: Colors.tertiary, cursor: "pointer"},
                            hover: {fill: Colors.fourth, cursor: "pointer"},
                            pressed: {fill: "#FFFFFF", cursor: "pointer", outline: "none"},
                          }}
                        >

                          <circle
                            cx={0}
                            cy={0}
                            r={60}
                            style={{
                              stroke: Colors.tertiary,
                              strokeWidth: 3,
                              opacity: 0.9,
                            }}
                          />
                          <image width="50" height="50" x="-20" y="-40" href={marker.thumbnail} clip-path="url(#cut-off-bottom)"></image>
                          <text
                            textAnchor="middle"
                            y="35"
                            style={{
                                fontFamily: "Roboto, sans-serif",
                                fill: Colors.text,
                                fontSize: "20",
                                fontWeight: 'bold'
                            }}
                          >
                            {marker.title}
                          </text>
                        </Marker>

                      ))}
                    </Markers>
                  </ZoomableGroup>
                </ComposableMap>)}
                </Motion>
              </div>
              {this.state.show ? (
                <div className="map-modal">
                  <div className="map-modal-image"><img src={Instruments[this.state.currentID].secondaryImage} alt=""/></div>
                  <h2 className="map-modal-title">{Instruments[this.state.currentID].title}</h2>
                  <div className="map-country">Pays: <span className="bold">{Instruments[this.state.currentID].origin}</span></div>
                  <div className="map-modal-facts">Fun facts</div>
                  <div className="map-modal-fact">{Instruments[this.state.currentID].facts[0]}</div>
                  <div className="map-modal-fact">{Instruments[this.state.currentID].facts[1]}</div>
                  <div className="map-modal-call">Pour en savoir plus cliquez sur l'instrument</div>



              </div>
                )
                :
                (<div></div>)}
            </Sectionmap>
          </ScrollAnimation>
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
                  <ExoButton link={'/studio'} text={'Decouvrir le studio'}/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Thumbnail image={thumbnail}/>
                </Grid.Column>
              </Grid>
            </Secondsection>
          </ScrollAnimation>

          <Footer/>
        </HomeComponent>
      )
    }
    else {
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
          <ScrollAnimation animateIn='map-enter' duration={0.6} delay={0.2}>
            <Sectionmap>
              <div className="heading" id="map">
                <div className="heading-title">{this.state.mapTitle}</div>
                <div className="text-rectangle"></div>
              </div>
              <div className="paragraph-right">
                <div className="buttons-zoom">
                  <Button onClick={this.handleZoomIn}  color="white" icon="zoom-in icon big violet"/>
                  <Button onClick={this.handleZoomOut}  color="white" icon="zoom-out icon big violet"/>
                  <Button  onClick={this.handleReset}  color="white" icon="undo icon big violet"/>
                </div>
                <div className="buttons-instruments">
                  {this.state.markers.map((marker, i) => (
                    <button className="instrument-button" key={i} onClick={() => {this.handleCityClick(marker)}}>{marker.title}</button>
                  ))}
                </div>
                <div className="map-help">
                  <div className="map-help-text">Explorez la map</div>
                  <div className="map-fingers"><img src={fingers} alt=""/></div>
                </div>
                <Motion
                  defaultStyle={{
                    zoom: 1,
                    x: 0,
                    y: 20,
                  }}
                  style={{
                    zoom: spring(this.state.zoom, {stiffness: 110, damping: 20}),
                    x: spring(this.state.center[0], {stiffness: 110, damping: 20}),
                    y: spring(this.state.center[1], {stiffness: 110, damping: 20}),
                  }}
                >
                  {({zoom,x,y}) => (
                    <ComposableMap projectionConfig={{
                      scale: 130
                    }} width={380} height={300} projection="robinson">
                      <ZoomableGroup center={[x,y]} zoom={zoom}>
                        <Geographies geography={geography}>
                          {(geographies, projection) => geographies.map(geography => (
                            <Geography key={geography.id} geography={geography} projection={projection} style={{
                              default: {
                                fill: Colors.primary,
                                stroke: Colors.fourth,
                                strokeWidth: 0.3,
                                outline: "none"
                              },
                              hover: {
                                fill: Colors.text,
                                stroke: Colors.fourth,
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
                                hover: {fill: Colors.fourth},
                                pressed: {fill: "#FFFFFF"},
                              }}
                            >

                              <circle
                                cx={0}
                                cy={0}
                                r={15}
                                style={{
                                  stroke: Colors.text,
                                  strokeWidth: 3,
                                  opacity: 0.9,
                                }}
                              />
                              <image width="20" height="20" x="-10" y="-10" href={marker.thumbnail} clip-path="url(#cut-off-bottom)"></image>
                              <text
                                textAnchor="middle"
                                y="35"
                                style={{
                                  fontFamily: "Roboto, sans-serif",
                                  fill: Colors.text,
                                  fontSize: "8",
                                  fontWeight: 'bold'
                                }}
                              >
                                {marker.title}
                              </text>
                            </Marker>

                          ))}
                        </Markers>
                      </ZoomableGroup>
                    </ComposableMap>)}
                </Motion>
              </div>
            </Sectionmap>

          </ScrollAnimation>
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
                  <ExoButton link={'/studio'} text={'Decouvrir le studio'}/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Thumbnail image={thumbnail}/>
                </Grid.Column>
              </Grid>
            </Secondsection>
          </ScrollAnimation>
          <Footer/>

        </HomeComponent>
      )
    }

  }
}


// STYLES


const HomeComponent = styled.div`
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
  margin-bottom: 3rem;
  .title-container {
    position: absolute;
    top: 10%;
    left: 15%;
    text-align: center;
    width: 70%;
    height: auto;
    padding: 4rem 0;
    margin: 0 auto;
    background-color: rgba(85, 11, 184, 0.6);
    
  }
  
  .heading {
    margin-top: 5rem;
  }
  
  .video-background {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
 
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
    margin-left: 1rem;
    background: none;
    text-align: left;
   }
   
    .title {
      width: 90vw;
      margin: 0;
      font-size: 2.2rem;
      line-height: 3rem;
      padding:  0;
      color: white;
      
    }
  .subtitle {
    font-size: 1.5rem;
    line-height: 2.5rem;
    width: 90vw;
    color: ${Colors.fourth}
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
  height: 70vh;
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
    height: auto;
    padding: 2rem;
  }
  

`


const Secondsection = styled.div`  
  width: 100%;
  height: 80vh;
  padding: 8rem;
  position: relative;
  z-index: 0;
  
  @media(max-width: 560px) {
    padding: 2rem;
    height: auto;
  }
  

`

const Sectionmap = styled.div`  
  width: 100%;
  height: 100vh;
  position: relative;
  
  .heading {
    margin-bottom: 3rem;
    position: relative;
    padding: 2rem 0;
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
  top: 3rem;
  z-index: -1;
 
}

.buttons-zoom {
  margin: 2rem 2rem;
}

.buttons-instruments {
  margin: 1rem 2rem;
}

.map-modal {
position: absolute;
right: 5rem;
top: 10rem;
width: 500px;
height: auto;
background-color: ${Colors.secondary};
color: ${Colors.text};
transition: all .2s ease;
padding: 2rem;
border-radius: 1rem;

}

.map-modal-title {
  text-align: center;
  font-size: 2rem;
 

}

.map-modal-image {
width: 200px;
margin: 0 auto;
img {
width: 100%;
}
}

.map-modal-facts {
font-size: 1.3rem;
  color: ${Colors.text};
  font-weight: bold;
  margin: 2rem 0;
}

.map-modal-fact {
  margin: 1rem 0;
}

.map-modal-call {
  margin: 2rem 0;
  text-align: center;
  font-size: 1.5rem;
  color: ${Colors.fourth};
}

.instrument-button {
  width: 100px;
  height: 50px;
  background-color: ${Colors.text};
  color: ${Colors.primary};
  font-family: ${Fonts.subtitle};
  border: 1px solid ${Colors.secondary};
  border-radius: 0.4rem;
  transition: all .2s ease;
}

.instrument-button:hover {
  background-color: ${Colors.primary};
  color: ${Colors.text};
}

.bold {
  font-weight: bold;
}

.map-country {
  font-weight: 2.5rem;
}


  
  
 
  @media(max-width: 560px) {
  height: auto;
  
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
    display: block;
  }
  
  
.instrument-button {
  width: 100px;
  height: 50px;
  background-color: ${Colors.text};
  color: ${Colors.primary};
  font-family: ${Fonts.subtitle};
  border: 1px solid ${Colors.secondary};
}

.map-help {
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin: 2rem 0;

}

.map-help-text {
color: ${Colors.text};
font-size: 1.5rem;
}

.map-fingers{
  width: 100px;
  img {
    width: 100%;
  }
}
    
  }
  

`


export default withRouter(Home);
