import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeHeaderTitle } from '../../actions';
import './Home.css';

class Home extends Component {

  componentDidMount() {
    this.props.changeHeaderTitle('Popular Titles');
  }

  render() {
    return (
      <div className="container">
        <div className="home-container">
          <div className="box-container">
            <Link to='/series' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className="box">
                <h1 style={{ fontWeight: '400' }}>SERIES</h1>
              </div>
            </Link>
            <div className="box-under-title"><p>Popular Series</p></div>
          </div>
          <div className="box-container">
            <Link to='/movies' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className="box">
                <h1 style={{ fontWeight: '400' }}>MOVIES</h1>
              </div>
            </Link>
            <div className="box-under-title"> <p>Popular Movies</p></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

export default connect(null, mapDispatchToProps)(Home);
