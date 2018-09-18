
import { types } from './space-actions';

export default (action, Space, session) => {
  const payload = action.payload;

  switch (action.type) {
    case types.LOAD_SPACES:
      payload.spaces.forEach(
        (space, i) => {
          const newSpace = Space.create(space);

          if (i === 0) session.meta.create({ selectedSpace: newSpace.id });

          (space.doables || []).forEach(
            doable => session.doable.createDoablesDeep(doable)
          );
        }
      );
      break;
    case types.DOABLE_SELECTED_FOR_DETAILS:
      Space.withId(payload.spaceId).selectedDoable = payload.doableId;
      break;
    case types.DETAIL_DRAWER_CLOSED:
      Space.withId(payload.spaceId).selectedDoable = undefined;
      break;
  }
}
