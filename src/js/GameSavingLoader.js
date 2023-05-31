import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  static async load() {
    const data = await read();
    const response = await json(data);
    const res = new GameSaving(JSON.parse(response));
    return res;
  }
}
