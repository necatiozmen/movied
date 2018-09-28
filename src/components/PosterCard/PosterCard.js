import React from 'react';
import PropTypes from 'prop-types';
import './PosterCard.css';

const PosterCard = props => {
  return (
    <div className="box-main" >
      <div>
        <img className="box-image" src={props.src} alt="posters" />
      </div>
      <div className="box-title">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

PosterCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default PosterCard;
