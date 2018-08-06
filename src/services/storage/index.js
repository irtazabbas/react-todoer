
import { random } from '../utils';

const keys = {
  'doables': 'tkv-doables'
}

class Storage {
  getDoables() {
    let doables = localStorage.getItem(keys.doables);

    if (!doables) {
      doables = [{
        id: random(),
        title: 'My doables',
        items: []
      }];
      localStorage.setItem(keys.doables, doables);
    }

    return doables;
  }
}

const instance = new Storage();

export default instance;
