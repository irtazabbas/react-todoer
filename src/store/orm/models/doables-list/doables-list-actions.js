
import { random } from '../../../../services/utils';

export const types = [
  'ADD_DOABLES_LIST',
  'UPDATE_DOABLES_LIST_TITLE'
].reduce((pre, key) => (pre[key] = key) && pre, {});


export const creators = {
  addDoable(doableListId) {
    return {
      type: types.ADD_DOABLE,
      payload: {
        id: doableListId || random()
      }
    }
  }
};
