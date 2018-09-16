import { oneToOne } from 'redux-orm';

import { BaseModel } from '../base-model';
import { modelNames } from '../dictionary';

export class MetaModel extends BaseModel {

  static getSpace() {
    const meta = this.all().toModelArray()[0];
    if (!meta) return;
    else return meta.selectedSpace;
  }
}

MetaModel.modelName = modelNames.meta;

MetaModel.fields = {
  selectedSpace: oneToOne(modelNames.space, 'selectedSpace')
};
