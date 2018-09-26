import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';
import './Movies.css';

class Movies extends Component {

  componentDidMount() {
    // this.props.movies.length === 0 ?  this.props.getMoviesDispatch() : null;
    this.props.getMoviesDispatch();
    this.props.changeHeaderTitle('Popular Movies');
  };

  render() {
    return (
      <Content
        entries={this.props.movies}
        types={'movie'}
        isReady={this.props.isReady}
        isSomethingWrong={this.props.isSomethingWrong}
        headerTit={'Popular Movies'}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  isReady: state.movieList.getEntriesFromDatabase,
  isSomethingWrong: state.movieList.getEntriesFromDatabaseFailed,
});

const mapDispatchToProps = dispatch => ({
  getMoviesDispatch: data => dispatch(getMovies(data)),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
