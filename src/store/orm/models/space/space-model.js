import { attr } from 'redux-orm';

import { BaseModel } from '../base-model';
import { modelNames } from '../dictionary';
import { creators } from './space-actions';
import reducer from './space-reducer';
import storageService from '../../../../services/storage';
import seedData from '../seed-data';

export class SpaceModel extends BaseModel {
  static reducer = reducer;

  static loadAll(dispatch) {
    const spaces = storageService.getSpaces();

    if (spaces.length) {
      dispatch(creators.load(spaces));
    } else {
      dispatch(creators.load(seedData));
    }
  }

  static all_sel = [
    session => {
      return session.space.all().toModelArray().map(
        space => Object.assign({}, space.ref, {
          doablesLists: space.doablesLists.toModelArray().map(
            list => Object.assign({}, list.ref, {
              doables: list.doables.toRefArray()
            })
          )
        })
      );
    }
  ]
}

SpaceModel.modelName = modelNames.space;

SpaceModel.fields = {
  id: attr(),
  title: attr()
};
