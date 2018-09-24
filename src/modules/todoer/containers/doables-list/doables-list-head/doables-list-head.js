import React, { Component } from 'react';
import Icon from '@material/react-material-icon';

import TextField from '../../../../common/containers/text-field/text-field';
import Options from '../../../components/options/options';
import Button from '../../../../common/components/button/button';
import Aux from '../../../../common/hocs/aux';

import './doables-list-head.scss';

export default class DoablesListHead extends Component {
  constructor() {
    super();
    this.state = { editing: false };
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    let minimizeOptions;

    if (this.props.minimizable) {
      minimizeOptions = this.props.minimized ?
        <Button clicked={ this.props.maximize }>
          <Icon icon="unfold_more" />
        </Button> :
        <Button clicked={ this.props.minimize }>
          <Icon icon="unfold_less" />
        </Button>
    }

    return (
      <header className="
        doables-list-title mdc-top-app-bar mdc-top-app-bar--short
      ">
        <section className="
          mdc-top-app-bar__section
          mdc-top-app-bar__section--align-start
        ">
          {
            this.state.editing ?
              <TextField
                inListHead
                placeholder="title"
                value={ this.props.title }
                blurred={ this.toggleEditing }
                enterKeyDown={ this.props.update }
                blurOnEnter
                enterOnBlur
              /> :
              <Aux>
                <span className="mdc-top-app-bar__title" onClick={ this.toggleEditing }>
                  { this.props.title }
                </span>
                <Options>
                  {
                    minimizeOptions
                  }
                  <Button clicked={ () => this.props.removeList() }>
                    <Icon icon="clear" />
                  </Button>
                </Options>
              </Aux>
          }
        </section>
      </header>
    )
  }
};
