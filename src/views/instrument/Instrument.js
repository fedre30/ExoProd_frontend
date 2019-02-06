import React, {Component} from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Colors from '../../styles/colors';
import {Grid} from 'semantic-ui-react'
import Paragraph from "../../components/paragraph/Paragraph";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/animation.css';
import YouTube from 'react-youtube';
import {withRouter} from 'react-router-dom';

import Instruments from '../../helpers/api.js';


//IMAGES
import triangle from '../../assets/img/card_triangle.svg';
import title from '../../assets/img/fiche_title.svg';
import list from '../../assets/img/list.png';
import play from '../../assets/img/play.svg';
import pause from '../../assets/img/pause.svg';

// STATE

class Instrument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      playing: false,
      width: window.innerWidth
    }
  }

  // METHODS

  handlePlay = () => {
    const audio =  ReactDOM.findDOMNode(this.refs.audio);
    if (audio.paused) {
      audio.play();
      this.setState(() => ({ playing: true }))
    } else {
      audio.pause();
      this.setState(() => ({ playing: false }))
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

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }


  // RENDER

  render() {

    const desktopOpts = {
      height: '590',
      width: '900',
      playerVars: {
        autoplay: 1
      }
    };

    const mobileOpts = {
      height: '360',
      width: '450',
      playerVars: {
        autoplay: 1
      }
    };

    const { width } = this.state;
    const isMobile = width <= 500;
    console.log(this.props);
    return (
      <CardComponent>
        <Header>
          <Menu/>
          <div className="heading">
            <div className="pronunciation">{Instruments[this.props.location.state.id].pronunciation}</div>
            <div className="title">{Instruments[this.props.location.state.id].title}</div>
          </div>
          <ScrollAnimation animateIn='fade-left'>
            <div className="infos">
              <ul className="infos-list">
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">CLASSIFICATION</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {Instruments[this.props.location.state.id].type} </div>
                  </div>
                </li>
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">FORMES</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {Instruments[this.props.location.state.id].shape} </div>
                  </div>
                </li>
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">ORIGINES</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {Instruments[this.props.location.state.id].origin} </div>
                  </div>
                </li>
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">ANNEE</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {Instruments[this.props.location.state.id].year} </div>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <div className="header-thumbnail">
              <Thumbnail image={Instruments[this.props.location.state.id].mainImage}/>
          </div>

        </Header>
        <DescriptionSection>
          <Grid columns={12}>
            <Grid.Column computer={6} mobile={16}>
              <img src={Instruments[this.props.location.state.id].secondaryImage} alt=""/>
            </Grid.Column>
            <Grid.Column computer={9} mobile={16}>
              <ScrollAnimation animateIn="paragraph-right">
                <Paragraph title={Instruments[this.props.location.state.id].description.title} text={Instruments[this.props.location.state.id].description.text}
                           direction={isMobile ? 'left' : 'right'}/>
              </ScrollAnimation>
            </Grid.Column>
          </Grid>
        </DescriptionSection>
        <SoundSection>
          <Grid columns={12}>
            <Grid.Column computer={6} mobile={12}>
              <ScrollAnimation animateIn="fade-left">
                <img className="triangle" src={triangle} alt=""/>
                <div className="player-container">
                  <div className="player-text">Cliquez ici pour écouter le {Instruments[this.props.location.state.id].title}</div>
                  <div className="button-player" onClick={this.handlePlay}><img src={this.state.playing ? pause: play} alt=""/>

                  </div>

                  <div className="player">
                    <audio ref="audio">
                      <source src={Instruments[this.props.location.state.id].sound.filePath} type={Instruments[this.props.location.state.id].sound.type}></source>
                    </audio>

                  </div>
                </div>
              </ScrollAnimation>
            </Grid.Column>
            <Grid.Column computer={9} mobile={12}>
              <div className="artist-title"><i>Fun Facts</i> sur le {Instruments[this.props.location.state.id].title}</div>
              <ul className="artist-list">
                {Instruments[this.props.location.state.id].facts.map(artist =>
                  (
                    <li className="artist-item">{artist}</li>
                  )
                )}
              </ul>
            </Grid.Column>
          </Grid>
        </SoundSection>
        <VideoSection>
          <div className="video-title">Le {Instruments[this.props.location.state.id].title} aujourd'hui</div>
          <YouTube
            videoId={Instruments[this.props.location.state.id].videoUrl}
            opts={isMobile ? mobileOpts : desktopOpts}
            onReady={this._onReady}
          />

          <div className="video-subtitle-container">
            <div className="video-subtitle">
              Vous voulez participer à une expérience musicale?
              <div className="text-rectangle"></div>
            </div>
          </div>
          <Button link={'/studio'} text={'Decouvrir le studio'}/>
        </VideoSection>


        <Footer/>

      </CardComponent>
    )
  }
}


