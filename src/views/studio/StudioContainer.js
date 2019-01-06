import React from "react";
import { withRouter } from "react-router-dom";
import Studio from "./Studio";
import { CSSTransition } from 'react-transition-group';
import '../../styles/animation.css'
import API from '../../helpers/api'
import Menu from '../../components/menu/Menu';
import Step from '../../components/studio/Step';
import Next from '../../components/studio/Next';
import styled from 'styled-components';

class StudioContainer extends React.Component {
  state = {
    title:"Viva la vida",
    artist: "COLDPLAY",
    selected:[],
    data:[
      {
        title:"Viva la vida",
        artist: "COLDPLAY",
      },
      {
        title:"titre 2",
        artist: "titre 2",
      },
      {
        title:"titre 3",
        artist: "titre 3",
      },
      {
        title:"titre 4",
        artist: "titre 4",
      }
    ],
    loading:true,
    index:0,
  }
  componentDidMount(){


  }

  handleSelected(newSelect){
    this.setState({
      selected: [...this.state.selected,newSelect]
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    if (nextState.index < (this.state.data.length + 1)) {
      return true;
    }
    return false;
  }
  exit = () => {
    this.setState(prevState=>{
      return{ index: prevState.index }
    })
  }
  handleIndex = () =>{
    this.setState(prevState=>{
      return{ index: prevState.index +=1}
    })
  }
  render() {
    const {data,index} = this.state;
    return (
    <div>
      <Menu/>
      <Step
      index={index}
      />
      <Responsive>
        <div style={{transform:`translateY(${-index*20}%)`,...transition}}>
        <Studio 
              title={data[0].title}
              artist={data[0].artist}
              handleSelected={this.handleSelected}
              />
        <Studio 
              title={data[1].title}
              artist={data[1].title}
              handleSelected={this.handleSelected}
              />
        <Studio 
              title={data[2].title}
              artist={data[2].title}
              handleSelected={this.handleSelected}
              />
        <Studio 
              title={data[3].title}
              artist={data[3].title}
              handleSelected={this.handleSelected}
              />
        <div style={{...todo}}>
        <h2>A faire :)</h2>
          { /* next step */}
        </div>
        </div>
      </Responsive>
      <CSSTransition
      in={index !== data.length}
      classNames='button'
      timeout={500}
      unmountOnExit
      >
      <Next
      handleIndex={this.handleIndex}/>
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
transition: all 0.5s ease;

`;

const transition = {
  transition: 'all 0.5s ease'
}
 const todo = {
   display: 'flex',
   alignItems: 'center',
   justifyContent:' center',
   width: '100%',
   height:'100vh',
 }
export default withRouter(StudioContainer);
