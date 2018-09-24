
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
            doable => session.doable.createDoablesDeep(
              Object.assign(doable, { space: newSpace.id })
            )
          );
        }
      );
      break;

    case types.DOABLE_SELECTED_FOR_DETAILS:
      let target = Space.withId(payload.spaceId);
      target.selectedDoable = payload.doableId;
      target.drawerOpen = true;
      break;

    case types.DETAIL_DRAWER_CLOSED:
      Space.withId(payload.spaceId).drawerOpen = false;
      break;

    default:
      break;
  }
};
