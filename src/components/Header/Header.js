import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  return (
    <div className="header-container">
      <div className="blue-header-container">
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
      <div>
        <h2>{props.headerTitle}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  headerTitle: state.movieList.headerTitle,
});

export default connect(mapStateToProps, null)(Header);
