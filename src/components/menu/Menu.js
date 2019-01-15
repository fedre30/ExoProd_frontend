import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import { Dropdown } from 'semantic-ui-react';
import '../../styles/animation.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          id: 0,
          name: 'Accueil',
          link: '/',

        },
        {
          id: 1,
          name: 'Plan',
          link: '/#map',

        },
        {
          id: 2,
          name: 'StudioProd',
          link: '/studio'
        },
        {
          id: 3,
          name: 'A propos',
          link: '/'
        },

      ],

      show: false,
      active: false

    }
  }

  handleClick() {
    this.setState({ show: !this.state.show })
  }

  componentDidMount() {
    window.addEventListener('scroll', ev => {
      window.scrollY > 900 ? this.setState({active: true}) : this.setState({active: false});
    })
  }


  render() {
    return (
      <MenuComponent >
        <div className={`menu-wrapper ${this.state.active ? 'active' : ''}`}>
        <Link to="/">
          <div className="logo menu-expand">exoprod</div>
        </Link>
        <div className="burger" onClick={() => this.handleClick()}>
          <span className={'line1 ' + (this.state.show ? 'lineOpen-1' : '')}></span>
          <span className={'line2 ' + (this.state.show ? 'lineOpen-2' : '')}></span>
          <span className={'line3 ' + (this.state.show ? 'lineOpen-3' : '')}></span>
        </div>
        <div className={'menu-container ' + (this.state.show ? 'show' : '')} >
          <ul className="menu-list">
            {this.state.menuItems.map(item => (
              !item.dropdown ? (<Link to={item.link}>
                <li className="menu-item menu-expand" key={item.id}>{item.name}</li>
              </Link>) : (
                <Dropdown text={item.name} className="menu-link dropdown-link menu-expand">
                  <Dropdown.Menu>
                    {item.dropdown.map(link => (
                      <Route render={({history}) => (
                        <Dropdown.Item key={link.id} text={link.text} onClick={() => history.push(link.link)}/>)}>
                      </Route>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )

            ))}
          </ul>
        </div>
        </div>
      </MenuComponent>
    );
  }
}

const MenuComponent = styled.div
  `
    
  .menu-wrapper {
    width: 100%;
    height: 6.5rem;
    display: flex;
    padding: 2rem 1rem;
    z-index: 10000;
    position: fixed;
    top: 0;
    transition: background-color .5s ease;
    background: transparent;
  }
  
  .burger {
    display: none;
  }
  .logo {
    position: fixed;
    top: 3rem;
    margin: 0 3rem;
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
    padding: 0 2rem;
  
  }
  
  .menu-item {
    list-style: none;
    margin: 1rem 3rem;
    
    
  }
  
  .menu-item-dropdown {
    color: black;
    list-style: none;
    margin: 0.2rem 2rem;
  }
  
  a, .menu-link {
    color: ${Colors.text};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color .2s ease;
  }
  
  a:hover, .menu-link:hover {
   color: ${Colors.fourth};
 
  }
  
  .dropdown-link {
    margin-top: 1rem;
  }
  
  .active {
    background-color: ${Colors.footer};
    opacity: 1;
    transition: background-color .5s ease;
    
  }
 
  
  
  @media(max-width: 560px) {
  .logo {
    margin: 0 0;
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
      opacity: 0;
      top: 0;
      left: 0;
      background: ${Colors.primary};
      transition: opacity 0.3s ease;
      display: none;
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
    
    .dropdown-link {
      margin: 2rem 2rem;
    }
    
    .show {
    transition-duration: 0.3s;
    opacity: 1;
    display: block;
    position: fixed;
    }
    
    .relative {
      position: relative;
    }
    
    
    .lineOpen-1{
      transform: rotate(45deg) translate(-1px , 7px);
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