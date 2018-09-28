import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSeries, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';

class Series extends Component {

  componentDidMount() {
    this.props.getSeriesDispatch();
    this.props.changeHeaderTitle('Popular Series');
  };

  render() {
    return (
      <Content
        entries={this.props.series}
        isReady={this.props.isReady}
        isSomethingWrong={this.props.isSomethingWrong}
      />
    );
  }
}

const mapStateToProps = state => ({
  series: state.serieList.series,
  isReady: state.serieList.getEntriesFromDatabase,
  isSomethingWrong: state.serieList.getEntriesFromDatabaseFailed,
});

const mapDispatchToProps = dispatch => ({
  getSeriesDispatch: data => dispatch(getSeries(data)),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Series);
