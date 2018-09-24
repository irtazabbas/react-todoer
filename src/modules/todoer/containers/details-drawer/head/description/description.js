import React from 'react';

import TextArea from '../../../../../common/containers/text-area/text-area';

import './description.scss';

export default props => {
  let content;

  const handleDone = value => {
    props.updateDescription(value);
    props.toggleEditing();
  };

  if (props.editing) {
    content = (
      <TextArea
        fullWidth
        done={ handleDone }
        cancelled={ props.toggleEditing }
        value={ props.description }
      />
    )
  } else if (props.description) {
    content = <p onClick={ props.toggleEditing }>{ props.description }</p>;
  } else {
    content = (
      <p className="placeholder"
        onClick={ props.toggleEditing }>
        description here...
      </p>
    );
  }

  return (
    <div className="description">
      { content }
    </div>
  )
}
