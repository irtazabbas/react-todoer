
import { random } from '../../../../services/utils';

export const types = [
  'ADD_DOABLES_LIST',
  'UPDATE_DOABLES_LIST_TITLE'
].reduce((pre, key) => (pre[key] = key) && pre, {});


export const creators = {
  add(id, title) {
    return {
      type: types.ADD_DOABLES_LIST,
      payload: {
        id: id || random(),
        title: title || 'My doabless' // TODO: make this more meaningful
      }
    }
  },

  updateTitle(id, title) {
    return {
      type: types.UPDATE_DOABLES_LIST_TITLE,
      payload: { id, title }
    }
  }
};
