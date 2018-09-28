import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';

class Movies extends Component {

  componentDidMount() {
    this.props.getMoviesDispatch();
    this.props.changeHeaderTitle('Popular Movies');
  };

  render() {
    return (
      <Content
        entries={this.props.movies}
        isReady={this.props.isReady}
        isSomethingWrong={this.props.isSomethingWrong}
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
