import React from 'react';
import './Content.css';

const Content = props => {
  const listItems = () => {
    if (!props.isSomethingWrong) {
      return props.entries.map((item, index) =>
        <div className="box-main" key={index}>
          <div>
            <img className="box-image" src={item.images['Poster Art'].url}  />
          </div>
          <div>
            <p>{item.title}</p>
          </div>
        </div>);
    }

    return <div><p>Oops.. Something went wrong</p></div>;
  };

  let content = !props.isReady && !props.isSomethingWrong
    ? <div>Loading...</div>
    : listItems();

  return (
    <div className="maincontent-container">
      <div className="innercontainer">
        {content}
      </div>
    </div>
  );
};

export default Content;
