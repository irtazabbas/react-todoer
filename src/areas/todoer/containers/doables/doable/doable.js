import React from 'react';
import Icon from '@material/react-material-icon';
import Button from '../../../../common/components/button/button';


export default props => {
  let classes = ['mdc-list-item', 'mdc-list-item--disabled'];

  let CompletionOption = (
    <Button clicked={ () => props.markComplete(props.id) }>
      <Icon icon="check_box_outline_blank" />
    </Button>
  );
  
  if (props.complete) {
    classes.push('complete');
    CompletionOption = (
      <Button clicked={ () => props.markInComplete(props.id) }>
        <Icon icon="check_box"/>
      </Button>
    );
  }

  return (
    <li className={ classes.join(' ') }>
      { props.text }
      <div className="options">
        <div className="option">
          { CompletionOption }
        </div>
        <div className="option">
          <Button clicked={ () => props.remove(props.id) }>
            <Icon icon="clear" />
          </Button>
        </div>
      </div>
    </li>
  );
}