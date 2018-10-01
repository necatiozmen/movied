import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Series from './Series/Series';
import Movies from './Movies/Movies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App-container">
            <Header />
            <Route exact={true} path="/" component={Home}/>
            <Route exact path="/series" component={Series}/>
            <Route exact path="/movies" component={Movies}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
