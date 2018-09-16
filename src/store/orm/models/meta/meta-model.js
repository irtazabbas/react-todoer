import { oneToOne } from 'redux-orm';

import { BaseModel } from '../base-model';
import { modelNames } from '../dictionary';

export class MetaModel extends BaseModel {}

MetaModel.modelName = modelNames.meta;

MetaModel.fields = {
  selectedSpace: oneToOne(modelNames.space, 'selectedSpace')
};
