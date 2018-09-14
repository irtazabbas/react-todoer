import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@material/react-material-icon';

import { DoableModel } from '../../../../models-ref';
import Button from '../../../../common/components/button/button';
import TextField from '../../../../common/containers/text-field/text-field';
import Options from '../../../components/options/options';
import Aux from '../../../../common/hocs/aux';

import './doable.scss';


class Doable extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    };
  }

  update = title => {
    this.props.updateTitle(this.props.id, title);
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

    if (this.props.selected) {
      classes.push('selected');
    }

    let content;

    if (!this.state.editing) {
      content = (
        <Aux>
          { this.props.title }
          <Options>
              { CompletionOption }
              <Button clicked={ () => this.setState({editing: true}) }>
                <Icon icon="edit" />
              </Button>
              <Button clicked={ () => this.props.remove(this.props.id) }>
                <Icon icon="clear" />
              </Button>
          </Options>
        </Aux>
      );
    } else {
      content = (
        <TextField 
          fullWidth
          value={ this.props.title }
          enterKeyDown={ this.update }
          blurred={ () => this.setState({editing: false}) } />
      );
    }


    return (
      <li className={ classes.join(' ') }
        onClick={ () => this.props.clicked(this.props.id) }>
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
    updateTitle: (id, title) => DoableModel.updateTitle(dispatch, id, title)
  }
};

export default connect(null, mapDispatchToProps)(Doable);
