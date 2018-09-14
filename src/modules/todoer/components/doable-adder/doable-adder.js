import React from 'react';

import TextField from '../../../common/containers/text-field/text-field';

import './doable-adder.scss';

export default props => {
  return (
    <li className="mdc-list-item mdc-list-item--disabled doable-adder">
      <TextField
        placeholder="add doable"
        fullWidth
        enterKeyDown={ props.addDoable }
        clearOnEnter />
    </li>
  );
};