import GameSavingLoader from './loader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  // ...
  console.log(error);
});
