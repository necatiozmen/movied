import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainContent.css';

class MainContent extends Component {

  listItems = () => {
    if (!this.props.isSomethingWrong) {
      return this.props.series.entries
      .filter((item, index) => item.releaseYear >= 2010 && item.programType === this.props.types)
      .sort((a, b) => a.title > b.title ? 1 : -1)
      .map((item, index) =>
        <div className="box-main" key={index}>
          <div>
            <img className="box-image" src={item.images['Poster Art'].url}  />
          </div>
          <div>
            <p>{item.title}</p>
          </div>
        </div>
      );
    } else {
      return <div><p>Oops.. Something went wrong</p></div>;
    }
  };

  render () {
    console.log(this.props.series.entries);
    let result = !this.props.isReady  && !this.props.isSomethingWrong ?
      <div>Loading...</div> : this.listItems();
    return (
      <div className="maincontent-container">
        <div className="innercontainer">
          {result}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  series: state.movieList.series,
  isReady: state.movieList.getMoviesFromDatabase,
  isSomethingWrong: state.movieList.getMoviesFromDatabaseFailed,
});

export default connect(mapStateToProps, null)(MainContent);
// listItems = () => {
//   return this.props.series.entries.map((item, index) =>
//     <div className="box-main" key={index}>
//       <div>
//         <img className="box-image" src={item.images['Poster Art'].url}  />
//       </div>
//       <div>
//         <p>{item.title}</p>
//       </div>
//     </div>
//   );
// };
