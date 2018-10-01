import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
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
  getMovies: () => dispatch(getMovies()),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  changeHeaderTitle: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  isReady: PropTypes.bool,
  isSomethingWrong: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
