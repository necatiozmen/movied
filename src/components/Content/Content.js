import React, { Component } from 'react';
import './Content.css';

class Content extends React.Component {

  render() {
    return (
      <div className="content-container">
        <div className="content-title">
          <p>Popular Titles</p>
        </div>
        <div className="box-container">
          <div>
            <div className="box">
              <h3 className="box-title">SERIES</h3>
            </div>
            <div> <p>Popular Series</p></div>
          </div>
          <div>
            <div className="box">
              <h3 className="box-title">SERIES</h3>
            </div>
            <div><p>Popular Series</p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
