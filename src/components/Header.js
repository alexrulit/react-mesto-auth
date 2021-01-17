import React from 'react';
import Logo from '../images/logo.svg';

function Header(props) {
    return(
    <header className="header">
      <img className="header__logo" src={Logo} alt="Место" />
      {props.children}
    </header>
    );
}

export default Header;