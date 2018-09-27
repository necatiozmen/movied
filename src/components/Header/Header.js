import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  return (
    <div className="header-container">
      <div className="header-nav">
        <div>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            <h1 className="header-title">DEMO Streaming</h1>
          </Link>
        </div>
        <div className="login">
          <div className="login-box"><p>Log in</p></div>
          <div className="login-box"><p>Start your free trial</p></div>
        </div>
      </div>
      <div className="entries-type">
        <div className="entries-type-title">
          <p>{props.headerTitle}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  headerTitle: state.movieList.headerTitle,
});

export default connect(mapStateToProps, null)(Header);
