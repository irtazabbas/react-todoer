import React from 'react';

import Doable from '../doable/doable';

export default props => {
  return (
    <ul className="mdc-list">
      {
        (props.doables || []).map(doable => (
          <Doable title={ doable.title }
            id={ doable.id }
            key={ doable.id }
            complete={ doable.complete }
            clicked={ props.doableClicked }
            selected={ props.selected === doable.id }
          />
        ))
      }
      {
        props.children
      }
    </ul>
  );
};
