import { attr, Model } from 'redux-orm';

import { creators } from './doable-actions';
import reducer from './doable-reducer';
import { modelNames } from '../dictionary';

export class Doable extends Model {
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
  complete: attr()
};
