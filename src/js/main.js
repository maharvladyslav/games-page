import { renderGames } from "./helpers/render-games.js";
const games = [
  "Starfield",
  "Baldur's Gate 3",
  "Cyberpunk 2077: Phantom Liberty",
  "Hogwarts Legacy",
  "Alan Wake 2",
  "Spider-Man 2",
  "Diablo IV",
  "Final Fantasy XVI",
  "Resident Evil 4 Remake",
  "The Legend of Zelda: Tears of the Kingdom",
];

const gamesContainer = document.querySelector("[data-games]");
const addGameBtn = document.querySelector("[data-controls='add']");

renderGames(gamesContainer, games);

const handleAddGame = () => {
  const newGame = prompt('Яку гру хочете додати ?').trim()
  if (newGame){
games.push(newGame)
  renderGames(gamesContainer,games)
  } else {
    alert('Треба заповнити поле')
  }
};
addGameBtn.addEventListener("click", handleAddGame);
