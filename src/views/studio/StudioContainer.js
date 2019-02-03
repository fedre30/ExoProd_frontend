import React from "react";
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import Studio from "./Studio";
import { CSSTransition } from 'react-transition-group';
import '../../styles/animation.css';
import API from '../../helpers/api';
import Menu from '../../components/menu/Menu';
import Step from '../../components/studio/Step';
import Next from '../../components/studio/Next';
import Modal from '../../components/studio/Modal';
import Previous from '../../components/studio/Previous';
import FinalMix from '../../components/studio/FinalMix';
class StudioContainer extends React.Component {
  state = {
    title:"Viva la vida",
    artist: "COLDPLAY",
    steps:['melodie','accords','basse','percussion','fin'],
    modal: false,
    selected:[[],[],[],[]],
    data:
      [
        [
          {
            name:"Sitar",
            id: 2,
            img: require('../../assets/img/instruments/sitar.png'),
            details:'Un incontournable pour les Beatles',
            sound:require('../../assets/sounds/Melody_sitar.wav')
          },
          {
            name:"Theremine",
            id: 1,
            img: require('../../assets/img/instruments/theremine.png'),
            details: "Un son spatial qui se prête bien à la science fiction",
            sound:require('../../assets/sounds/Melody_theremin.wav')
          }
        ],
        [
          {
            name:"Dulcimer",
            id: 3,
            img: require('../../assets/img/instruments/dulcimer.png'),
            details: "Un instrument de rêverie",
            sound:require('../../assets/sounds/Chords_dulcimer.wav')
          },
          {
            name:"Koto",
            id: 5,
            img: require('../../assets/img/instruments/koto.png'),
            details: "Un son hypnotisant directement du pays du soleil levant",
            sound:require('../../assets/sounds/Chords_koto.wav')
          }
        ],
        [
          {
            name:"Guzheng",
            id: 0,
            img: require('../../assets/img/instruments/Guzheng.png'),
            details: "Guzheng",
            sound:require('../../assets/sounds/Bass_guzheng.wav')
          },
          {
            name:"Pipa",
            id: 0,
            img: require('../../assets/img/instruments/pipa.png'),
            details: "Pipa",
            sound:require('../../assets/sounds/Bass_pipa.wav')
          }
        ],
        [
          {
            name:"Cajon",
            id: 0,
            img: require('../../assets/img/instruments/cajon.png'),
            details: 'Cajon',
            sound:require('../../assets/sounds/Drums_cajon.wav')
          },
          {
            name:"Castanet",
            id: 4,
            img: require('../../assets/img/instruments/Castanet.png'),
            details: "Pas utilisé seulement pour le flamenco ",
            sound:require('../../assets/sounds/Drums_castanets.wav')
          }
        ]                 
       ],
    loading:true,
    index:0,
    check: false,
  }
  componentDidMount(){


  }

  handleSelected = (newSelect) =>{
    const {index} = this.state;
      this.setState(prevState=>{
        let selected = prevState.selected.slice(0);
        selected.splice(index,1,newSelect);
        return{
          selected,
          check: true
        }
      })
  }
  
  resetSong(value){
    return value;
  }
  exit = () => {
    this.setState(prevState=>{
      return{ index: prevState.index }
    })
  }
  previous = () => {
    if(this.state.index === 0)return;
    const isChecked = this.state.check === false;
    if(isChecked) {
      this.setState({
          check: true
      })   
    }
    this.setState(prevState=> {
      return {
        index: prevState.index -=1
      }
    })
  }
  handlerModal = () => {
    this.setState((prevState)=>({modal: !prevState.modal}))
  }
  isSelectedempty(){
    const {selected,index} = this.state;
    if((index < selected.length-1) && selected[index+1].length !== 0) {
      this.setState(prevState=>{
        return{
          check: false,
        }  
    })    
    } else {
      this.setState(prevState=>{
        return{
          check: true,
        }  
    }) 
    }
  }

  handleIndex = () =>{
    if(this.state.selected[this.state.index+1] !== undefined && this.state.selected[this.state.index+1].length !== 0){
      this.resetSong(true);
      this.setState(prevState=>{
        return{
          index: prevState.index +=1
        }  
      })
    } else {
      this.resetSong(true);
      if(!this.state.check){
        return false;
      }
      this.setState(prevState=>{
        return{
          check: false,
          index: prevState.index +=1
        }  
      })
    }
  }

  render() {
    const {data,index,selected,check, modal} = this.state;
    return (
    <div>
      <Menu/>

        <Modal
        modal={modal}
        handlerModal={this.handlerModal}
        />
      {/*<Modal/>*/}
      <Previous
      index={this.state.index}
      previous={this.previous}
      />
      <Step
      steps={this.state.steps}
      index={index}
      />
      <Responsive>
        <div className={`responsive-container ${this.state.modal ? 'blur' : ''}`} style={{transform:`translateY(${-index*20}%)`}}>
          {data.map((element,i)=>(
          <Studio
          key={i}
          handlerModal={this.handlerModal}
          step={this.state.steps[i]}
          reset={this.resetSong}
          instruments={element}
          checkindex={i===index}
          title={this.state.title}
          artist={this.state.artist}
          handleSelected={this.handleSelected}
          />         
          ))}
          <FinalMix
          title={this.state.title}
          artist={this.state.artist}
          selected={this.state.selected}
          />
        </div>
      </Responsive>
      <CSSTransition
      in={index !== data.length}
      classNames='button'
      timeout={500}
      unmountOnExit
      >
      <Next
      handleIndex={this.handleIndex}
      check={check}
      />
      </CSSTransition>
    </div>
    )
  }
};

const Responsive = styled.div
`
height:100vh;
overflow: hidden;
background: rgb(13,0,35);
background: linear-gradient(194deg, rgba(13,0,35,1) 0%, rgba(53,0,123,1) 26%, rgba(91,9,186,1) 58%, rgba(191,0,210,1) 100%);
.blur{
  filter: blur(5px);
}
.responsive-container {
  transition: all 0.5s ease;
}
`;
export default withRouter(StudioContainer);
