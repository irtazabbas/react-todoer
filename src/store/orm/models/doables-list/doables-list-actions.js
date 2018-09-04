
import { random } from '../../../../services/utils';

export const types = {
  ADD_DOABLES_LIST: 'ADD_DOABLES_LIST',
  UPDATE_DOABLES_LIST_TITLE: 'UPDATE_DOABLES_LIST_TITLE',
  LOAD_DOABLES_LISTS: 'LOAD_DOABLES_LISTS',
  REMOVE_DOABLES_LIST: 'REMOVE_DOABLES_LIST'
};

export const creators = {
  add(spaceId, title) {
    return {
      type: types.ADD_DOABLES_LIST,
      payload: {
        id: random(),
        title: title || 'My doables',
        space: spaceId
      }
    }
  },

  updateTitle(id, title) {
    return {
      type: types.UPDATE_DOABLES_LIST_TITLE,
      payload: { id, title }
    }
  },

  load(doablesLists) {
    return {
      type: types.LOAD_DOABLES_LISTS,
      payload: { doablesLists }
    };
  },

  remove(id) {
    return {
      type: types.REMOVE_DOABLES_LIST,
      payload: { id }
    };
  }
};
