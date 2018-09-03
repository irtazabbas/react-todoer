
import { createReducer } from 'redux-orm';

import storageService from '../../services/storage';
import { DoablesListModel } from '../orm/models/doables-list/doables-list-model';

import orm from '../orm';

const ormReducer = createReducer(orm);

export default (state, action) => {
  state = ormReducer(state, action);

  const doablesLists = DoablesListModel.all_sel(state);
  if (doablesLists.length) storageService.setDoablesLists(doablesLists);

  return state;
};
