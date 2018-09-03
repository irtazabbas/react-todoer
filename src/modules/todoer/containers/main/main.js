import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SpaceModel } from '../../../models-ref';
import Space from '../space/space';
import Aux from '../../../common/hocs/aux';

class TodoerMain extends Component {
  render() {
    if (!this.props.spaces.length) {
      this.props.loadAll();

      return <p>Loading...</p>;
    }

    return (
      <Aux>
        {
          this.props.spaces.map(
            space => <Space data={ space } key={ space.id } />
          )
        }
      </Aux>
    );
  }
}


const mapStateToProps = state => ({
  spaces: SpaceModel.all_sel(state)
});

const mapDispatchToProps = dispatch => ({
  loadAll: () => SpaceModel.loadAll(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoerMain);
