//Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">О компании</Link></li>
        <li><Link to="/portfolio">Примеры работ</Link></li>
        <li><Link to="/contact">Контактная информация</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
