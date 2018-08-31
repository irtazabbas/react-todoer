
import { createReducer } from 'redux-orm';

import storageService from '../../services/storage';
import { DoablesListModel } from '../orm/models/doables-list/doables-list-model';

import orm from '../orm';

const ormReducer = createReducer(orm);

export default (state, action) => {
  state = ormReducer(state, action);

  // TODO: this syncs the doables lists to local storage, but need to retrieve them as well
  const doablesLists = DoablesListModel.all_sel(state);
  if (doablesLists.length) storageService.setDoablesLists(doablesLists);

  return state;
};
