
export const types = {
  ADD_DOABLE_TO_DOABLE: 'ADD_DOABLE_TO_DOABLE',
  ADD_DOABLE_TO_SPACE: 'ADD_DOABLE_TO_SPACE',
  REMOVE_DOABLE: 'REMOVE_DOABLE',
  MARK_COMPLETE: 'MARK_COMPLETE',
  MARK_INCOMPLETE: 'MARK_INCOMPLETE',
  UPDATE_DOABLE_TITLE: 'UPDATE_DOABLE_TITLE',
  UPDATE_DOABLE_DESCRIPTION: 'UPDATE_DOABLE_DESCRIPTION'
};


export const creators = {
  addToDoable(doableId, title) {
    return {
      type: types.ADD_DOABLE_TO_DOABLE,
      payload: { title, doableId }
    }
  },

  addToSpace(spaceId, title) {
    return {
      type: types.ADD_DOABLE_TO_SPACE,
      payload: {
        title: title || 'My doables',
        space: spaceId
      }
    };
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
    };
  },

  updateDescription(id, description) {
    return {
      type: types.UPDATE_DOABLE_DESCRIPTION,
      payload: { id, description }
    };
  }
};
