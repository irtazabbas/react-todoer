import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controls from '../../components/controls/controls';
import DoablesList from '../doables-list/doables-list';
import { DoableModel } from '../../../models-ref';
import Drawer from '../details-drawer/details-drawer';
import { SpaceModel } from '../../../../store/orm/models';

class Space extends Component {
  state = {
    drawerOpen: false
  }

  onNewList = () => {
    this.props.onNewList(this.props.data.id);
  }

  onDoableClicked = doableId => {
    this.props.onDoableClicked(this.props.data.id, doableId);
    this.openDrawer();
  }

  openDrawer = () => {
    this.setState({ drawerOpen: true });
  }

  closeDrawer = () => {
    this.setState({ drawerOpen: false });
  }

  render() {
    const selectedDoable = this.props.data.selectedDoable || {};
    return (
      <div className="space">
        <Controls add={ this.onNewList }/>
        <Drawer
          open={ this.state.drawerOpen }
          close={ this.closeDrawer }
          doable={ selectedDoable } />
        {
          this.props.data.doables.map(
            dl => <DoablesList
              key={ dl.id }
              data={ dl }
              doableClicked={ this.onDoableClicked }
              selected={ selectedDoable.id  }
            />
          )
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewList: spaceId => DoableModel.addToSpace(dispatch, spaceId),
    onDoableClicked: (spaceId, doableId) => SpaceModel.setSelectedDoable(
      dispatch, spaceId, doableId
    )
  }
};

export default connect(null, mapDispatchToProps)(Space);
