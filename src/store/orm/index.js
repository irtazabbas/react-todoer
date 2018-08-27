
import { ORM } from 'redux-orm';

import * as Models from './models';

const orm = new ORM();
orm.register(...Models);

export default orm;
