import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../../common/hocs/aux';
import Controls from '../../components/controls/controls';
import Doables from '../doables/doables';
import { DoablesListModel } from '../../../models-ref';

class TodoerMain extends Component {
  render() {
    return (
      <Aux>
        <Controls add={ this.props.onNewList }/>

        {/* <Doables /> */}
        {/* {
          this.props.doablesLists.map(
            dl => <p>{ dl }</p>
          )
        } */}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    doablesLists: DoablesListModel.all_sel(state)
  };
};

const mapDispatch = dispatch => {
  return {
    onNewList: () => DoablesListModel.add(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatch)(TodoerMain);
