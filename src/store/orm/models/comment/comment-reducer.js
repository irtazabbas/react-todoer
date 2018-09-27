import { types } from './comment-actions';

export default (action, Comment, session) => {
  const payload = action.payload;

  switch (action.type) {
    case types.NEW_COMMENT:
      Comment.create({ createdAt: new Date(), ...payload });
      break;

    case types.REMOVE_COMMENT:
      Comment.withId(payload.id).delete();
      break;

    default:
      break;
  }
};
