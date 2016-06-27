import React from 'react';
import { Link } from 'react-router';

function isTopicActive(id, pathname) {
  const urlTopicId = pathname.split('/')[2];
  return urlTopicId == id;
}

function renderNavItems (items, pathname) {
  if(items.length) {
    return items.map(topic => {
      return <Link className={isTopicActive(topic.id, pathname) ? 'topics__topic--active' : 'topics__topic'} to={`/topics/${topic.id}`} key={topic.id}>{topic.name}</Link>
    })
  } else {
    return null;
  }
}

const Header = ({title, topics, location: {pathname}}) => {
  return (
    <header className="header">
      <Link to="/" className="header__title">{title}</Link>
      <nav className="header__topics">
        {renderNavItems(topics, pathname)}
      </nav>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
