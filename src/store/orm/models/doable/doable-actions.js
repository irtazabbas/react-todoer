
export const types = {
  ADD_DOABLE: 'ADD_DOABLE',
  REMOVE_DOABLE: 'REMOVE_DOABLE',
  MARK_COMPLETE: 'MARK_COMPLETE',
  MARK_INCOMPLETE: 'MARK_INCOMPLETE',
  UPDATE_DOABLE_TEXT: 'UPDATE_DOABLE_TEXT'
};


export const creators = {
  add(text, doablesListId) {
    return {
      type: types.ADD_DOABLE,
      payload: { text, doablesListId }
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

  updateText(id, text) {
    return {
      type: types.UPDATE_DOABLE_TEXT,
      payload: { id, text }
    }
  }
};
