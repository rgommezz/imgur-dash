import React from 'react'
import ImagePreview from '../components/ImagePreview'

const TopicGallery = ({media}) => {
  return (
    <div className="media-container">
      {media.map(item => <ImagePreview key={item.id} {...item} />)}
    </div>
  );
};

TopicGallery.displayName = 'TopicGallery';

export default TopicGallery;
