import { Model, attr } from 'redux-orm';

import { modelNames } from '../dictionary';

export class Space extends Model {}

Space.modelName = modelNames.space;

Space.fields = {
  id: attr(),
  title: attr()
};
