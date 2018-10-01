import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSeries, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';

class Series extends Component {
  componentDidMount() {
    this.props.getSeries();
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
  getSeries: () => dispatch(getSeries()),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

Series.propTypes = {
  getSeries: PropTypes.func.isRequired,
  changeHeaderTitle: PropTypes.func.isRequired,
  series: PropTypes.array.isRequired,
  isReady: PropTypes.bool,
  isSomethingWrong: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Series);
