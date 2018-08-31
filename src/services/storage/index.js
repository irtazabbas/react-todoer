
import { random } from '../utils';

const keys = {
  doablesLists: 'tkv-doables-lists'
}

class Storage {
  getDoables() {
    let doables = localStorage.getItem(keys.doablesLists) || [];
    // TODO: see what to do if none found
    return JSON.parse(doables);
  }

  setDoablesLists(data) {
    localStorage.setItem(keys.doablesLists, JSON.stringify(data));
  }
}

const instance = new Storage();

export default instance;
