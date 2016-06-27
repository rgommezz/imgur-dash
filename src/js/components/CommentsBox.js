import React from 'react'

function renderComments (comments) {
  console.log(comments);
  return comments.map(comment => {
    return (
      <li className="comments__box" key={comment.id}>
        <span className="comments__badge">{comment.ups}</span>
        <h4>{comment.author}</h4>
        {comment.comment}
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
