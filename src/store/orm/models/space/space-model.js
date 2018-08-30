import { attr } from 'redux-orm';

import { BaseModel } from '../base-model';
import { modelNames } from '../dictionary';

export class Space extends BaseModel {}

Space.modelName = modelNames.space;

Space.fields = {
  id: attr(),
  title: attr()
};
