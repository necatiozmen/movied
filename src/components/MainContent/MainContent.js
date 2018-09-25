import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainContent.css';

class MainContent extends Component {

  listItems = () => {
    return this.props.series.entries.map((item, index) =>
      <div className="box-main" key={index}>
        <div>
          <img className="box-image" src={item.images['Poster Art'].url}  />
        </div>
        <div>
          <p>{item.title}</p>
        </div>
      </div>
    );
  };

  render () {
    console.log(this.props.series.entries);
    let res = this.props.series.entries.length === 0 ?
     <div>Loading</div> : this.listItems();
    return (
      <div className="maincontent-container">
        <div className="innercontainer">
          {res}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  series: state.movieList.series,
});

export default connect(mapStateToProps, null)(MainContent);
