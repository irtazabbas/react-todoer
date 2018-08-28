import { Model, attr, fk } from 'redux-orm';

import { creators } from './doables-list-actions';
import reducer from './doables-list-reducer';
import { modelNames } from '../dictionary';

export class DoablesList extends Model {
  static reducer = reducer;

  static add(dispatch) {
    dispatch(creators.addDoable());
  }
}

DoablesList.modelName = modelNames.doablesList;

DoablesList.fields = {
  id: attr(),
  title: attr(),
  space: fk({
    to: modelNames.space,
    relatedName: 'doablesLists'
  })
};
