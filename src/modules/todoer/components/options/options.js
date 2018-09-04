import React from 'react';

import './options.scss';

export default props => (
  <div className="options">
    {
      (Array.isArray(props.children) ? props.children : [props.children]).map(
        (child, i) => <div className="option" key={ i }>
          { child }
        </div>
      )
    }
  </div>
);
