import { attr, oneToOne } from 'redux-orm';

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

  static setSelectedDoable(dispatch, spaceId, doableId) {
    dispatch(creators.selectDoableForDetails(spaceId, doableId));
  }

  static closeDrawer(dispatch, spaceId) {
    dispatch(creators.closeDrawer(spaceId));
  }

  static getDoablesCount(spaceId) {
    return this.withId(spaceId).doables.all().count();
  }


  static all_sel = [
    session => {
      return session.space.all().toModelArray().map(
        space => Object.assign({}, space.ref, {
          doables: space.doables.toModelArray().map(
            list => session.doable.getDoablesDeep(list)
          )
        })
      );
    }
  ];

  static getSelected_sel = [
    session => {
      const meta = session.meta.all().toModelArray()[0];
      if (!meta) return;

      const space = meta.selectedSpace;

      return Object.assign(
        {},
        space.ref,
        {
          doables: space.doables.toModelArray().map(
            list => Object.assign({}, list.ref, {
              doables: list.doables.toRefArray()
            })
          )
        }
      );
    }
  ]
}

SpaceModel.modelName = modelNames.space;

SpaceModel.fields = {
  id: attr(),
  title: attr(),
  drawerOpen: attr(),
  selectedDoable: oneToOne(modelNames.doable, 'selectedForSpace'),
};
