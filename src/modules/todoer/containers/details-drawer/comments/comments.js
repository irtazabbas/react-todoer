import React from 'react';
import Icon from '@material/react-material-icon';

import Comment from './comment/comment';
import NewComment from './new-comment/new-comment';

import './comments.scss';

export default props => {
  const comments = props.comments || [];
  console.log('comments', comments);
  return (
    <div className="comments">
      <div className="icon">
        <Icon icon="comment" />
      </div>
      {
        comments.map(
          comment => <Comment key={ comment.id } { ...comment }/>
        )
      }

      <NewComment doableId={ props.doableId }/>
    </div>
  );
};
