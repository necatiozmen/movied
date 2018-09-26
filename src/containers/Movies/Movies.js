import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, changeHeaderTitle } from '../../actions';
import MainContent from '../../components/MainContent/MainContent';
import './Movies.css';

class Movies extends Component {

  componentDidMount() {
    !this.props.isAlreadyFetched ?  this.props.getMoviesDispatch() : null;
    this.props.changeHeaderTitle('Popular Movies');

  };

  render() {
    return (
      <MainContent types={'movie'} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviesDispatch: data => dispatch(getMovies(data)),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

const mapStateToProps = state => ({
  isAlreadyFetched: state.movieList.getMoviesFromDatabase,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
