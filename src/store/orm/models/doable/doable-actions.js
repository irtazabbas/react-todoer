
export const types = {
  ADD_DOABLE: 'ADD_DOABLE',
  REMOVE_DOABLE: 'REMOVE_DOABLE',
  MARK_COMPLETE: 'MARK_COMPLETE',
  MARK_INCOMPLETE: 'MARK_INCOMPLETE',
  UPDATE_DOABLE_TITLE: 'UPDATE_DOABLE_TITLE'
};


export const creators = {
  add(title, doablesListId) {
    return {
      type: types.ADD_DOABLE,
      payload: { title, doablesListId }
    }
  },

  remove(id) {
    return {
      type: types.REMOVE_DOABLE,
      payload: { id }
    }
  },

  markComplete(id) {
    return {
      type: types.MARK_COMPLETE,
      payload: { id }
    }
  },

  markInComplete(id) {
    return {
      type: types.MARK_INCOMPLETE,
      payload: { id }
    }
  },

  updateTitle(id, title) {
    return {
      type: types.UPDATE_DOABLE_TITLE,
      payload: { id, title }
    }
  }
};
