import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Colors } from '../../../values/colors'
let colors = require('../../../values/colors.json');

class Header extends React.Component {
    render() {
      return (
        <div style={"background-color: " + colors.header}>
          <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
            <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
          </ul>
        </div>
      );
    }
  }
  export default Header;