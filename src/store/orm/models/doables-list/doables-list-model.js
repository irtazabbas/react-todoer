import { attr, fk } from 'redux-orm';

import { BaseModel } from '../base-model';
import { creators } from './doables-list-actions';
import reducer from './doables-list-reducer';
import { modelNames } from '../dictionary';

export class DoablesListModel extends BaseModel {
  static reducer = reducer;

  static add(dispatch) {
    dispatch(creators.add());
  }

  static updateTitle(dispatch, id, title) {
    dispatch(creators.updateTitle(id, title));
  }

  static all_sel = [
    session => {
      return session.doablesList.all().toModelArray().map(
        list => Object.assign({}, list.ref, {
          doables: list.doables.toRefArray()
        })
      );
    }
  ]
}

DoablesListModel.modelName = modelNames.doablesList;

DoablesListModel.fields = {
  id: attr(),
  title: attr(),
  space: fk({
    to: modelNames.space,
    relatedName: 'doablesLists'
  })
};
