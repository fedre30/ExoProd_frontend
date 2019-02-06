import React,{ Component} from 'react';
import styled from 'styled-components';
import play from '../../assets/img/play.svg';
import pause from '../../assets/img/pause.svg';
import oval from '../../assets/img/ovale-dotted.png';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import Sound from 'react-sound';
import { Button } from 'semantic-ui-react';
import image from '../../assets/img/instruments/banjo.png'
class FinalMix extends Component {
    state = {
        playStatus: Sound.status.STOPPED,
        ismute: false,
        progressbar: 0,
        positions: [0,0,0,0],
        durations: [0,0,0,0],
        total: '0:00',
        current: '0:00',
        isMute: false,
        volumes: [100,100,100,100],
        isLoadingEnd: false,
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
    
    endLoading = (endloading)=>{
        if(endloading){
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
            this.setState({isLoadingEnd:true})
            this.handleSongFinishedPlaying();
        }

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
        let {isMute,volumes} = this.state;
        console.log(isMute)
        const newVolumes = [];
        if(isMute) {
            isMute = false
            volumes.map(volume=>{
                newVolumes.push(100);
            })
        } else {
            isMute = true
            volumes.map(volume=>{
                newVolumes.push(0);
            })
        }
        this.setState({
            volumes: newVolumes,
            isMute
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

    SelectThisSong = (index) =>{
        console.log('je suis dedans')
            this.setState(prevState=>{
                const volumes = prevState.volumes.slice(0);
                // A FINALISER
                const newVolumes = volumes.map((volume,i)=>{
                    if(index === i) {
                        return 100
                    } else {
                        return 0
                    }
                });
                return {
                    volumes: newVolumes
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

    handleRangeVolume = (e) => {
        const {value,id} = e.target
        this.setState(prevstate=>{
            const volumes = prevstate.volumes.slice(0);
            volumes.splice(id,1, parseInt(value));
            return {
                volumes,
            }
            //isMute
        })

    }
    componentDidUpdate(){
        if(this.state.volumes.every(volume => volume === 0) && this.state.isMute === false) {
            this.setState({
                isMute: true
            })
        } else if (this.state.isMute === true && !this.state.volumes.every(volume => volume === 0)) {
            this.setState({
                isMute: false
            })
        }
    }
    render(){
        const {progressbar,playStatus, volumes} = this.state;
        const controller = {
            playing: playStatus === Sound.status.PLAYING,
            isMute: volumes.every(volume => volume === 0)
        }
        
        const checkmusics = this.props.selected.every(elem=> elem.length !== 0);

        return(
            <FinalMixContainer>
                <div className="finalmix-container">
                    {volumes.map((volume,i)=>(
                    <div className="finalmix-container_items">
                        <button className="btn-playing"
                        onClick={() => this.SelectThisSong(i)}
                        style={volume===0 ? {opacity:0.4}:{}}
                        >
                        <img src={this.props.selected[i].img} className="btn-playing_volume" alt='instrument volume' />
                        </button>
                        <input 
                        className="range-volume" 
                        value={volume}
                        key={i}
                        id={i}
                        onInput={this.handleRangeVolume} 
                        type="range"
                        min='0'
                        max='100'
                        step='1'
                        />
                    </div> 
                    ))}                                     
                </div>
                <div className="display-instrument-information-container">
                    <h1 className="display-instrument-information-title">{this.props.title}</h1>
                    <h2 className="display-instrument-information-artist">{this.props.artist}</h2>
                </div>
                <div className="ControlePlayer-container">
                    <p>{this.state.current}</p>
                    <div className="ControlePlayer-progressbar-container">
                        <input type="range"
                        id='input-range'
                        min='0'
                        max='100' 
                        step="0.001"
                        disabled={checkmusics && this.state.isLoadingEnd ? false : true}
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
                    disabled={checkmusics && this.state.isLoadingEnd ? false : true}
                    icon='info' 
                    size='large'  
                    /> 
                    <button
                    className="studio-btn-playing mobile"
                    disabled={checkmusics && this.state.isLoadingEnd ? false : true}
                    onClick={this.handlePlay} 
                    >
                        <img src={controller.playing ? pause : play } alt='play button'/>
                    </button>
                    <Button
                    className="studio-btn-audio mobile" 
                    circular
                    disabled={checkmusics && this.state.isLoadingEnd ? false : true}
                    icon={controller.isMute ? 'volume off' : 'volume up'} 
                    size='large'
                    onClick={this.handleVolume} 
                    /> 
                </div>
                {checkmusics && 
                    this.props.selected.map((elem,i)=>
                        <Sound
                        key={i}
                        ignoreMobileRestrictions={true}
                        url={elem.sound}
                        playStatus={playStatus}
                        onPlaying={({position,duration}) => this.handleSongPlaying(position,duration,i)}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                        onLoading={({duration,position}) => this.initPlayer(duration,position,i)}
                        onLoad={({loaded}) => this.endLoading(loaded)}
                        autoLoad={true}
                        position={this.state.positions[i]}
                        volume={this.state.volumes[i]}
                        />                
                    )
                }
 
            </FinalMixContainer>
        )
    }
}

const FinalMixContainer = styled.div`
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

.finalmix-container {
    position: relative;
    width: 25vw;
    margin: 48px auto;
    display:flex;
    justify-content:center
}

.button-container{
    display:flex;
    align-items:center;
    width: 200px;
    justify-content: space-around;
}

.display-instrument i{
    color:white;
}
.display-instrument-information-container {
    margin-top: 24px;
}
@media screen and (min-width: 768px){
    .display-instrument-information-container {
        margin-top: 32px;
        margin-bottom: 0.6vw;
    }
}

.display-instrument-information-artist,
.display-instrument-information-title {
  color: ${Colors.text};
  font-size:18px;
  font-weight:400;
  margin:0;
}
.studio-btn-playing{
    border:0;
    outline:0;
    cursor:pointer;
    background:none;
}

.studio-btn-playing img {
    width: 61px;
    height: 61px;
    border-radius: 50%;
}

.display-instrument {
    position: relative;
    z-index: 1;
    border: 0;
    outline:0;
    cursor: pointer;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    background:0;
    width: 200px;
    height: 200px;
    min-width:200px;
    min-height: 200px;
    width: 30vw;
    height: 30vw;
}

.ControlePlayer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    margin: 24px 0;
}
@media screen and (min-width: 768px){
    .ControlePlayer-container {
        margin: 12px 0 6px 0;
    }
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

@media screen and (min-width:768px) {
    .display-instrument {
      min-width: 320px;
      min-height: 320px;
      width:20vw;
      height:20vw;
    }
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
.finalmix-container_items {
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 15%;
}
.btn-playing{
    outline:0;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    margin: 0 8px;
    cursor: pointer;
    border: 0;
    padding: 12px;
    background-color: rgba(216,216,216,0.20);
    cursoir: pointer;
    transition: all 0.4s ease;
}
.btn-playing_volume {
    width: 80%;
}
.range-volume {
    transform: rotate(270deg) translateY(-50%);
    height: 4px;
    border-radius: 14px;
    margin-top: 50px;
    max-width: 90px;
}
`

export default FinalMix;