
export const types = {
  LOAD_SPACES: 'LOAD_SPACES',
  DOABLE_SELECTED_FOR_DETAILS: 'DOABLE_SELECTED_FOR_DETAILS',
  DETAIL_DRAWER_CLOSED: 'DETAIL_DRAWER_CLOSED'
};


export const creators = {
  load(spaces) {
    return {
      type: types.LOAD_SPACES,
      payload: { spaces }
    }
  },

  selectDoableForDetails(spaceId, doableId) {
    return {
      type: types.DOABLE_SELECTED_FOR_DETAILS,
      payload: { spaceId, doableId }
    };
  },

  closeDrawer(spaceId) {
    return {
      type: types.DETAIL_DRAWER_CLOSED,
      payload: { spaceId }
    };
  }
};
