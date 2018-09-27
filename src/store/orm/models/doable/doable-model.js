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

  static minimize(dispatch, id) {
    dispatch(creators.minimize(id));
  }

  static maximize(dispatch, id) {
    dispatch(creators.maximize(id));
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
        ),
        comments: doable.comments.toRefArray()
      }
    );
  }

  /**
   * Returns the completion status (boolean) of a doable, by recursively checking
   * the children and only returns true if all the children are complete.
   * 
   * NOTE: If a doable has doables then its own 'complete' property is ignored,
   * and its completion depends on its child doables. Hence, its completion
   * is "derived" based on concrete values from 'complete' property of its children
   * and/or derived completion status of its children.
   */
  static checkCompletionDeep(doable) {
    const doables = doable.doables.toModelArray();

    return doables.length ?
      doables.every(i => this.checkCompletionDeep(i)) : doable.complete;
  }

  /**
   * Creates doables recursively
   * 
   * NOTE: This method seems to error unless called through a session object,
   * like `removeRecursively` method.
   */
  static createDoablesDeep(doable, session) {
    this.create(doable);
    (doable.comments || []).forEach(comment => {
      session.comment.create(comment);
    });

    (doable.doables || []).forEach(item => {
      this.createDoablesDeep(item, session);
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
        {
          doables: doable.doables.toModelArray().map(
            item => Object.assign({}, item.ref, {
              hasDoables: !!item.doables.all().count(),
              complete: DoableModel.checkCompletionDeep(item)
            })
          ),
          comments: doable.comments.toRefArray()
        }
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
  minimized: attr(),
  doable: fk({
    to: modelNames.doable,
    relatedName: 'doables'
  }),
  space: fk({
    to: modelNames.space,
    relatedName: 'doables'
  })
};
