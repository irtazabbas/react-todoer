import { oneToOne } from 'redux-orm';

import { BaseModel } from '../base-model';
import { modelNames } from '../dictionary';

export class MetaModel extends BaseModel {

  static getSpace() {
    const meta = this.all().toModelArray()[0];
    if (!meta) return;
    else return meta.selectedSpace;
  }

  static removeFromSelected(doableId) {
    const meta = this.all().toModelArray()[0];
    if (!meta) return;
    else this._session.space.removeFromSelected(
      meta.selectedSpace.id, doableId
    );
  }
}

MetaModel.modelName = modelNames.meta;

MetaModel.fields = {
  selectedSpace: oneToOne(modelNames.space, 'selectedSpace')
};
