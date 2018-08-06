import React from 'react';

import Aux from '../common/hocs/aux';
import AccountRouting from './account.routing';

export default props => (
  <Aux>
    <h2> Accounts module </h2>

    <AccountRouting />
  </Aux>
);
