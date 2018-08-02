import React, { Component } from 'react';

import TextField from '../../../../common/containers/text-field/text-field';

export default class Title extends Component {
  constructor() {
    super();
    this.state = { editing: false };
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    return (
      <header className="mdc-top-app-bar mdc-top-app-bar--short"
        onClick={ this.toggleEditing }>
        <section className="
          mdc-top-app-bar__section
          mdc-top-app-bar__section--align-start
        ">
          {
            this.state.editing ?
              <TextField inTitle
                placeholder="title"
                value={ this.props.title }
                doneEditing={ this.toggleEditing }
                enterKeyDown={ this.props.update }
                blurOnEnter /> :
              <span className="mdc-top-app-bar__title">
                { this.props.title }
              </span>
          }
        </section>
      </header>
    )
  }
};