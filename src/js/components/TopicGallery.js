import React from 'react'
import ImagePreview from './ImagePreview'
import Spinner from './Spinner'

function renderContent (media) {
  if (media.length) {
    return media.map(item => <ImagePreview key={item.id} {...item} />);
  } else {
    return <Spinner />
  }
}

const TopicGallery = ({media}) => {
  return (
    <div className="media-container">
      {renderContent(media)}
    </div>
  );
};

TopicGallery.displayName = 'TopicGallery';

export default TopicGallery;
