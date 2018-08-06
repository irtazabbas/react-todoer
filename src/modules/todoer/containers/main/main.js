import React, { Component } from 'react';

import Aux from '../../../../hocs/aux';
import Controls from '../../components/controls/controls';
import Doables from '../doables/doables';

export default class TodoerMain extends Component {
  render() {
    return (
      <Aux>
        <Controls />

        <Doables />
      </Aux>
    );
  }
}