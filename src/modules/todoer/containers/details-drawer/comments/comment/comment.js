import React from 'react';
import { connect } from 'react-redux';

import TextArea from '../../../../../common/containers/text-area/text-area';
import Aux from '../../../../../common/hocs/aux';

import './comment.scss';
import { CommentModel } from '../../../../../../store/orm/models';

const Comment = props => {
  const { content, createdAt, editing } = props;
  return (
    <div className="comment">
      {
        !editing ?
          <Aux>
            <p className="content">{ content }</p>
            <ul className="comment-options">
              <li>
                <span className="meta">{ createdAt.toLocaleString() }</span>
              </li>
              <li className="action">
                <span>
                  <a onClick={ () => props.remove(props.id) }>
                    delete
                  </a>
                </span>
              </li>
            </ul>
          </Aux> :
          <TextArea
            fullWidth
            value={ props.content }   
          />
      }
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  remove: id => CommentModel.remove(dispatch, id)
});

export default connect(null, mapDispatchToProps)(Comment);
