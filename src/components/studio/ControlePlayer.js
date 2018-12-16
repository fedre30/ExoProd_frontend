import React, { Component } from "react";
import styled from 'styled-components';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import { Grid, Button } from 'semantic-ui-react';
import Sound from 'react-sound';
import '../../styles/range.css';
import PropTypes from 'prop-types';

class ControlePlayer extends Component {

    //note: j'ai initialisé le state position (qui est passé par notre dépendance Sound)
    //      uniquement pour rendre dynamique notre progressbar, je n'ai pas trouvé de moyens
    //      plus 'jolie' pour mettre en place cette fonction, en tout cas, cela marche parfaitement
    state = {
        playStatus: Sound.status.PAUSED,
        ismute: false,
        progressbar: 0,
        position: 0,
        duration: 0,
        total: '0:00',
        current: '0:00'
    }

    /**
     * j'initialise le temps total de mon audio
     */
    componentDidMount(){
        let option = { audio:new Audio(this.props.url),remove:false};
        option.audio.addEventListener('loadedmetadata', () => {
            this.setState({
                total: this.convertToTimer(option.audio.duration)
            })
            option.audio.remove = true;
        })
        if(option.remove) option = undefined;
    }

    /**
     * 
     * @param {*} duration
     * fonction que j'appelle lorsque je monte mon component
     */
    initPlayer(duration){
        this.setState({
            duration
        })
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
        let {progressbar,current} = this.state;
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
            playStatus: Sound.status.PAUSED,
            progressbar: 0,
            current: '0:00'
        })
    }
    /**
     * Ce référencer à la formule écrite dans la méthode handleSongPlaying
     * Je mets à jour la position & le progressbar
     */
    handleValueRange = (event) => {
        let {progressbar, position} = this.state;
        progressbar = event.target.value;
        position = (parseFloat(event.target.value)*100*parseFloat(this.state.duration))/10000
        this.setState({
            progressbar,
            position
        })
    }
    render(){
        const {progressbar,playStatus, endTimer} = this.state;
        const playing = playStatus === Sound.status.PLAYING;
        
        return (
            <ControlePlayerStyle>
                <div className="ControlePlayer-container">
                    <p>{this.state.current}</p>
                    <div className="ControlePlayer-progressbar-container">
                        <input type="range" 
                        min='0'
                        max='100' 
                        step="0.001"  // j'aimerais arrondir au 1000 ième près
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
                        icon='info' 
                        size='large'
                        />

                        <Button 
                        className="studio-btn-audio mobile" 
                        circular 
                        icon={playing ? 'pause' : 'play' } 
                        size='huge'
                        onClick={this.handlePlay}
                        />

                        <Button 
                        className="studio-btn-audio mobile" 
                        circular 
                        icon='volume off' 
                        size='large'/>
                    </Grid.Column>
                </Grid.Row>
                <Sound
                    ignoreMobileRestrictions={true}
                    url={this.props.url}
                    playStatus={playStatus}
                    onPlaying={({position,duration}) => this.handleSongPlaying(position,duration)}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                    onLoading={({duration}) => this.initPlayer(duration)}
                    onPause={this.test}
                    position={this.state.position}
                />
            </ControlePlayerStyle>    
        )
    }
};


const ControlePlayerStyle = styled.div
    `
    .ControlePlayer-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        margin: 16px 0;
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
    .ControlePlayer-progressbar-interactive {
        position: absolute;
        height: 100%;
        background: #FFFCF2;
        left: 0;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        z-index: 1;
    }

    .ControlePlayer-progressbar-interactive_range {
        width: 100%;
        position: absolute;
        height: 100%;
        left: 0;
        background: rgba(0, 0, 0, 0);
        z-index: 2;
    }
    `
;

export default ControlePlayer;