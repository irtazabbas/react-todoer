import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@material/react-material-icon';

import { DoableModel } from '../../../../models-ref';
import Button from '../../../../common/components/button/button';
import TextField from '../../../../common/containers/text-field/text-field';
import Aux from '../../../../common/hocs/aux';

import './doable.scss';


class Doable extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    };
  }

  update = text => {
    this.props.updateText(this.props.id, text);
    this.setState({editing: false});
  }

  render() {
    let classes = ['mdc-list-item', 'mdc-list-item--disabled', 'doable'];

    let CompletionOption = (
      <Button clicked={ () => this.props.markComplete(this.props.id) }>
        <Icon icon="check_box_outline_blank" />
      </Button>
    );
    
    if (this.props.complete) {
      classes.push('complete');
      CompletionOption = (
        <Button clicked={ () => this.props.markInComplete(this.props.id) }>
          <Icon icon="check_box" />
        </Button>
      );
    }

    let content;

    if (!this.state.editing) {
      content = (
        <Aux>
          { this.props.text }
          <div className="options">
            <div className="option">
              { CompletionOption }
            </div>
            <div className="option">
              <Button clicked={ () => this.setState({editing: true}) }>
                <Icon icon="edit" />
              </Button>
            </div>
            <div className="option">
              <Button clicked={ () => this.props.remove(this.props.id) }>
                <Icon icon="clear" />
              </Button>
            </div>
          </div>
        </Aux>
      );
    } else {
      content = (
        <TextField 
          fullWidth
          value={ this.props.text }
          enterKeyDown={ this.update }
          blurred={ () => this.setState({editing: false}) } />
      );
    }


    return (
      <li className={ classes.join(' ') }>
        { content }
      </li>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return {
    remove: id => DoableModel.remove(dispatch, id),
    markComplete: id => DoableModel.markComplete(dispatch, id),
    markInComplete: id => DoableModel.markInComplete(dispatch, id),
    updateText: (id, text) => DoableModel.updateText(dispatch, id, text)
  }
};

export default connect(null, mapDispatchToProps)(Doable);