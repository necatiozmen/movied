import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
