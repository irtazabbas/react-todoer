export const types = {
  NEW_COMMENT: 'NEW_COMMENT',
  REMOVE_COMMENT: 'REMOVE_COMMENT'
};

export const creators = {
  add(doable, content) {
    return {
      type: types.NEW_COMMENT,
      payload: { doable, content }
    };
  },

  remove(id) {
    return {
      type: types.REMOVE_COMMENT,
      payload: { id }
    }
  }
};
