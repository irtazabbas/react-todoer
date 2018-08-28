import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../../common/hocs/aux';
import Controls from '../../components/controls/controls';
import Doables from '../doables/doables';
import { DoablesList } from '../../../models-ref';

class TodoerMain extends Component {
  render() {
    console.log(this.props.doablesLists);
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
      doablesLists: state.doablesList
  };
};

const mapDispatch = dispatch => {
  return {
    onNewList: () => DoablesList.add(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatch)(TodoerMain);
