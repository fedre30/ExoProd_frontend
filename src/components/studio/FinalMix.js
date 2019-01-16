import React,{ Component} from 'react';
import styled from 'styled-components';
import oval from '../../assets/img/ovale-dotted.png';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import Sound from 'react-sound';
import { Button } from 'semantic-ui-react';
class FinalMix extends Component {
    state = {
        playStatus: Sound.status.STOPPED,
        ismute: false,
        progressbar: 0,
        positions: [0,0,0,0],
        durations: [0,0,0,0],
        total: '0:00',
        current: '0:00',
        volume: 100,
    }
    /**
     * Ce référencer à la formule écrite dans la méthode handleSongPlaying
     * Je mets à jour la positions & le progressbar
     */
    /**
     * 
     * @param {*} durations
     * fonction que j'appelle lorsque je charge le son
     */
    initPlayer(duration,i){
        this.setState(prevState=>{
            const durations = prevState.durations.slice(0);
            durations.splice(i,0,duration);
            return {
                durations
            }
        })
    }
    
    endLoading = ()=>{

        if(this.props.selected.every(elem=> elem.length !== 0)){
            let option = { audio:new Audio(this.props.selected[0].sound),remove:false};
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
     * Converstion de ma positions en timer
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
     * @param {*} positions 
     * @param {*} durations
     * je mets à jour l'état progressbar, je retourne le pourcentage
     * je souhaite avoir cette valeur précis au millième près
     */
    handleSongPlaying(position,duration,i){
        let {progressbar} = this.state;
        progressbar = Math.round((this.state.positions[0]/this.state.durations[0]*100000))/1000;
        this.setState(prevState=>{
            let positions = prevState.positions.slice(0);
            positions.splice(i,1,position)
            return{
                progressbar,
                positions,
                current: this.convertToTimer(positions[0],1000)
            }
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
            positions:[0,0,0,0],
            current: '0:00'
        })
    }
    shouldComponentUpdate(nextProps){
        if(this.props.selected.every(elem=> elem.length !== 0)){
            return true
        } else {
            return false
        }
    }

    /**
     * Ce référencer à la formule écrite dans la méthode handleSongPlaying
     * Je mets à jour la positions & le progressbar
     */
     handleValueRange = (event) => {
        let {progressbar, positions, playStatus,durations} = this.state;
        if(playStatus !== Sound.status.STOPPED){
            progressbar = Number(event.target.value);
            const newPositions = positions.map((position,i)=>(progressbar*100*parseFloat(durations[i]))/10000);
            /*positions = (progressbar*100*parseFloat(this.state.duration))/10000*/
            this.setState({
                progressbar,
                positions:newPositions
            })
        }
    }

    render(){
        const {progressbar,playStatus, volume} = this.state;
        const controller = {
            playing: playStatus === Sound.status.PLAYING,
            isMute: volume === 0
        }
        
        const checkmusics = this.props.selected.every(elem=> elem.length !== 0);

        return(
            <FinalMixContainer>
                <div className="display-instrument-container">
                    <div className="display-instrument">

                    </div>
                    <img src={oval} alt=''/>
                </div>
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
                <div className="button-container">
                    <Button
                    className="studio-btn-audio" 
                    circular
                    disabled={checkmusics ? false : true}
                    icon='info' 
                    size='large'  
                    /> 
                    <Button
                    className="studio-btn-audio mobile" 
                    circular
                    disabled={checkmusics ? false : true}
                    icon={controller.playing ? 'pause' : 'play' } 
                    size='huge'
                    onClick={this.handlePlay} 
                    />
                    <Button
                    className="studio-btn-audio mobile" 
                    circular
                    disabled={checkmusics ? false : true}
                    icon={controller.isMute ? 'volume off' : 'volume up'} 
                    size='large'
                    onClick={this.handleVolume} 
                    /> 
                </div>
                {this.props.selected.map((elem,i)=>
                    <Sound
                    key={i}
                    ignoreMobileRestrictions={true}
                    url={elem.sound}
                    playStatus={playStatus}
                    onPlaying={({position,duration}) => this.handleSongPlaying(position,duration,i)}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                    onLoading={({duration,position}) => this.initPlayer(duration,position,i)}
                    onLoad={this.endLoading}
                    autoLoad={true}
                    position={this.state.positions[i]}
                    volume={this.state.volume}
                    />                
                )}
            </FinalMixContainer>
        )
    }
}

const Big = styled.button
`
width:51px;
height:51px;
border-radius: 50%;
cursor: pointer;
border:0;
outline:0;
`;

const Little = styled.button
`
width:41px;
height:41px;
border-radius: 50%;
border:0;
outline:0;
cursor: pointer;
`;

const FinalMixContainer = styled.div
`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
flex-direction: column;
.studio-btn-audio {
    transition: all 0.3s ease !important;
    background-color: #741AB0 !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    color:#FFFCF2 !important;
  }
.display-instrument-container {
    position: relative;
    width: 100%;
    margin: 5vw 0;
}
.button-container{
    display:flex;
    align-items:center;
    width: 30vw;
    max-width: 300px;
    justify-content: space-around;
}
.display-instrument {
    position: relative;
    z-index: 1;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(100,100,100,0.39);
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media screen and (min-width:768px) {
    .display-instrument {
      min-width: 320px;
      min-height: 320px;
      width:20vw;
      height:20vw;
    }
    .display-instrument-container img {
        position: absolute;
        top:50%;
        left:50%;
        min-width: 380px;
        min-height: 380px;
        transform: translate(-50%,-50%);
        width:24vw;
        height:24vw;
    }
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

    .ControlePlayer-progressbar-interactive_range {
        width: 100%;
        position: absolute;
        height: 100%;
        left: 0;
        background: rgba(0, 0, 0, 0);
        z-index: 2;
    }
`

export default FinalMix;