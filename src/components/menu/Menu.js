import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          name: 'Accueil',
          link: '/'
        },
        {
          name: 'Instruments',
          link: '/instruments'
        },
        {
          name: 'StudioProd',
          link: '/studio'
        },
        {
          name: 'A propos',
          link: '/'
        },

      ],

      show: false,

    }
  }

  handleClick() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <MenuComponent>
        <Link to="/">
          <div className="logo">exoprod</div>
        </Link>
        <div className="burger" onClick={() => this.handleClick()}>
          <span className={'line1 ' + (this.state.show ? 'lineOpen-1' : '')}></span>
          <span className={'line2 ' + (this.state.show ? 'lineOpen-2' : '')}></span>
          <span className={'line3 ' + (this.state.show ? 'lineOpen-3' : '')}></span>
        </div>
        <div className={'menu-container ' + (this.state.show ? 'show' : '')}>
          <ul className="menu-list">
            {this.state.menuItems.map(item => (
              <Link to={item.link}>
                <li className="menu-item">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </MenuComponent>
    );
  }
}

const MenuComponent = styled.div
  `
  width: 100%;
  display: flex;
  padding: 2rem 1rem;
  z-index: 10000;
  
  .burger {
  display: none;
  }
  .logo {
    position: fixed;
    margin: 1.3rem 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: ${Colors.text};
    font-family: ${Fonts.logo};
    
  }
  
  .menu-container {
      position: fixed;
      right: 2rem;
  }
  .menu-list{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem 2rem;
  
  }
  
  .menu-item {
    list-style: none;
    margin: 1rem 3rem;
    
    
  }
  
  a {
  color: ${Colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color .2s ease;
  }
  
  a:hover {
  color: ${Colors.fourth};
 
 
  }
  
  @media(max-width: 560px) {
  
  .logo {
    margin: 1rem 0;
  }
    .burger {
    display: block;
    position: fixed;
    width: 100px;
    height: 50px;
    right: -2rem;
    top: 3rem;
    z-index: 2;
    
  
    }
    .line1, .line2, .line3 {
        display: block;
        width: 35px;
        height: 3px;
        background: white;
        margin-bottom: 0.5rem;
        
    }
    
    .line2 {
        width: 30px;
    }
    
    .menu-container {
      width: 100%;
      height: 100vh;
      position: fixed;
      opacity: 0;
      top: 0;
      left: 0;
      background: ${Colors.primary};
      transition: opacity 0.3s ease;
    }
    
    .menu-list {
    padding:10rem 7rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    
    }
    
    .menu-item {
    margin: 2rem;
    }
    
    .show {
    transition-duration: 0.3s;
    opacity: 1;
    display: block;
    }
    
    .lineOpen-1{
      transform: rotate(45deg) translate(0, 8px);
      transition-duration: 0.5s;
      transform-origin: left;
    } 
    .lineOpen-2{
      display: none;
    } 
    .lineOpen-3{
      transform: rotate(-45deg) translate(-18px, 8px);
      transition-duration: 0.5s;
      transform-origin: left;
    
    } 
  }
  
  `
;


export default Menu;
