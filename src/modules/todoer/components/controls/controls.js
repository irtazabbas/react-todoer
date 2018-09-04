import React from 'react';
import Icon from '@material/react-material-icon';

import './controls.scss';

export default props => {
  return (
    <header className="mdc-top-app-bar mdc-top-app-bar--short controls">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <a className="material-icons mdc-top-app-bar__action-item">
            <Icon icon='add' onClick={ props.add }/>
          </a>
        </section>
      </div>
    </header>
  );
}
