
export const types = [
  'ADD_DOABLE',
  'REMOVE_DOABLE'
].reduce((pre, key) => pre[key] = key && pre, {});


export const creators = {
  addDoable(text) {
    return {
      type: types.ADD_DOABLE,
      payload: { text }
    }
  }
};
