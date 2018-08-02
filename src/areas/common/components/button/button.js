import React from 'react';

import './button.scss';

export default props => {
  return (
    <button className="mdc-button"
      onClick={ props.clicked }>
      { props.children }
    </button>
  )
}