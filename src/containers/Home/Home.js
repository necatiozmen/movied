import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="content-container">
          <div className="box-container">
            <Link to='/series'>
              <div>
                <div className="box">
                  <h3 className="box-title">SERIES</h3>
                </div>
                <div> <p>Popular Series</p></div>
              </div>
            </Link>
            <Link to='/movies'>
              <div>
                <div className="box">
                  <h3 className="box-title">Movies</h3>
                </div>
                <div><p>Popular Titles</p></div>
              </div>
           </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
