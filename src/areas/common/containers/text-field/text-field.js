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

  render() {
    let classes = ['mdc-text-field'];

    if (this.props.inTitle) {
      classes.push('in-title');
    }

    if (this.props.fullWidth) {
      classes.push('mdc-text-field--fullwidth');
    }

    return (
      <div className={ classes.join(' ') }>
        <input type="text"
          autoFocus
          className="mdc-text-field__input"
          ref={ this.input }
          placeholder={ this.props.placeholder || 'type here' }
          defaultValue={ this.props.value }
          onBlur={ this.props.blurred }
          onKeyDown={ this.handleKeyDown } />
        <div className="mdc-line-ripple"></div>
      </div>
    );
  }
}