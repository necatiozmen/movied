import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import MainContent from '../../components/MainContent/MainContent';
import './Series.css';

class Series extends Component {

  componentDidMount() {
    !this.props.isAlreadyFetched ?  this.props.getMoviesDispatch() : null;
  };

  render() {
    return (
      <MainContent types={'series'} />
    );
  }
}

const mapStateToProps = state => ({
  isAlreadyFetched: state.movieList.getMoviesFromDatabase,
});

const mapDispatchToProps = dispatch => ({
  getMoviesDispatch: data => dispatch(getMovies(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Series);
