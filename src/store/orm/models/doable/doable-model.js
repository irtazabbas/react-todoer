import { attr, fk } from 'redux-orm';

import { BaseModel } from '../base-model';
import { creators } from './doable-actions';
import reducer from './doable-reducer';
import { modelNames } from '../dictionary';

export class Doable extends BaseModel {
  static reducer = reducer;
  static actions = creators;
}

Doable.modelName = modelNames.doable;

Doable.fields = {
  id: attr(),
  text: attr(),
  description: attr(),
  createdAt: attr(),
  dueDate: attr(),
  complete: attr(),
  doablesList: fk({
    to: modelNames.doablesList,
    relatedName: 'doables'
  })
};