// STYLES

const CardComponent = styled.div
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
  height: 115vh;
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
  
  .infos {
    width: 40%;
    height: 350px;
    background-color: ${Colors.primary};
    margin: 5rem 3rem;
    padding: 3rem;
  }
  
  
  .infos-tag {
    flex-grow: 0;
  }
  
  .dots {
  flex-grow: 4;
  border-bottom: 1px dotted ${Colors.text};

  }
  
  .infos-item {
    width: 100%;
    font-weight: 300;
    color: ${Colors.text};
    font-size: 1.5rem;
    display: flex;
    margin: 2.7rem 0;  
  }
  
  .infos-data {
  flex-grow: 0;
  display: flex;
  justify-content: flex-end;
   
  }
  
  @media(max-width: 560px) {
  height: 120vh;
  .heading {
    background: none;
  }
  
  .pronunciation {
    font-size: 4rem;
    width: 100vw;
  }
    .infos {
      width: 90%;
      height: 50vh;
    }
    
    .infos-item {
    font-size: 1rem;
    }
  }

`
;

const DescriptionSection = styled.div`
width: 100%;
height: 85vh;
padding: 3rem;


  img {
  width: 100%;
  }
  
   @media(max-width: 560px) {
  height: auto;
  }

`

const SoundSection = styled.div`
width: 100%;
height: 85vh;


.artist-list {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.artist-title {
  text-align: right;
  font-size: 3rem;
  color: ${Colors.text};
  margin: 4rem 0;
}

.artist-item {
  font-size: 1.5rem;
  color: ${Colors.text};
  margin: 2rem 0;
  list-style: url(${list}) inside;
  line-height: 2rem;
}

.player {
  position: absolute;
  top: 50%;
  left: 8rem;
  opacity: 1;
}

.player-text {
  color: ${Colors.text};
  margin: 2rem 0;
  width: 100%;
  position: absolute;
  left: 3rem;
  top: 55%;
  
}

.button-player {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 48%;
  left: 6rem;
  
  img {
    width: 100%;
  }
}

@media(max-width: 560px) {
width: 100%;
height: auto;

  .artist-list {
    display: block;
    margin: 0 auto;
    padding: 1rem 0 2rem 4rem;
    
  }
  .artist-item {
    font-size: 1rem;
    list-style: circle inside;
    margin: 0 auto;
  }
  
  .artist-title {
    font-size: 1.4rem;
  }
  
  .triangle {
    display: none;
  }
  
  .player-container {
    position: static;
    margin: 0 3rem;
    text-align: center;
    width: 100%;
  }
  
  .player-text {
    position: static;
    margin: 1rem auto;
    text-align: center;
  }
  
  .button-player {
    position: static;
    margin: 1rem auto;
    text-align: center;
  }
  
  
}


`;

const VideoSection = styled.div`
width: 100%;
height: 100vh;
text-align: center;

.video-title {
  font-size: 4rem;
  color: ${Colors.text};
  text-align: center;
  font-weight: bold;
  margin: 5rem 0;
}

.video-subtitle-container {
  font-size: 3rem;
  color: ${Colors.text};
  text-align: center;
  margin: 5rem 0;
  position: relative;
}

.video-subtitle {
  z-index: 0;
  position: relative;
}

.text-rectangle {
  width: 450px;
  height: 30px;
  background-color: ${Colors.fourth};
  position: absolute;
  right: 25%;
  top: 1rem;
  z-index: -1;
 
}

@media(max-width: 560px) {
  width: 100%;
  height: auto;
  
  .video-title {
    font-size: 2rem;
    line-height: 3rem;
  }
  .video-subtitle {
    font-size: 1rem;
    
    
  }
  
  .text-rectangle {
    width: 200px;
   height: 20px;
    right: 10%;
    top: 0.5rem;
 
}
}


`


export default withRouter(Instrument);
