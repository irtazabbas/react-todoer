import React, { Component } from 'react';
import Icon from '@material/react-material-icon';

import Aux from '../../hocs/aux';
import Button from '../../components/button/button';

import './text-area.scss';

export default class TextArea extends Component {
  state = {
    hideActions: false
  }
  
  constructor() {
    super();
    this.input = React.createRef();
  }

  componentDidMount() {
    const textarea = this.input.current;

    if (this.props.preciseActionDisplay) {
      textarea.addEventListener('keydown', () => {
        // timeout to make sure textarea.value is latest
        setTimeout(() => {
          this.setState({ hideActions: !textarea.value });
        })
      });
    }

    if (this.props.autoHeight !== false) {

      ['change', 'cut', 'paste', 'drop', 'keydown'].forEach(
        event => textarea.addEventListener(event, () => {
          setTimeout(() => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 10 +'px';
          })
        })
      );
    }
  }

  handleDone = () => {
    const value = this.input.current.value;
    if (value) {
      this.props.done(value);
      this.clear();
    }
  }

  handleBlur = event => {
    if (this.props.doneOnBlur && event.target.value) {
      // can be used to save on blur
      this.props.done(event.target.value);
    }
    this.props.blurred && this.props.blurred();
  }

  clear = () => {
    this.input.current.value = '';
    // calling set state here to trigger render so that actions can be hidden
    // if action hiding is enabled
    this.setState({});
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

    if (this.props.autoHeight !== false) {
      inputClasses.push('no-resize');
    }

    if (this.props.grayish) {
      inputClasses.push('grayish');
    }

    // TODO: hiding action has turned ugly, refactor
    let actions;
    if (
      !this.state.hideActions &&
      (!this.props.preciseActionDisplay || !!(this.input.current || {}).value)
    ) {
      actions = (
        <div className="actions">
          <Button clicked={ this.handleDone }>
            <Icon icon="check" />
          </Button>
          <Button clicked={ this.props.cancelled }>
            <Icon icon="clear" />
          </Button>
        </div>
      );
    }

    return (
      <Aux>
        <div className={ parentClasses.join(' ') }>
          <textarea type="text"
            autoFocus={ this.props.autoFocus !== false }
            className={ inputClasses.join(' ') }
            ref={ this.input }
            placeholder={ this.props.placeholder || 'type here' }
            defaultValue={ this.props.value }
            onBlur={ this.handleBlur }
            rows={ this.props.rows || 2 }>
          </textarea>
        </div>
        { actions }
      </Aux>
    );
  }
}
