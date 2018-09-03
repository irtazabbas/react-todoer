
import { types } from './doables-list-actions';

export default (action, DoablesList, session) => {
  const payload = action.payload;

  switch (action.type) {
    case types.ADD_DOABLES_LIST:
      payload.title = payload.title + ' # ' + (DoablesList.all().count() + 1);
      DoablesList.create(payload);
      break;
    case types.UPDATE_DOABLES_LIST_TITLE:
      DoablesList.withId(action.payload.id).title = action.payload.title;
      break;
    case types.LOAD_DOABLES_LISTS:
      payload.doablesLists.forEach(list => {
        const newList = DoablesList.create(
          Object.assign(list, { space: payload.spaceId })
        );

        (list.doables || []).forEach(doable => {
          session.doable.create(
            Object.assign(doable, { doablesList: newList.id })
          );
        });
      });
      break;
  }
};
