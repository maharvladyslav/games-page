import { renderGames } from "./helpers/render-games.js";
import { save, load } from "./helpers/storage.js";
import { deleteAllGames } from "./helpers/reset-game-list.js";
const games = [
  {
    id: 1,
    name: "Starfield",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTVT9GpMeFzTC6uPrwT92xR-AWoyaE_LG9upLRKuaSQ&s=10",
    rating: 5,
    inProcess: false,
    playtime: 45,
    releaseYear: 2023,
    genres: ["RPG", "Sci-Fi", "Action"],
    platform: ["PC", "Xbox Series X/S"],
    description:
      "Космическая ролевая игра нового поколения, в которой вы можете путешествовать среди звезд и исследовать тысячи планет.",
  },
  {
    id: 2,
    name: "Baldur's Gate 3",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsRK4NoxXXRyZ6GbizpJdSwLAB-pKPY7RJC8oHqQdXQ&s=10",
    rating: 4,
    inProcess: false,
    playtime: 120,
    releaseYear: 2023,
    genres: ["RPG", "Turn-Based", "Fantasy"],
    platform: ["PC", "PS5", "Xbox Series X/S", "macOS"],
    description:
      "Партийная ролевая игра в культовой вселенной Dungeons & Dragons, где каждый ваш выбор формирует уникальную историю.",
  },
  {
    id: 3,
    name: "Cyberpunk 2077: Phantom Liberty",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cAXOdnbzSCegjLEaHYUdhfzCzcG16jG95cWZRiIcvw&s=10",
    rating: 3,
    inProcess: false,
    playtime: 65,
    releaseYear: 2023,
    genres: ["Action", "RPG", "Cyberpunk"],
    platform: ["PC", "PS5", "Xbox Series X/S"],
    description:
      "Шпионский триллер для Cyberpunk 2077. Сюжетное дополнение, возвращающее игрока в роли наемника Ви в новый опасный район Найт-Сити.",
  },
  {
    id: 4,
    name: "Hogwarts Legacy",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WwZ5UedneNKe_wDGvLeLSIotRHjfAMGD4dsGE6SIkw&s",
    rating: 5,
    inProcess: false,
    playtime: 40,
    releaseYear: 2023,
    genres: ["RPG", "Action", "Fantasy"],
    platform: [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
    description:
      "Ролевая игра с открытым миром во вселенной Гарри Поттера. Станьте студентом Хогвартса 1800-х годов и определите судьбу волшебного мира.",
  },
  {
    id: 5,
    name: "Alan Wake 2",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-pPDsIYQ7KCHihPYiqOSfwkI3PzhoNFMooRkHFuciQ&s=10",
    rating: 4,
    inProcess: false,
    playtime: 25,
    releaseYear: 2023,
    genres: ["Survival Horror", "Psychological Thriller"],
    platform: ["PC", "PS5", "Xbox Series X/S"],
    description:
      "Психологический хоррор, рассказывающий две параллельные истории: застрявшего в Темной обители писателя Алана Уэйка и агента ФБР Саги Андерсон.",
  },
  {
    id: 6,
    name: "Spider-Man 2",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQIGh2_glW46UAnr1f6X2K_ZBt69KsMsurptkalll7A&s=10",
    rating: 5,
    inProcess: false,
    playtime: 30,
    releaseYear: 2023,
    genres: ["Action", "Adventure"],
    platform: ["PS5", "PC"],
    description:
      "Питер Паркер и Майлз Моралес возвращаются в новом супергеройском приключении, чтобы защитить Нью-Йорк от Венома и Крейвена-охотника.",
  },
  {
    id: 7,
    name: "Diablo IV",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguAsgNXTTIJ8HJpgoEdJsT_Ff5g66e62gh58Q15uD4Q&s=10",
    rating: 4,
    inProcess: false,
    playtime: 85,
    releaseYear: 2023,
    genres: ["Action RPG", "Hack and Slash"],
    platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    description:
      "Мрачный ролевой экшен, в котором игрокам предстоит истреблять орды демонов в Санктуарии и сразиться с создательницей этого мира — Лилит.",
  },
  {
    id: 8,
    name: "Final Fantasy XVI",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRCZEIPiyFo5PhFOReeqA8WCnipqVmV7n1TwObEc5Aw&s=10",
    rating: 4,
    inProcess: false,
    playtime: 50,
    releaseYear: 2023,
    genres: ["Action RPG", "Fantasy"],
    platform: ["PS5", "PC"],
    description:
      "Эпическое темное фэнтези, сосредоточенное на судьбе Клайва Розфилда в охваченном войной мире Валистии.",
  },
  {
    id: 9,
    name: "Resident Evil 4 Remake",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNalcMLnwiJ6x7LAuHrUl9Edxo241Roj-f3i9NjMAAbw&s=10",
    rating: 5,
    inProcess: false,
    playtime: 20,
    releaseYear: 2023,
    genres: ["Survival Horror", "Action"],
    platform: ["PC", "PS4", "PS5", "Xbox Series X/S", "iOS"],
    description:
      "Полное переосмысление культового экшен-хоррора 2005 года. Агент Леон С. Кеннеди отправляется в глухую европейскую деревню ради спасения дочери президента.",
  },
  {
    id: 10,
    name: "The Legend of Zelda: Tears of the Kingdom",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7Y01knAjjMIu3C9TD1_zJMZWR0CEHfpazgtJSvFUFw&s=10",
    rating: 5,
    inProcess: false,
    playtime: 110,
    releaseYear: 2023,
    genres: ["Adventure", "Open World", "Fantasy"],
    platform: ["Nintendo Switch"],
    description:
      "Грандиозное приключение в Хайруле, где Линку открываются не только бескрайние земли, но и загадочные парящие острова в небесах.",
  },
];
const STORAGE_KEY = "games";
const actualGames = load(STORAGE_KEY) || games;

const gamesContainer = document.querySelector("[data-games]");
const addGameBtn = document.querySelector("[data-controls='add']");
const resetBtn = document.querySelector("[data-controls='reset']");
const goodGameBtn = document.querySelector("[data-controls='good-game']");
const pcGameBtn = document.querySelector("[data-controls='pc-game']");
renderGames(gamesContainer, actualGames);

const handleAddGame = () => {
  const gameName = prompt("Ведіть назву гри").trim();
  const gameTime = Number(
    prompt("Скільки годин ви вже зиграли в цю гру ?").trim(),
  );
  const gameProcess = confirm("Чи проходите зараз цю гру ?");
  const gamePoster = prompt("link на зображення ?").trim();
  if (gameName && gameTime) {
    const newGame = {
      id: actualGames.length + 1,
      name: gameName,
      poster: gamePoster,
      rating: 0,
      inProcess: gameProcess,
      playtime: gameTime,
    };
    actualGames.push(newGame);
    save(STORAGE_KEY, actualGames);

    renderGames(gamesContainer, actualGames);
  } else {
    alert("Треба заповнити поле");
  }
};

function handleRemoveGame() {
  const deletGame = prompt("Яку гру хочете видалити ?");
  const indexDeletGame = actualGames.indexOf(deletGame);
  if (indexDeletGame === -1) {
    alert("Такої гри немає");
  } else {
    actualGames.splice(indexDeletGame, 1);
    renderGames(gamesContainer, actualGames);
    save(STORAGE_KEY, actualGames);
  }
}

addGameBtn.addEventListener("click", handleAddGame);

const handleResetGameList = () => {
  deleteAllGames(actualGames);
  renderGames(gamesContainer, actualGames);
  save(STORAGE_KEY, actualGames);
};

resetBtn.addEventListener("click", handleResetGameList);

const handleShowGoodGames = () => {
  const goodGames = actualGames.filter((game) => game.rating >= 4);
  renderGames(gamesContainer, goodGames);
};

goodGameBtn.addEventListener("click", handleShowGoodGames);

const handleShowPcGames = () => {
  const pcGames = actualGames.filter((game) => {
    if (game.platform) {
      return game.platform.includes("PC");
    } else {
      return false;
    }
  });
  renderGames(gamesContainer, pcGames);
};

pcGameBtn.addEventListener("click", handleShowPcGames);

const sortList = document.querySelector("[data-sort]");

const handleSortGames = (event) => {
  const target = event.target;
  console.log(target);
  if (target.dataset.sortType === "name-arc") {
    console.log("sort by name");
  }
};

sortList.addEventListener("click", handleSortGames);
