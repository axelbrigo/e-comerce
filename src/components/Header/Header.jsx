import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logoHome from '../../assets/greenlogo.png';

class Header extends React.Component {
  render() {
    return (
      <nav className="header--nav">
        <ul>
          <NavLink activeClassName="active" to="woman">
            WOMAN
          </NavLink>
          <NavLink activeClassName="active" to="/men">
            MEN
          </NavLink>
          <NavLink activeClassName="active" to="/kids">
            KIDS
          </NavLink>
        </ul>

        <div className="home--logo">
          <NavLink to="/">
            <img src={logoHome} alt="Logo Home" />
          </NavLink>
        </div>

        <div>icono</div>
      </nav>
    );
  }
}

export default Header;
