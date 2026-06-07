import { renderGames } from "./helpers/render-games.js";
import { save, load } from "./helpers/storage.js";
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
const STORAGE_KEY = "games";
const actualGames = load(STORAGE_KEY) || games;

const gamesContainer = document.querySelector("[data-games]");
const addGameBtn = document.querySelector("[data-controls='add']");

renderGames(gamesContainer, actualGames);

const handleAddGame = () => {
  const newGame = prompt("Яку гру хочете додати ?").trim();
  if (newGame) {
    actualGames.push(newGame);
    save(STORAGE_KEY, actualGames);

    renderGames(gamesContainer, actualGames);
  } else {
    alert("Треба заповнити поле");
  }
};
addGameBtn.addEventListener("click", handleAddGame);
