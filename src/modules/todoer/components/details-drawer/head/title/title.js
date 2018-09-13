import React from 'react';

import TextField from '../../../../../common/containers/text-field/text-field';

export default props => {
  let content = (
    <h4 className="mdc-typography--headline6" onClick={ props.toggleEditing }>
      { props.title }
    </h4>
  );

  if (props.editing) {
    content = (
      <TextField
        inTitle
        placeholder="title"
        value={ props.title }
        blurred={ props.toggleEditing }
        enterKeyDown={ props.updateTitle }
        blurOnEnter
        enterOnBlur
      />
    );
  }

  return content;
}
