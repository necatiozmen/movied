import React from 'react';
import PropTypes from 'prop-types';
import PosterCard from '../PosterCard/PosterCard';
import './Content.css';

const Content = props => {
  const listItems = () => {
    if (!props.isSomethingWrong) {
      return props.entries.map((item, index) =>
       <PosterCard
         key={index}
         src={item.images['Poster Art'].url}
         title={item.title}
       />
      );
    }

    return <div><p>Oops.. Something went wrong</p></div>;
  };

  let content = !props.isReady && !props.isSomethingWrong
    ? <div>Loading...</div>
    : listItems();

  return (
    <div className="content-container">
      <div className="inner-container">
        {content}
      </div>
    </div>
  );
};

Content.propTypes = {
  entries: PropTypes.array.isRequired,
  isReady: PropTypes.bool,
  isSomethingWrong: PropTypes.bool,
};

export default Content;
