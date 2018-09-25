import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <div className="header-container">
      <div className="title">
        <h1>DEMO Streaming</h1>
      </div>
      <div className="header-login">
        <div>Login</div>
        <div>Start your free trial</div>
      </div>
    </div>
  );
};

export default Header;
