// Nav.js
import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-panel">
        <div className="nav-item">
          <h2>Ціни</h2>
          <input type="number" placeholder="Мінімальна ціна" />
          <input type="number" placeholder="Максимальна ціна" />
        </div>
        <div className="nav-item">
          <h2>Область</h2>
          <input type="text" placeholder="Введіть місце" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
