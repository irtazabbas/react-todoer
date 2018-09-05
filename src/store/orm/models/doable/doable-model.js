import { attr, fk } from 'redux-orm';

import { BaseModel } from '../base-model';
import { creators } from './doable-actions';
import reducer from './doable-reducer';
import { modelNames } from '../dictionary';

export class DoableModel extends BaseModel {
  static reducer = reducer;

  static add(dispatch, title, doablesListId) {
    dispatch(creators.add(title, doablesListId));
  }

  static remove(dispatch, id) {
    dispatch(creators.remove(id));
  }

  static markComplete(dispatch, id) {
    dispatch(creators.markComplete(id));
  }

  static markInComplete(dispatch, id) {
    dispatch(creators.markInComplete(id));
  }

  static updateTitle(dispatch, id, text) {
    dispatch(creators.updateTitle(id, text));
  }
}

DoableModel.modelName = modelNames.doable;

DoableModel.fields = {
  id: attr(),
  title: attr(),
  description: attr(),
  createdAt: attr(),
  dueDate: attr(),
  complete: attr(),
  doablesList: fk({
    to: modelNames.doablesList,
    relatedName: 'doables'
  })
};
