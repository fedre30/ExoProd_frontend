import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Colors from '../../styles/colors';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <FooterComponent>
        <div className="logo">© ExoProd</div>
        <div className="link-container">
          <ul className="link-list">

              <li className="link"><Link to="/">A propos</Link></li>


              <li className="link"><Link to="/">Contact</Link></li>


              <li className="link"><Link to="/">Mentions légales</Link></li>

          </ul>
        </div>

      </FooterComponent>
    );
  }
}

const FooterComponent = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  padding: 2rem 2rem 3rem 2rem;
  background-color: ${Colors.footer};
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  color: ${Colors.text};
  
  
  .logo {
    font-size: 2rem;
    
  
  }
  
  .link-container, .link-list {
    display: flex;
   
  }
  
  .link {
    margin: 0 2rem 0.5rem 0;
    font-size: 1.3rem;
   
   
  }
  
  .link::after{
    content: '|';
    display: inline-block;
    margin-left: 2rem;
  }
  
  .link:last-child::after{
    display: none;
  }
  
 
  a {
      color: ${Colors.text}
      transition: color .2s ease;
    }
    
    a:hover {
      color: ${Colors.fourth}
    }
    
    @media(max-width: 560px) {
      .logo {
      font-size: 1rem;
      }
      
      .link {
      font-size: 0.8rem;
      margin: 0 0.5rem 0.5rem 0;
      }
      
      .link::after{
        margin-left: 0.5rem;
        }
      
    }
  
  
  

  
  `
;


export default Footer;
