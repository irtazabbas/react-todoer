import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../../common/hocs/aux';
import Controls from '../../components/controls/controls';
import DoablesList from '../doables-list/doables-list';
import { DoablesListModel } from '../../../models-ref';

class TodoerMain extends Component {
  render() {
    console.log(this.props.doablesLists);
    return (
      <Aux>
        <Controls add={ this.props.onNewList }/>

        {/* <DoablesList /> */}
        {
          this.props.doablesLists.map(
            dl => <DoablesList key={ dl.id } data={ dl } />
          )
        }
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    doablesLists: DoablesListModel.all_sel(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNewList: () => DoablesListModel.add(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoerMain);
