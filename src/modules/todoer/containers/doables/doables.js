import React, { Component } from 'react';

import Title from './title/title';
import Doable from './doable/doable';
import DoableAdder from './doable-adder/doable-adder';

import { random } from '../../../../services/utils';

import './doables.scss';

export default class Doables extends Component {

  constructor() {
    super();

    // dummy data
    this.state = {
      title: 'My doables',
      items: [
        { id: random(), title: 'item 1', complete: true},
        { id: random(), title: 'item 2', complete: true},
        { id: random(), title: 'item 3', complete: false},
        { id: random(), title: 'item 4', complete: false},
        { id: random(), title: 'item 5', complete: true}
      ]
    };
  }

  markComplete = id => {
    const items = this.state.items.slice();

    items.forEach(i => i.id === id && (i.complete = true));

    this.setState({items});
  }

  markInComplete = id => {
    const items = this.state.items.slice();

    items.forEach(i => i.id === id && (i.complete = false));

    this.setState({items});
  }

  remove = id => {
    const items = this.state.items.slice();

    items.splice(items.findIndex(i => i.id === id), 1);

    this.setState({items});
  }

  add = text => {
    const items = this.state.items.slice();
    
    items.push({
      id: random(),
      title: text,
      complete: false
    });

    this.setState({items});
  }

  update = (id, text) => {
    let items = this.state.items.slice();

    items.forEach(i => i.id === id && (i.title = text));

    this.setState({items});
  }

  updateTitle = title => {
    this.setState({title});
  }

  render() {
    let classes = ['mdc-card mdc-elevation--z15', 'doables'];

    if (!this.state.items.some(i => !i.complete)) {
      classes.push('complete');
    }

    return (
      <div className={ classes.join(' ') }>
        <Title title={ this.state.title }
          update={ this.updateTitle } />
        <div className="body">
          <ul className="mdc-list">
            {
              this.state.items.map(item => (
                <Doable text={ item.title }
                  id={ item.id }
                  key={ item.id }
                  complete={ item.complete }
                  markComplete={ this.markComplete }
                  markInComplete={ this.markInComplete }
                  remove={ this.remove }
                  update={ this.update } />
              ))
            }
            <DoableAdder addDoable={ this.add } />
          </ul>
        </div>
      </div>
    );
  }
};