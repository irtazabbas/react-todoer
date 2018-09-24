import React, { Component } from 'react';
import Icon from '@material/react-material-icon';

import Aux from '../../hocs/aux';
import Button from '../../components/button/button';

import './text-area.scss';

export default class TextArea extends Component {
  
  constructor() {
    super();
    this.input = React.createRef();
  }

  handleDone = () => {
    const value = this.input.current.value;
    if (value) {
      this.props.done(value);
    }
  }

  handleBlur = event => {
    if (this.props.doneOnBlur && event.target.value) {
      // can be used to save on blur
      this.props.done(event.target.value);
    }
    this.props.blurred && this.props.blurred();
  }

  render() {
    // custom classes here mostly useful for controlling styling from outside
    let parentClasses = ['mdc-text-field', 'mdc-text-field--textarea',
      'text-area'].concat(
        this.props.customParentClasses || []
      );
    let inputClasses = ['mdc-text-field__input'].concat(
      this.props.customInputClasses || []
    );

    if (this.props.fullWidth) {
      parentClasses.push('mdc-text-field--fullwidth');
    }

    return (
      <Aux>
        <div className={ parentClasses.join(' ') }>
          <textarea type="text"
            autoFocus
            className={ inputClasses.join(' ') }
            ref={ this.input }
            placeholder={ this.props.placeholder || 'type here' }
            defaultValue={ this.props.value }
            onBlur={ this.handleBlur }>
          </textarea>
        </div>
        <div className="actions">
          <Button clicked={ this.handleDone }>
            <Icon icon="check" />
          </Button>
          <Button clicked={ this.props.cancelled }>
            <Icon icon="clear" />
          </Button>
        </div>
      </Aux>
    );
  }
}