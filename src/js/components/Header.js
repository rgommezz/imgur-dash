import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <p className="header__title">{props.title}</p>
      <ul className="header__topics">
        {props.topics.map((topicName, index) => <li key={index} >{topicName}</li>)}
      </ul>
    </div>
  );
};

export default Header;
