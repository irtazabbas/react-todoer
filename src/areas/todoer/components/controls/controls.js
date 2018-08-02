import React from 'react';
import Icon from '@material/react-material-icon';

import './controls.scss';

export default props => {
  return (
    <header className="mdc-top-app-bar mdc-top-app-bar--short controls">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <a className="material-icons mdc-top-app-bar__action-item">
            <Icon icon='waves' />
          </a>
          <a className="material-icons mdc-top-app-bar__action-item">
            <Icon icon='clear' />
          </a>
          <a className="material-icons mdc-top-app-bar__action-item">
            <Icon icon='create' />
          </a>
          <a className="material-icons mdc-top-app-bar__action-item">
            <Icon icon='next_week' />
          </a>
        </section>
      </div>
    </header>
  );
}
