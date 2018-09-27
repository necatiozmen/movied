import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="content-container">
          <div className="box-container">
            <Link to='/series' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className="box">
                <h1 style={{ fontWeight: '400' }}>SERIES</h1>
              </div>
            </Link>
            <div className="box-under-title"><p>Popular Series</p></div>
          </div>
          <div className="box-container">
            <Link to='/movies' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className="box">
                <h1 style={{ fontWeight: '400' }}>MOVIES</h1>
              </div>
            </Link>
            <div className="box-under-title"> <p>Popular Movies</p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
