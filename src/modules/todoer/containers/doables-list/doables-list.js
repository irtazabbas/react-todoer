import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './title/title';
import Doable from './doable/doable';
import DoableAdder from './doable-adder/doable-adder';
import { DoablesListModel, DoableModel } from '../../../models-ref';

import { random } from '../../../../services/utils';

import './doables-list.scss';

class DoablesList extends Component {
  addDoable = text => {
    this.props.addDoable(text, this.props.data.id);
  }

  updateTitle = title => {
    this.props.updateTitle(this.props.data.id, title);
  }

  render() {
    let classes = ['mdc-card mdc-elevation--z15', 'doables'];
    const doables = this.props.data.doables;

    if (doables.length && !doables.some(i => !i.complete)) {
      classes.push('complete');
    }

    return (
      <div className={ classes.join(' ') }>
        <Title title={ this.props.data.title }
          update={ this.updateTitle } />
        <div className="body">
          <ul className="mdc-list">
            {
              doables.map(item => (
                <Doable text={ item.text }
                  id={ item.id }
                  key={ item.id }
                  complete={ item.complete }
                  markComplete={ this.props.markComplete }
                  markInComplete={ this.props.markInComplete }
                  remove={ this.props.removeDoable }
                  update={ this.props.updateDoableText } />
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
    updateTitle: (id, title) => DoablesListModel.updateTitle(
      dispatch, id, title
    ),
    addDoable: (text, doablesListId) => DoableModel.add(
      dispatch, text, doablesListId
    ),
    removeDoable: id => DoableModel.remove(dispatch, id),
    markComplete: id => DoableModel.markComplete(dispatch, id),
    markInComplete: id => DoableModel.markInComplete(dispatch, id),
    updateDoableText: (id, text) => DoableModel.updateText(dispatch, id, text)
  }
};

export default connect(null, mapDispatchToProps)(DoablesList);
