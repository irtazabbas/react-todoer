import React, { Component } from 'react';
import { connect } from 'react-redux';

import Head from './head/head';

import './details-drawer.scss';

class DetailsDrawer extends Component {
  state = {
    editingTitle: false,
    editingDescription: false
  }

  render() {
    let topClasses = [
      'details-drawer',
      'mdc-elevation--z15',
      'mdc-typography',
      (this.props.open ? 'open' : '')
    ].join(' ').trim();
  
    return (
      // TODO: replace palceholder data and make it editable
      <aside className={topClasses}>
        <Head
          title={ this.props.doable.title }
          description={ this.props.doable.description }
          doableId={ this.props.doable.id }
        />
        <hr/>
        {/* TODO: do the close button properly */}
        <button onClick={ this.props.close }>close</button>
        <div className="body">
          
        </div>
      </aside>
    );
  }
}


export default connect(null, null)(DetailsDrawer);
