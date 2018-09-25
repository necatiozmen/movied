import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import './Movies.css';

class Movies extends Component {

  render() {
    return (
      <div className="container">
        <div>MOVIES</div>
        <Content />
      </div>
    );
  }
}

export default Movies;
