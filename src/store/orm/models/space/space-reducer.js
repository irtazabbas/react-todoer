
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
              Object.assign(doable, { space: newSpace.id }),
              session
            )
          );
        }
      );
      break;

    case types.DOABLE_SELECTED_FOR_DETAILS:
      const { spaceId, doableId } = payload;

      let target = Space.withId(spaceId);
      const selected = [].concat(target.selectedDoables);
      const index = selected.lastIndexOf(doableId);

      if (index === -1 || index !== selected.length - 1) {
        if (selected.length === 20) selected.splice(0, 1);
        selected.push(doableId);
        target.selectedDoables = selected;
        target.drawerOpen = true;
      }
      break;

    case types.DETAIL_DRAWER_CLOSED:
      Space.withId(payload.spaceId).drawerOpen = false;
      break;

    default:
      break;
  }
};
