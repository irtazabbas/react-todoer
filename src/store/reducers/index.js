
import { createReducer } from 'redux-orm';

import storageService from '../../services/storage';
import { SpaceModel } from '../orm/models/space/space-model';

import orm from '../orm';

const ormReducer = createReducer(orm);

export default (state, action) => {
  state = ormReducer(state, action);

  const spaces = SpaceModel.all_sel(state);
  if (spaces.length) storageService.setSpaces(spaces);

  return state;
};
