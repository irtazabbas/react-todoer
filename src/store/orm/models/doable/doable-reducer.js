import { types } from './doable-actions';

export default (action, Doable, session) => {
  const payload = action.payload;
  switch (action.type) {
    case types.ADD_DOABLE:
      Doable.create({text: payload.text}).doablesList =
        payload.doablesListId
      break;
    case types.REMOVE_DOABLE:
      Doable.withId(payload.id).delete();
      break;
    case types.MARK_COMPLETE:
      Doable.withId(payload.id).set('complete', true);
      break;
    case types.MARK_INCOMPLETE:
      Doable.withId(payload.id).set('complete', false);
      break
    case types.UPDATE_DOABLE_TEXT:
      Doable.withId(payload.id).set('text', payload.text);
      break;
  }
};
