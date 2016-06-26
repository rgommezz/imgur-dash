import React from 'react';
import { Link } from 'react-router';

function isTopicActive(id, pathname) {
  const urlTopicId = pathname.split('/')[2];
  console.log(urlTopicId, id);
  return urlTopicId == id;
}

function renderNavItems (items, pathname) {
  if(items.length) {
    return items.map(topic => {
      return <Link className={isTopicActive(topic.id, pathname) ? 'topics__topic--active' : 'topics__topic'} to={`/topic/${topic.id}`} key={topic.id}>{topic.name}</Link>
    })
  } else {
    return null;
  }
}

const Header = ({title, topics, location: {pathname}}) => {
  return (
    <header className="header">
      <p className="header__title">{title}</p>
      <nav className="header__topics">
        {renderNavItems(topics, pathname)}
      </nav>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
