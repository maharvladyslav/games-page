export const renderGames = (container, games) => {
  if (!container) {
    console.error("Відсутній контейнер для ігор");
    return;
  }

  const markup = `<ul class="game-list">${games
    .map((game) => {
      return `<li class="game-item">
            <article class="game">
            <div class="game-poster"><img class="game-img" src="${game.poster}" alt="Постер до гри: ${game.name}"></div>
              <h2 class="game-name">${game.name}</h2>
            </article>
          </li>`;
    })
    .join("")}     
        </ul>`;

  container.innerHTML = markup;
};
