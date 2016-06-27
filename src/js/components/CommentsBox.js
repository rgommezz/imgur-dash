import React from 'react'

function renderComments (comments) {
  return comments.map(comment => {
    return (
      <li className="comments__box" key={comment.id}>
        <span className="comments__badge">{comment.ups}</span>
        <h4>{comment.author}</h4>
        <span className="comments__comment">{comment.comment}</span>
      </li>
    )
  })
}

const CommentsBox = ({ comments }) => {
  return (
    <ul className="comments__body">
      {renderComments(comments)}
    </ul>
  )
};

CommentsBox.displayName = 'CommentsBox';

export default CommentsBox;
