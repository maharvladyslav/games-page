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
const removeGameBtn = document.querySelector("[data-controls='remove']");

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

function handleRemoveGame() {
  const deletGame = prompt("Яку гру хочете видалити ?")
  const indexDeletGame = actualGames.indexOf(deletGame)
  if (indexDeletGame === -1) {
    alert("Такої гри немає")
  } else {
    actualGames.splice(indexDeletGame, 1)
    renderGames(gamesContainer, actualGames)
    save(STORAGE_KEY, actualGames)
  }

}


addGameBtn.addEventListener("click", handleAddGame);
removeGameBtn.addEventListener("click", handleRemoveGame);
