
export const types = {
  LOAD_SPACES: 'LOAD_SPACES'
};


export const creators = {
  load(spaces) {
    return {
      type: types.LOAD_SPACES,
      payload: { spaces }
    }
  }
};
