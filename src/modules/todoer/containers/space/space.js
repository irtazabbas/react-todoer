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
    this.setState({ drawerOpen: false });
    this.props.onUnselectDoable(this.props.data.id);
  }

  render() {
    const selectedDoable = this.props.data.selectedDoable;
    
    return (
      <div className="space">
        <Controls add={ this.onNewList }/>
        <Drawer
          open={ !!selectedDoable }
          close={ this.closeDrawer }
          doableClicked={ this.onDoableClicked }
        />
        {
          this.props.data.doables.map(
            dl => <DoablesList
              key={ dl.id }
              data={ dl }
              doableClicked={ this.onDoableClicked }
              selected={ selectedDoable  }
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
    onUnselectDoable: spaceId => SpaceModel.unselectDoable(dispatch, spaceId)
  }
};

export default connect(null, mapDispatchToProps)(Space);
