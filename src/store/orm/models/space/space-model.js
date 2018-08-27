import { Model, attr, many } from 'redux-orm';

import { modelNames } from '../dictionary';

export class Space extends Model {}

Space.modelName = modelNames.space;

Space.fields = {
  id: attr(),
  title: attr(),
  doableLists: many(modelNames.doablesList)
};
