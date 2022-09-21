import React from 'react';
import s from './Header.module.css';
import IMG from './rodentia-icons_flag-ua.svg';

function Header() {
  return (
    <header className={s.header}>
      <img src={IMG} alt="Ukrainian Flag" />

    </header>
  );
}

export default Header;
