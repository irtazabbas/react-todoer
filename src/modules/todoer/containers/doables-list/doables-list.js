import React, { Component } from 'react';
import { connect } from 'react-redux';

import DoablesListHead from './doables-list-head/doables-list-head';
import Doable from './doable/doable';
import DoableAdder from './doable-adder/doable-adder';
import { DoableModel } from '../../../models-ref';

import './doables-list.scss';

class DoablesList extends Component {
  addDoable = title => {
    this.props.addDoable(title, this.props.data.id);
  }

  updateTitle = title => {
    this.props.updateTitle(this.props.data.id, title);
  }

  remove = () => {
    this.props.remove(this.props.data.id);
  }

  render() {
    let classes = ['mdc-card mdc-elevation--z15', 'doables'];
    const doables = this.props.data.doables;

    if (doables.length && !doables.some(i => !i.complete)) {
      classes.push('complete');
    }

    return (
      <div className={ classes.join(' ') }>
        <DoablesListHead title={ this.props.data.title }
          update={ this.updateTitle }
          removeList={ this.remove } />
        <div className="body">
          <ul className="mdc-list">
            {
              doables.map(item => (
                <Doable title={ item.title }
                  id={ item.id }
                  key={ item.id }
                  complete={ item.complete }
                  clicked={ this.props.doableClicked }
                  selected={ this.props.selected === item.id }
                />
              ))
            }
            <DoableAdder addDoable={ this.addDoable } />
          </ul>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateTitle: (id, title) => DoableModel.updateTitle(
      dispatch, id, title
    ),
    addDoable: (title, doableId) => DoableModel.addToDoable(
      dispatch, doableId, title
    ),
    remove: id => DoableModel.remove(dispatch, id)
  }
};

export default connect(null, mapDispatchToProps)(DoablesList);
