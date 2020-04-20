import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/giphy.gif';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper grey darken-4">
          <img src={logo} style={{height: '50px'}} />
          <a href="/Dashboard" class="brand-logo center">
            Eternal Space
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
