
import { types } from './space-actions';

export default (action, Space, session) => {
  const payload = action.payload;

  switch (action.type) {
    case types.LOAD_SPACES:
      payload.spaces.forEach(
        space => {
          const newSpace = Space.create(space);

          (space.doablesLists || []).forEach(list => {
            const newList = session.doablesList.create(
              Object.assign(list, { space: newSpace.id })
            );

            (list.doables || []).forEach(doable => {
              session.doable.create(
                Object.assign(doable, { doablesList: newList.id })
              );
            });
          });
        }
      );
      break;
  }
}
