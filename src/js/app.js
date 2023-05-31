/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

try {
  (async () => {
    const res = await GameSavingLoader.load();
    console.log(res);
  })();
} catch (error) {
  console.log(error);
}

// Этот вариант как будто более логичен
/* try {
  const res = await GameSavingLoader.load();
  console.log(res);
} catch (error) {
  console.log(error);
} */
