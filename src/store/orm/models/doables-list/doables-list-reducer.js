
import { types } from './doables-list-actions';

export default (action, DoablesList) => {
  switch (action.type) {
    case types.ADD_DOABLE:
      DoablesList.create(action.payload);
      break;
  }
};
