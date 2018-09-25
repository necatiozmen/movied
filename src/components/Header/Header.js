import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  return (
    <div className="header-container">
      <Link to='/'>
        <div className="title">
          <h1>DEMO Streaming</h1>
        </div>
      </Link>
      <div className="header-login">
        <div>Login</div>
        <div>Start your free trial</div>
      </div>
    </div>
  );
};

export default Header;
