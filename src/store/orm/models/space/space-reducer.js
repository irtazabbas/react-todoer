
import { types } from './space-actions';

export default (action, Space, session) => {
  const payload = action.payload;

  switch (action.type) {
    case types.LOAD_SPACES:
      payload.spaces.forEach(
        space => {
          const newSpace = Space.create(space);

          (space.doables || []).forEach(doable => {
            const newDoable = session.doable.create(
              Object.assign(doable, { space: newSpace.id })
            );

            (doable.doables || []).forEach(doableL2 => {
              session.doable.create(
                Object.assign(doableL2, { doable: newDoable.id })
              );
            });
          });
        }
      );
      break;
  }
}
