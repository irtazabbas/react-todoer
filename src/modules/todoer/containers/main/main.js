import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SpaceModel } from '../../../models-ref';
import Space from '../space/space';
import Aux from '../../../common/hocs/aux';

class TodoerMain extends Component {
  render() {
    if (!this.props.space) {
      this.props.loadAll();

      return <p>Loading...</p>;
    }

    return (
      <Aux>
        <Space data={ this.props.space } />

        {/* Some control for switching between spaces will go here */}
      </Aux>
    );
  }
}


const mapStateToProps = state => ({
  space: SpaceModel.get_selected_sel(state)
});

const mapDispatchToProps = dispatch => ({
  loadAll: () => SpaceModel.loadAll(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoerMain);
