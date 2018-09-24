import { attr, fk } from 'redux-orm';

import { BaseModel } from '../base-model';
import { creators } from './doable-actions';
import reducer from './doable-reducer';
import { modelNames } from '../dictionary';

export class DoableModel extends BaseModel {
  static reducer = reducer;
  
  static addToDoable(dispatch, doableId, title) {
    dispatch(creators.addToDoable(doableId, title));
  }

  static addToSpace(dispatch, spaceId, title) {
    dispatch(creators.addToSpace(spaceId, title));
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

  static updateTitle(dispatch, id, title) {
    dispatch(creators.updateTitle(id, title));
  }

  static updateDescription(dispatch, id, description) {
    dispatch(creators.updateDescription(id, description));
  }

  /**
   * This method recursively removes a doable and all its children and so on.
   * 
   * NOTE: This method uses `this.withId(...)`, which seems to error out unless
   * `this.session` is defined, which seems to be available when accessing model
   * through a session like `session.doable`, like what is available in reducer.
   * Hence importing this Model directly from this file and calling this method
   * will most probably error out.
   * @param {*} id doable's id
   */
  static removeRecursively(id) {
    let current = this.withId(id);

    (current.doables.all().toRefArray() || []).forEach(
      doable => this.removeRecursively(doable.id)
    );

    current.delete();
  }

  static getDoablesDeep(doable) {
    return Object.assign(
      {},
      doable.ref,
      {
        doables: doable.doables.toModelArray().map(
          item => DoableModel.getDoablesDeep(item)
        )
      }
    );
  }

  /**
   * Creates doables recursively
   * 
   * NOTE: This method seems to error unless called through a session object,
   * like `removeRecursively` method.
   */
  static createDoablesDeep(doable) {
    this.create(doable);

    (doable.doables || []).forEach(item => {
      this.createDoablesDeep(item);
    });
  }

  static getSelected_sel = [
    session => {
      const space = session.meta.getSpace();
      if (!space) return {};

      const doable = space.selectedDoable;
      if (!doable) return {};

      return Object.assign(
        {},
        doable.ref,
        { doables: doable.doables.toRefArray() }
      );
    }
  ]
}

DoableModel.modelName = modelNames.doable;

DoableModel.fields = {
  id: attr(),
  title: attr(),
  description: attr(),
  createdAt: attr(),
  dueDate: attr(),
  complete: attr(),
  doable: fk({
    to: modelNames.doable,
    relatedName: 'doables'
  }),
  space: fk({
    to: modelNames.space,
    relatedName: 'doables'
  })
};
