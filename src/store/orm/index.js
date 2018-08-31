
import { ORM } from 'redux-orm';

import * as Models from './models';

const orm = new ORM();
orm.register(
  ...Object.values(Models)
);

// Init selectors for all models
Object.values(Models).forEach(
  Model => Model.initSelectors && Model.initSelectors(orm)
);

export default orm;
