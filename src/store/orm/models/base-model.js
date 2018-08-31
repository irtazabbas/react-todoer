
import { Model, createSelector } from 'redux-orm';

export class BaseModel extends Model {
  static initSelectors(orm) {
    Object.getOwnPropertyNames(this)
      .filter(name => name.endsWith('_sel'))
      .forEach(name => {
        this[name] = createSelector(
          orm,
          ...this[name]
        )
      });
  }
}
