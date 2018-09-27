import React from 'react';
import './PosterCard.css';

const PosterCard = props => {
  return (
    <div className="box-main" >
      <div>
        <img className="box-image" src={props.src}  />
      </div>
      <div className="box-title">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default PosterCard;
