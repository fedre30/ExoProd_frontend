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
        duration: 0
    }

    initPlayer = (duration) => {
        this.setState({
            duration
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
            position
        })
    }
    /**
     * Je reset mes états
     * playStatus se met en pause
     * progressbar se met à 0
     */
    handleSongFinishedPlaying = () => {
        this.setState({
            playStatus: Sound.status.PAUSED,
            progressbar: 0
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

        //console.log((Number(event.target.value)*100*Number(this.state.duration))/10000)
    }
    render(){
        const {progressbar,playStatus} = this.state;
        const playing = playStatus === Sound.status.PLAYING;
        
        return (
            <ControlePlayerStyle>
                <div class="ControlePlayer-container">
                    <p>0:00</p>
                    <div class="ControlePlayer-progressbar-container">
                        <input type="range" 
                        min='0'
                        max='100' 
                        step="0.001"  // j'aimerais arrondir au 1000 ième près
                        value={progressbar}
                        onChange={this.handleValueRange}
                        class="ControlePlayer-progressbar-interactive_range"/>
                        <span style={{width: `${progressbar}%`}} class="ControlePlayer-progressbar-interactive"></span>
                    </div>
                    <p>0:00</p>
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