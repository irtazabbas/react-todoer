import { attr } from 'redux-orm';

import { BaseModel } from '../base-model';
import { modelNames } from '../dictionary';

export class SpaceModel extends BaseModel {}

SpaceModel.modelName = modelNames.space;

SpaceModel.fields = {
  id: attr(),
  title: attr()
};
