import React, { Component } from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import play from '../../assets/img/play.svg';
import pause from '../../assets/img/pause.svg';
import { Grid, Button } from 'semantic-ui-react';
import Sound from 'react-sound';
import '../../styles/range.css';

class ControlePlayer extends Component {
   
    //note: j'ai initialisé le state position (qui est passé par notre dépendance Sound)
    //      uniquement pour rendre dynamique notre progressbar, je n'ai pas trouvé de moyens
    //      plus 'jolie' pour mettre en place cette fonction, en tout cas, cela marche parfaitement
    state = {
        playStatus: Sound.status.STOPPED,
        ismute: false,
        progressbar: 0,
        position: 0,
        duration: 0,
        total: '0:00',
        current: '0:00',
        volume: 100,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reset && (this.props.checkindex !== nextProps.checkindex) ) {
            if(this.state.playStatus !== Sound.status.STOPPED) {
                this.handleSongFinishedPlaying();
            } 
        }
      }   

    /**
     * 
     * @param {*} duration
     * fonction que j'appelle lorsque je charge le son
     */
    initPlayer(duration){
        this.setState({
            duration,
        })
    }
    
    endLoading = ()=>{

        if(this.props.select.sound !== null){
            let option = { audio:new Audio(this.props.select.sound),remove:false};
            option.audio.addEventListener('loadedmetadata', () => {
                this.setState({
                    total: this.convertToTimer(option.audio.duration)
                })
                option.audio.remove = true;
            })
            if(option.remove) option = undefined;
        }

        this.handleSongFinishedPlaying();
    }
    /**
     * Converstion de ma position en timer
     */
    convertToTimer = (timer, round= 1) =>{
        const time =  Math.round(timer/round)
        let seconde = time % 60;
        const minute = parseInt(time/60);
        return `${minute}:${seconde < 10 ? '0'+seconde : seconde}`;
    }

    handleVolume = () => {
        let volume = this.state.volume;
        volume === 100 ? volume = 0 : volume = 100
        this.setState({
            volume
        })
    }

    /**
     * Gestion du bouton play
     * je mets en pause/play (toggle) le player audio
     */
    handlePlay = () => {
        let {playStatus} = this.state;
        playStatus === Sound.status.PLAYING ?
        playStatus = Sound.status.PAUSED :
        playStatus = Sound.status.PLAYING
        this.setState({
            playStatus
        })
    }
    /**
     * Gestion du progressbar
     * @param {*} position 
     * @param {*} duration 
     * je mets à jour l'état progressbar, je retourne le pourcentage
     * je souhaite avoir cette valeur précis au millième près
     */
    handleSongPlaying(position,duration){
        let {progressbar} = this.state;
        progressbar = Math.round((position/duration*100000))/1000;
        this.setState({
            progressbar,
            position,
            current: this.convertToTimer(position,1000)
        })
    }

    /**
     * Je reset mes états
     * playStatus se met en pause
     * progressbar se met à 
     * current se met à 0:00
     */
    handleSongFinishedPlaying = () => {
        this.setState({
            playStatus: Sound.status.STOPPED,
            progressbar: 0,
            position:0,
            current: '0:00'
        })
    }
    /**
     * Ce référencer à la formule écrite dans la méthode handleSongPlaying
     * Je mets à jour la position & le progressbar
     */
     handleValueRange = (event) => {
        let {progressbar, position, playStatus} = this.state;
        if(playStatus !== Sound.status.STOPPED){
            progressbar = Number(event.target.value);
            position = (progressbar*100*parseFloat(this.state.duration))/10000
            this.setState({
                progressbar,
                position
            })
        }
    }

    render(){
        const {progressbar,playStatus, volume} = this.state;
        const controller = {
            playing: playStatus === Sound.status.PLAYING,
            isMute: volume === 0
        }
        return (
            <ControlePlayerStyle>
                <div className="ControlePlayer-container">
                    <p>{this.state.current}</p>
                    <div className="ControlePlayer-progressbar-container">
                        <input type="range"
                        id='input-range'
                        min='0'
                        max='100' 
                        step="0.001"
                        disabled={this.props.selected ? false : true}
                        value={progressbar}
                        onChange={this.handleValueRange}
                        className="ControlePlayer-progressbar-interactive_range"/>
                        <span style={{width: `${progressbar}%`}} className="ControlePlayer-progressbar-interactive"></span>
                    </div>
                    <p>{this.state.total}</p>
                </div>
                <Grid.Row verticalAlign='middle' columns={1}>
                    <Grid.Column textAlign='center' >
                        <Button 
                        className="studio-btn-audio mobile"
                        circular
                        disabled={this.props.selected ? false : true}
                        icon='info' 
                        size='large'
                        />

                        <button
                        className="studio-btn-playing mobile"
                        disabled={this.props.selected ? false : true}
                        onClick={this.handlePlay} 
                        >
                            <img style={{opacity: this.props.selected ? '1' : '0.5'}} src={controller.playing ? pause : play } alt='play button'/>
                        </button>

                        <Button 
                        className="studio-btn-audio mobile" 
                        circular
                        disabled={this.props.selected ? false : true}
                        icon={controller.isMute ? 'volume off' : 'volume up'} 
                        size='large'
                        onClick={this.handleVolume}
                        />
                    </Grid.Column>
                </Grid.Row>
                {this.props.url !== null && 
                    <Sound
                    ignoreMobileRestrictions={true}
                    url={this.props.select.sound}
                    playStatus={playStatus}
                    onPlaying={({position,duration}) => this.handleSongPlaying(position,duration)}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                    onLoading={({duration,position}) => this.initPlayer(duration,position)}
                    onLoad={this.endLoading}
                    playFromPosition={this.test}
                    autoLoad={true}
                    position={this.state.position}
                    volume={this.state.volume}
                    />  
                }
                 
            </ControlePlayerStyle>    
        )
    }
};

const ControlePlayerStyle = styled.div`
.ControlePlayer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    margin: 12px 0 6px 0;
}

.ControlePlayer-container p {
    opacity: 0.7;
    color: ${Colors.text}
    font-family: ${Fonts.text};
    font-size: 14px;
    margin: 0;
}
.ControlePlayer-progressbar-container {
    width: 200px;
    height: 4px;
    background: rgba(112, 121, 140, 0.5);
    margin: 0 16px;
    border-radius: 50px;
    position: relative;
 }
 @media screen and (min-width: 768px) {
    .ControlePlayer-progressbar-container {
        min-width: 200px;
        width:20vw;
    }       
 }
 .ControlePlayer-progressbar-interactive {
    position: absolute;
    height: 100%;
    background: #FFFCF2;
    left: 0;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    z-index: 1;
 }
 .studio-btn-playing{
    border:0;
    outline:0;
    cursor:pointer;
    background:none;
    vertical-align: middle
    margin: 0 24px;
}
.studio-btn-playing[disabled]{
    cursor: default;
}
.studio-btn-playing img {
    width: 61px;
    height: 61px;
    border-radius: 50%;
    transition: opacity 400ms ease;
}
.ControlePlayer-progressbar-interactive_range {
    width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 2;
}
`;

export default ControlePlayer;