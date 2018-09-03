
import { random } from '../utils';

const keys = {
  doablesLists: 'tkv-doables-lists',
  spaces: 'tkv-spaces-',
  spacesKeys: 'tkv-spaces-keys'
}

class Storage {
  getDoables() {
    let doables = localStorage.getItem(keys.doablesLists) || '[]';
    return JSON.parse(doables);
  }

  setDoablesLists(data) {
    localStorage.setItem(keys.doablesLists, JSON.stringify(data));
  }

  setSpace(data) {
    localStorage.setItem(
      keys.spaces + data.id,
      JSON.stringify(data)
    );
    this.appendSpaceKey(data.id);
  }

  setSpaces(data) {
    data.forEach(space => this.setSpace(space));
  }

  appendSpaceKey(key) {
    let spaceKeys = (localStorage.getItem(keys.spacesKeys) || '') .split(',');

    if (spaceKeys.indexOf(key) === -1) {
      spaceKeys.push(key);
      localStorage.setItem(
        keys.spacesKeys,
        spaceKeys.filter(k => !!k).join(',')
      );
    }
  }

  getSpaces() {
    let spaces = [];
    (localStorage.getItem(keys.spacesKeys) || '').split(',').forEach(
      key => {
        let space = localStorage.getItem(keys.spaces + key);
        if (space) {
          spaces.push(JSON.parse(space));
        }
      }
    );
    return spaces;
  }
}

const instance = new Storage();

export default instance;
