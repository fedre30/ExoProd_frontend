import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';


const MenuComponent = styled.div
  `
  width: 100%;
  display: flex;
  .logo {
    margin: 1.5rem 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: ${Colors.text};
    font-family: ${Fonts.logo};
  }
  .menu-list{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem;
  a {
  color: ${Colors.text};
  text-decoration: none;
  }
  }
  
  .menu-item {
    list-style: none;
    margin: 1rem 3rem;
    
    
  }
  
  `
;

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

    }
  }

  render() {
    return (
      <MenuComponent>
        <div className="logo">exoprod</div>
        <ul className="menu-list">
          {this.state.menuItems.map(item =>(
            <Link to={item.link}><li className="menu-item">{item.name}</li></Link>
          ))}
        </ul>
      </MenuComponent>
    );
  }
}

export default Menu;
