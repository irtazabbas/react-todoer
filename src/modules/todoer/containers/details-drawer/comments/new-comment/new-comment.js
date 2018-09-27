import React from 'react';
import { connect } from 'react-redux';

import TextArea from '../../../../../common/containers/text-area/text-area';
import { CommentModel } from '../../../../../../store/orm/models';

const textAreaRef = React.createRef();

const newComment = props => {
  return (
    <TextArea
      placeholder="write a comment here..."
      fullWidth
      preciseActionDisplay
      rows="2"

      done={ value => props.newComment(props.doableId, value) }
      cancelled={ () => textAreaRef.current.clear() }
      ref={ textAreaRef }
    />
  )
};

const mapDispatchToProps = dispatch => ({
  newComment: (doableId, content) => CommentModel.add(
    dispatch, doableId, content
  )
});


export default connect(null, mapDispatchToProps)(newComment);
