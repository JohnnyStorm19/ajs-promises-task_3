import GameSavingLoader from '../GameSavingLoader';
import '../app';

test('Срабатывает метод load и загружает данные', async () => {
  const res = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  await expect(GameSavingLoader.load()).resolves.toEqual(res);
});
