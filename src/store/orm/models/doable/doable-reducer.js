import { types } from './doable-actions';

export default (action, Doable, session) => {
  const payload = action.payload;

  switch (action.type) {
    case types.ADD_DOABLE_TO_DOABLE:
      Doable.create({title: payload.title}).doable =
        payload.doableId;
      break;

    case types.ADD_DOABLE_TO_SPACE:
      payload.title = payload.title + ' # ' +
        (session.space.getDoablesCount(payload.space) + 1);
      Doable.create(payload);
      break;

    case types.REMOVE_DOABLE:
      Doable.removeRecursively(payload.id);
      break;

    case types.MARK_COMPLETE:
      Doable.withId(payload.id).set('complete', true);
      break;

    case types.MARK_INCOMPLETE:
      Doable.withId(payload.id).set('complete', false);
      break;

    case types.UPDATE_DOABLE_TITLE:
      Doable.withId(payload.id).set('title', payload.title);
      break;

    case types.UPDATE_DOABLE_DESCRIPTION:
      Doable.withId(payload.id).set('description', payload.description);
      break;

    case types.MINIMIZE_DOABLE:
      Doable.withId(payload.id).set('minimized', true);
      break;

    case types.MAXIMIZE_DOABLE:
      Doable.withId(payload.id).set('minimized', false);
      break;
  }
};
