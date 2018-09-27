import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSeries, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';
import './Series.css';

class Series extends Component {

  componentDidMount() {
    // this.props.series.length === 0 ?  this.props.getSeriesDispatch() : null;
    this.props.getSeriesDispatch();
    this.props.changeHeaderTitle('Popular Series');
  };

  render() {
    return (
      <Content
        entries={this.props.series}
        types={'series'}
        isReady={this.props.isReady}
        isSomethingWrong={this.props.isSomethingWrong}
        headerTit={'Popular Series'}
      />
    );
  }
}

const mapStateToProps = state => ({
  series: state.movieList.series,
  isReady: state.movieList.getEntriesFromDatabase,
  isSomethingWrong: state.movieList.getEntriesFromDatabaseFailed,
});

const mapDispatchToProps = dispatch => ({
  getSeriesDispatch: data => dispatch(getSeries(data)),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Series);
