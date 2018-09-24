import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controls from '../../components/controls/controls';
import DoablesList from '../doables-list/doables-list';
import { DoableModel } from '../../../models-ref';
import Drawer from '../details-drawer/details-drawer';
import { SpaceModel } from '../../../../store/orm/models';

class Space extends Component {
  onNewList = () => {
    this.props.onNewList(this.props.data.id);
  }

  onDoableClicked = doableId => {
    this.props.onDoableClicked(this.props.data.id, doableId);
  }

  closeDrawer = () => {
    this.props.closeDrawer(this.props.data.id);
  }

  render() {
    const { selectedDoable, drawerOpen } = this.props.data;
    
    return (
      <div className="space">
        <Controls add={ this.onNewList }/>
        <Drawer
          open={ !!selectedDoable && drawerOpen }
          close={ this.closeDrawer }
          doableClicked={ this.onDoableClicked }
        />
        {
          this.props.data.doables.map(
            dl => <DoablesList
              key={ dl.id }
              data={ dl }
              doableClicked={ this.onDoableClicked }
              selected={ drawerOpen && selectedDoable  }
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
    ),
    closeDrawer: spaceId => SpaceModel.closeDrawer(dispatch, spaceId)
  }
};

export default connect(null, mapDispatchToProps)(Space);
