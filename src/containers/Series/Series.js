import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, changeHeaderTitle } from '../../actions';
import MainContent from '../../components/MainContent/MainContent';
import './Series.css';

class Series extends Component {

  componentDidMount() {
    this.props.changeHeaderTitle('Popular Series');
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
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Series);
