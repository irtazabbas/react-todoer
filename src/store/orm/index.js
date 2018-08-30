
import { ORM } from 'redux-orm';

import * as Models from './models';

const orm = new ORM();
orm.register(
  Models.Doable,
  Models.DoablesList,
  Models.Space
);

// Init selectors for all models
Object.keys(Models).forEach(
  key => Models[key].initSelectors && Models[key].initSelectors(orm)
);

export default orm;
