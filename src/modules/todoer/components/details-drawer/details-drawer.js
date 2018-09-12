import React from 'react';

import './details-drawer.scss';

export default props => {
  let topClasses = [
    'details-drawer',
    'mdc-elevation--z15',
    'mdc-typography',
    (props.open ? 'open' : '')
  ].join(' ').trim();

  return (
    // TODO: replace palceholder data and make it editable
    <aside className={topClasses}>
      <header>
        <h4 className="mdc-typography--headline6">{ props.doable.title }</h4>
        <p className="mdc-typography--subtitle1">
          This is some description about the current doable right here
          which can go as long as you want it to go
        </p>
      </header>
      <hr/>
      {/* TODO: do the close button properly */}
      <button onClick={ props.close }>close</button>
    </aside>
  );
}
