import React, {Component} from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Colors from '../../styles/colors';
import {Grid} from 'semantic-ui-react'
import Paragraph from "../../components/paragraph/Paragraph";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import Footer from "../../components/footer/Footer";
import Sound from 'react-sound';
import Button from "../../components/button/Button";
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/animation.css';
import YouTube from 'react-youtube';


//IMAGES
import triangle from '../../assets/img/card_triangle.svg';
import thumbnail from '../../assets/img/background_home.jpg';
import title from '../../assets/img/fiche_title.svg';
import instrument from '../../assets/img/banjo.jpg';
import list from '../../assets/img/list.png';
import play from '../../assets/img/play.svg';
import pause from '../../assets/img/pause.svg';

// SOUNDS
import sound from '../../assets/sounds/Sitar.wav';


// STATE

class Instrument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Banjo',
      pronunciation: '[bɑ̃.dʒo]',
      type: 'Cordes frappées',
      shape: 'A queue ou droit',
      origin: 'Amérique du Nord',
      year: 'XVIIIe',
      description: {
        title: 'Un instrument pas seulement utilisé dans la musique country',
        text: 'lLe banjo est un instrument de musique à cordes pincées nord-américain. Avec sa table d\'harmonie à membrane, on le distingue facilement de la guitare. Cet instrument serait un dérivé du luth ouest-africain ekonting apporté par les esclaves noirs (ou plus vraisemblablement recréé par certains d\'entre eux) et qui aurait suscité la création des premiers gourd-banjos (« banjo en gourde »).\n' +
          'L\'origine de l\'instrument moderne remonte d\'abord aux années 1830-1840 durant lesquelles ont commencé l\'industrialisation et la commercialisation d\'un instrument plus ancien (xviie siècle) utilisé par les esclaves africains déportés aux États-Unis. La source iconographique la plus ancienne se trouve dans un récit de voyage écrit par Sir Hans Sloane en 1688 et publié à Londres en 1707. Les musiciens noirs exploitèrent l\'aspect rythmique de l\'instrument avec un tel succès que les blancs du Sud des États-Unis s\'y intéressèrent. '
      },
      artists: [
        'Taylor Swift',
        'John Mayer',
        'Keith Urban',
        'Rod Stewart'
      ],
      sound: {
        filePath: '../../assets/sounds/Sitar.wav',
        type: 'audio/wav'
      },
      videoUrl: 'RQuY8kERaU0',

      playing: false
    }

  }

  // METHODS

  handlePlay = () => {
    const audio =  ReactDOM.findDOMNode(this.refs.audio);
    if (audio.paused) {
      audio.play();
      this.setState(() => ({ playing: true }))
      console.log(this.state.playing);
    } else {
      audio.pause();
      this.setState(() => ({ playing: false }))
      console.log(this.state.playing);
    }

  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }


  // RENDER

  render() {

    const opts = {
      height: '590',
      width: '900',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <CardComponent>
        <Header>
          <Menu/>
          <div className="heading">
            <div className="pronunciation">{this.state.pronunciation}</div>
            <div className="title">{this.state.title}</div>
          </div>
          <ScrollAnimation animateIn='fade-left'>
            <div className="infos">
              <ul className="infos-list">
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">CLASSIFICATION</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {this.state.type} </div>
                  </div>
                </li>
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">FORMES</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {this.state.shape} </div>
                  </div>
                </li>
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">ORIGINES</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {this.state.origin} </div>
                  </div>
                </li>
                <li>
                  <div className="infos-item">
                    <div className="infos-tag">ANNEE</div>
                    <div className="dots"></div>
                    <div className="infos-data"> {this.state.year} </div>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <div className="header-thumbnail">
            <ScrollAnimation animateIn='fade-right'>
              <Thumbnail image={thumbnail}/>
            </ScrollAnimation>
          </div>

        </Header>
        <DescriptionSection>
          <Grid columns={12}>
            <Grid.Column computer={6} mobile={16}>
              <img src={instrument} alt=""/>
            </Grid.Column>
            <Grid.Column computer={9} mobile={16}>
              <ScrollAnimation animateIn="paragraph-right">
                <Paragraph title={this.state.description.title} text={this.state.description.text}
                           direction="right"/>
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
                  <div className="player-text">Cliquez ici pour écouter le {this.state.title}</div>
                  <div className="button-player" onClick={this.handlePlay}><img src={this.state.playing ? pause: play} alt=""/>

                  </div>

                  <div className="player">
                    <audio ref="audio">
                      <source src={sound}></source>
                    </audio>

                  </div>
                </div>
              </ScrollAnimation>
            </Grid.Column>
            <Grid.Column computer={9} mobile={12}>
              <div className="artist-title">Le {this.state.title} aujourd'hui</div>
              <ul className="artist-list">
                {this.state.artists.map(artist =>
                  (
                    <li className="artist-item">{artist}</li>
                  )
                )}
              </ul>
            </Grid.Column>
          </Grid>
        </SoundSection>
        <VideoSection>
          <YouTube
            videoId={this.state.videoUrl}
            opts={opts}
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
  height: 450vh;
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
height: 100vh;
padding: 3rem;


  img {
  width: 100%;
  }
  
   @media(max-width: 560px) {
  height: 130vh;
  }

`

const SoundSection = styled.div`
width: 100%;
height: 100vh;


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
  font-size: 2rem;
  color: ${Colors.text};
  margin: 2rem 0;
  list-style: url(${list}) inside;
  text-align: right;
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
  
  .artist-item {
    font-size: 1rem;
    list-style: circle inside;
    text-align: center;
  }
  
  .artist-title {
    font-size: 1.4rem;
  }
  
  .triangle {
    display: none;
  }
  
  
}


`;

const VideoSection = styled.div`
width: 100%;
height: 100vh;
text-align: center;

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
  right: 22%;
  top: 1rem;
  z-index: -1;
 
}

@media(max-width: 560px) {
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


export default Instrument;
