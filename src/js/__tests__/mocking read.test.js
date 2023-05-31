import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Тест метода load с моком функции read', async () => {
  const error = new Error('Error!');
  read.mockRejectedValue(error);
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toEqual(error);
  }
});
// все равно почему-то не покрыта тестами 10-я строка файла app.js
