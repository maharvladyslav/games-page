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

const handleAddGame = () => {};
addGameBtn.addEventListener("click", handleAddGame);
