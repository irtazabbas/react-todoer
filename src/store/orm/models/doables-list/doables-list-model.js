import { Model, attr, many } from 'redux-orm';

import { creators } from './doables-list-actions';
import { modelNames } from '../dictionary';

export class DoablesList extends Model {
  static actions = creators
}

DoablesList.modelName = modelNames.doablesList;

DoablesList.fields = {
  id: attr(),
  title: attr(),
  doables: many(modelNames.doable)
};
