import { types } from './doable-actions';

export default (action, Doable) => {
  switch (action.type) {
    case types.ADD_DOABLE:
      Doable.create(action.payload);
      break;
  }
};
