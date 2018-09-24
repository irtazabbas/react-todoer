import React from 'react';

import './button.scss';

export default props => {
  const handleClick = e => {
    props.allowPopagation || e.stopPropagation();
    props.clicked(e);
  };

  return (
    <button className="mdc-button"
      onClick={ handleClick }>
      { props.children }
    </button>
  )
}
