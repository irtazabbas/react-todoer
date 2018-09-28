import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@material/react-material-icon';

import Head from './head/head';
import { DoableModel } from '../../../models-ref';
import List from '../list/list';
import DoableAdder from '../../components/doable-adder/doable-adder';
import Comments from './comments/comments';
import Button from '../../../common/components/button/button';

import './details-drawer.scss';

class DetailsDrawer extends Component {
  state = {
    editingTitle: false,
    editingDescription: false
  }

  addDoable = title => {
    this.props.addDoable(title, this.props.doable.id);
  }

  updateTitle = title => {
    this.props.updateTitle(this.props.doable.id, title);
  }

  remove = () => {
    this.props.remove(this.props.doable.id);
  }

  render() {
    const containerClasses = [
      'details-drawer-container',
      (this.props.open ? 'open' : '')
    ].join(' ').trim();

    const drawerClasses = [
      'details-drawer',
      'mdc-elevation--z15',
      'mdc-typography'
    ].join(' ');

    return (
      // TODO: replace palceholder data and make it editable
      <div className={ containerClasses }>
        <div className="details-drawer-controls">
          <Button clicked={ this.props.close }>
            <Icon icon="clear" />
          </Button>
          {/* TODO: implement */}
          {/* <Button>
            <Icon icon="arrow_back" />
          </Button> */}
        </div>
        <div className={ drawerClasses }>
          <Head
            title={ this.props.doable.title }
            description={ this.props.doable.description }
            doableId={ this.props.doable.id }
          />
          <div className="body">
            <div className="doables">
              <List doables={ this.props.doable.doables }
                doableClicked={ this.props.doableClicked }>

                <DoableAdder addDoable={ this.addDoable } />
                
              </List>
            </div>
            <Comments
              comments={ this.props.doable.comments }
              doableId={ this.props.doable.id }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  doable: DoableModel.getSelected_sel(state)
});

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


export default connect(mapStateToProps, mapDispatchToProps)(DetailsDrawer);
