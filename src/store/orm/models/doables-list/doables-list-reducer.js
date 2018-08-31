
import { types } from './doables-list-actions';

export default (action, DoablesList) => {
  const payload = action.payload;

  switch (action.type) {
    case types.ADD_DOABLES_LIST:
      payload.title = payload.title + ' # ' + (DoablesList.all().count() + 1);
      DoablesList.create(payload);
      break;
    case types.UPDATE_DOABLES_LIST_TITLE:
      DoablesList.withId(action.payload.id).title = action.payload.title;
      break;
  }
};
