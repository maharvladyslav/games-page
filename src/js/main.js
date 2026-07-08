import { renderGames } from "./helpers/render-games.js";
import { save, load } from "./helpers/storage.js";
import { deleteAllGames } from "./helpers/reset-game-list.js";
const games = [
  {
    name: "Starfield",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRom930mzCR-VhnUK2N1hhbazriQbVjP7hudsaQIxaWA&s",
    raring: 5,
    inProccess: false
  },
  {
    name: "Baldur's Gate 3",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KERM3HxzARwZ-Ia0RL2WC5XPOhIK-1uqjJFOrkdNdYB75cRbrQjf7Hpj&s=10",
    rarting: 4,
    inProccess: false
  },
  {
    name: "Cyberpunk 2077: Phantom Liberty",
    poster: "https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894",
    rarting: 3,
    inProccess: false
  }
]

// const games = [
//   "Starfield",
//   "Baldur's Gate 3",
//   "Cyberpunk 2077: Phantom Liberty",
//   "Hogwarts Legacy",
//   "Alan Wake 2",
//   "Spider-Man 2",
//   "Diablo IV",
//   "Final Fantasy XVI",
//   "Resident Evil 4 Remake",
//   "The Legend of Zelda: Tears of the Kingdom",
// ];
const STORAGE_KEY = "games";
const actualGames = load(STORAGE_KEY) || games;

const gamesContainer = document.querySelector("[data-games]");
const addGameBtn = document.querySelector("[data-controls='add']");
const resetBtn = document.querySelector("[data-controls='reset']");
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

const hendleResetGameList = () => {
  deleteAllGames(actualGames)
  renderGames(gamesContainer, actualGames)
  save(STORAGE_KEY, actualGames)
}

resetBtn.addEventListener("click", hendleResetGameList)