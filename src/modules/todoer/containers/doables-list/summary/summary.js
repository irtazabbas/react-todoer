import React from 'react';

import './summary.scss';

export default props => {
  const total = props.data.doables.length;

  return (
    <div className="mdc-typography--caption summary">
      <p>
        { total } { total > 1 ? 'doables' : 'doable' } collapsed.
      </p>
    </div>
  );
};
