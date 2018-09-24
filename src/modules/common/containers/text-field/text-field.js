import React, { Component } from 'react';

import './text-field.scss';

export default class TextField extends Component {
  
  constructor() {
    super();
    this.input = React.createRef();
  }

  handleKeyDown = event => {
    if (this.props.enterKeyDown && event.keyCode === 13 && event.target.value) {
      this.props.enterKeyDown(event.target.value);
      this.props.clearOnEnter && (event.target.value = '');
      this.props.blurOnEnter && this.input.current.blur();
    }
  }

  handleBlur = event => {
    if (this.props.enterOnBlur && event.target.value) {
      // can be used to save on blur
      this.props.enterKeyDown(event.target.value);
    }
    this.props.blurred && this.props.blurred();
  }

  render() {
    // custom classes here mostly useful for controlling styling from outside
    let parentClasses = ['mdc-text-field'].concat(
      this.props.customParentClasses || []
    );
    let inputClasses = ['mdc-text-field__input'].concat(
      this.props.customInputClasses || []
    );

    if (this.props.inListHead) {
      parentClasses.push(...['in-title', 'list-head']);
    }

    if (this.props.inDetailHead) {
      parentClasses.push('in-title');
      inputClasses.push('mdc-typography--headline6');
    }

    if (this.props.fullWidth) {
      parentClasses.push('mdc-text-field--fullwidth');
    }

    return (
      <div className={ parentClasses.join(' ') }>
        <input type="text"
          autoFocus
          className={ inputClasses.join(' ') }
          ref={ this.input }
          placeholder={ this.props.placeholder || 'type here' }
          defaultValue={ this.props.value }
          onBlur={ this.handleBlur }
          onKeyDown={ this.handleKeyDown } />
        <div className="mdc-line-ripple"></div>
      </div>
    );
  }
}
