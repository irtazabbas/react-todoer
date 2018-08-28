
import { random } from '../../../../services/utils';

export const types = [
  'ADD_DOABLE',
  'REMOVE_DOABLE'
].reduce((pre, key) => pre[key] = key && pre, {});


export const creators = {
  addDoable(text, doableListId) {
    return {
      type: types.ADD_DOABLE,
      payload: {
        text: text || 'default text', // TODO: remove default text
        id: doableListId || random()
      }
    }
  }
};
