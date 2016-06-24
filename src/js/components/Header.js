import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <p className="header__title">{props.title}</p>
    </div>
  );
};

export default Header;
