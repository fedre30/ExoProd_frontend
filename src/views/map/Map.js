import React, {Component} from "react";
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import { withRouter } from 'react-router-dom';
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
import ScrollAnimation from "react-animate-on-scroll";
import {Button} from "semantic-ui-react";
import Colors from "../../styles/colors";
import thumbnail from "../../assets/img/background_home.jpg";
import Footer from "../../components/footer/Footer";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapTitle: 'Voyagez à travers le monde pour un tout nouveau son',
      markers: [
        {markerOffset: 35, name: "Theremine", coordinates: [67.075459, 37.933009], url: 'instrument'},
        {markerOffset: 35, name: "Sitar", coordinates: [78.962880, 20.593684], url: 'instrument'},
        {markerOffset: 35, name: "Dulcimer", coordinates: [12.340171, 62.278648], url: 'instrument'},
        {markerOffset: 35, name: "Banjo", coordinates: [-95.712891, 37.090240], url: 'instrument'},
        {markerOffset: 35, name: "Castanets", coordinates: [-3.749220, 40.463667], url: 'instrument'},
        {markerOffset: 35, name: "Koto", coordinates: [139.691706, 35.689487], url: 'instrument'},
      ],

      width: window.innerWidth,
      center: [0, 20],
      zoom: 1
    }

    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
    this.handleCityClick = this.handleCityClick.bind(this)
    this.handleReset = this.handleReset.bind(this)

  }


  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
  };

  // METHODS

  handleClickMarker(marker) {
    const url = marker.url;
    this.props.history.push(url);
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
      zoom: 2,
      center: city.coordinates,
    })
  }

  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1,
    })
  }


  // RENDER

  render() {
    const {width} = this.state;
    const isMobile = width <= 500;
    return (
      <MapWrapper>
        <Menu/>

        <ScrollAnimation animateIn='map-enter' duration={0.6} delay={0.2}>
          <Sectionmap>
            <div className="heading" id="map">
              <div className="heading-title">{this.state.mapTitle}</div>
              <div className="text-rectangle"></div>
            </div>
            <div className="paragraph-right">
              <div className="buttons-zoom">
                <Button onClick={this.handleZoomIn}>
                  {"Zoom in"}
                </Button>
                <Button onClick={this.handleZoomOut}>
                  {"Zoom out"}
                </Button>
                <Button onClick={this.handleReset}>
                  {"Reset"}
                </Button>
              </div>
              <div className="buttons-instruments">
                {this.state.markers.map((marker, i) => (
                  <Button key={i} onClick={() => {
                    this.handleCityClick(marker)
                  }}>{marker.name}</Button>
                ))}
              </div>
              <Motion
                defaultStyle={{
                  zoom: 1,
                  x: 0,
                  y: 20,
                }}
                style={{
                  zoom: spring(this.state.zoom, {stiffness: 210, damping: 20}),
                  x: spring(this.state.center[0], {stiffness: 210, damping: 20}),
                  y: spring(this.state.center[1], {stiffness: 210, damping: 20}),
                }}
              >
                {({zoom, x, y}) => (
                  <ComposableMap projectionConfig={{
                    scale: 250
                  }} width={1600} height={800} projection="robinson">
                    <ZoomableGroup center={[x, y]} zoom={zoom}>
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
                            style={{
                              default: {fill: Colors.secondary},
                              hover: {fill: Colors.fourth},
                              pressed: {fill: "#FFFFFF"},
                            }}
                          >

                            <circle
                              cx={0}
                              cy={0}
                              r={60}
                              style={{
                                stroke: Colors.secondary,
                                strokeWidth: 3,
                                opacity: 0.9,
                              }}
                            />
                            <image width="50" height="50" x="-20" y="-40" href={thumbnail}
                                   clip-path="url(#cut-off-bottom)"></image>
                            <text
                              textAnchor="middle"
                              y={marker.markerOffset}
                              style={{
                                fontFamily: "Roboto, sans-serif",
                                fill: Colors.text,
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
                  </ComposableMap>)}
              </Motion>
            </div>
          </Sectionmap>
        </ScrollAnimation>
        <Footer/>
      </MapWrapper>
    )
  }
}

const MapWrapper = styled.div`

  width: 100%;
  height: auto;
  background: rgb(13,0,35);
  background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
  overflow: hidden;
  position: relative;
`



const Sectionmap = styled.div`  
  width: 100%;
  margin: 8rem 0 0 0;
  
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

.buttons-zoom {
  margin: 2rem 2rem;
}

.buttons-instruments {
  margin: 1rem 2rem;
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
    display: block;
  }
    
  }
  

`



export default withRouter(Map);
