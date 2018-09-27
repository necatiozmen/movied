import React from 'react';
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

export default Content;
