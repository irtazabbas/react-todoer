
import { types } from './doables-list-actions';

export default (action, DoablesList) => {
  switch (action.type) {
    case types.ADD_DOABLES_LIST:
      DoablesList.create(action.payload);
      break;
    case types.UPDATE_DOABLES_LIST_TITLE:
      DoablesList.withId(action.payload.id).title = action.payload.title;
      break;
  }
};
