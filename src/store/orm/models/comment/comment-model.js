import { attr, fk } from 'redux-orm';

import { BaseModel } from '../base-model';
import { modelNames } from '../dictionary';
import { creators } from './comment-actions';
import reducer from './comment-reducer';

export class CommentModel extends BaseModel {
  static reducer = reducer;

  static add(dispatch, doableId, content) {
    dispatch(creators.add(doableId, content));
  }

  static remove(dispatch, id) {
    dispatch(creators.remove(id));
  }
}

CommentModel.modelName = modelNames.comment;

CommentModel.fields = {
  id: attr(),
  content: attr(),
  createdAt: attr(),
  updatedAt: attr(),
  doable: fk({
    to: modelNames.doable,
    relatedName: 'comments'
  })
};
