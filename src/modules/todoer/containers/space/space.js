import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controls from '../../components/controls/controls';
import DoablesList from '../doables-list/doables-list';
import { DoableModel } from '../../../models-ref';

class Space extends Component {
  onNewList = () => {
    this.props.onNewList(this.props.data.id);
  }

  render() {
    return (
      <div className="space">
        <Controls add={ this.onNewList }/>
        {
          this.props.data.doables.map(
            dl => <DoablesList key={ dl.id } data={ dl } />
          )
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewList: spaceId => DoableModel.addToSpace(dispatch, spaceId)
  }
};

export default connect(null, mapDispatchToProps)(Space);
