import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import MainContent from '../../components/MainContent/MainContent';
import './Series.css';

class Series extends Component {

  componentDidMount() {
    this.props.getMoviesDispatch();
  };

  render() {
    return (
      <MainContent />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviesDispatch: data => dispatch(getMovies(data)),
});

export default connect(null, mapDispatchToProps)(Series);
