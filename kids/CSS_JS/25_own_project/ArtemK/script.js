const games = [
  {
    name: {
      en: "The Legend of Zelda: Breath of the Wild",
      ua: "Легенда про Зельду: Дихання дикої природи",
    },
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    description: {
      en: "An open-world masterpiece where you explore the vast lands of Hyrule, solve puzzles, and defeat enemies.",
      ua: "Шедевр відкритого світу, де ви досліджуєте величезні землі Хайрула, вирішуєте головоломки і перемагаєте ворогів.",
    },
  },
  {
    name: {
      en: "Minecraft",
      ua: "Майнкрафт",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu59J3xhKZX-3-zF5-s18ZPZbnG_mufLq9aA&s",
    description: {
      en: "A sandbox game that allows players to build, explore, and survive in an infinite blocky world.",
      ua: "Пісочниця, яка дозволяє гравцям будувати, досліджувати і виживати у безмежному блочному світі.",
    },
  },
  {
    name: {
      en: "The Witcher 3: Wild Hunt",
      ua: "Відьмак 3: Дикий Гін",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSVPkaFHUqi7j7x_99rqiyDHESIT6fwrfdizqZfOuvgMYfI6ROfTgkUP2B7GUKZo9HHh8xXco7uzWBaA0FpF_F8MN-3YRIdR7L4b0Gg",
    description: {
      en: "An epic RPG with a rich story and breathtaking visuals. Step into the shoes of Geralt of Rivia.",
      ua: "Епічна RPG із захоплюючим сюжетом і неймовірною графікою. Відчуйте себе в ролі Ґеральта з Рівії.",
    },
  },
  {
    name: {
      en: "Grand Theft Auto V",
      ua: "Гранд Тефт Ауто V",
    },
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLQoaIPDRI6xopKjotpCHScwMBIVDxmWmdgNJCtjYSZ-wQ0aOCbsnyCJMxz2R2B1oPpTIKg7aNRLz-cKlrJxe0WOmzd0V0mrWsDTlGog",
    description: {
      en: "A massive open-world game where players can explore, create chaos, and complete missions in Los Santos.",
      ua: "Масштабна гра з відкритим світом, де гравці можуть досліджувати, створювати хаос і виконувати місії у Лос-Сантосі.",
    },
  },
  {
    name: {
      en: "Fortnite",
      ua: "Фортнайт",
    },
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4MZ-WeWz1sgtyBJ0yUTRqIYgkXL564mXJjBCcxaZz1L1lYlhErpFG6J6Yff0_nQR2qmE6ox0QHvGWFstphbsED2EY3ImYzqdFFMhblQ",
    description: {
      en: "A battle royale game with vibrant graphics, intense gameplay, and endless fun with friends.",
      ua: "Гра жанру королівська битва з яскравою графікою, інтенсивним геймплеєм і безмежними веселощами з друзями.",
    },
  },
];

const container = document.getElementById("games-container");
const languageSwitcher = document.getElementById("language-switcher");
let currentLanguage = "ua";

function renderGames() {
  container.innerHTML = "";
  games.forEach((game, index) => {
    const gameElement = document.createElement("div");
    gameElement.className = "game";
    gameElement.innerHTML = `
        <img src="${game.image}" alt="${game.name[currentLanguage]}">
        <h2>${index + 1}. ${game.name[currentLanguage]}</h2>
        <p>${game.description[currentLanguage]}</p>
      `;
    container.appendChild(gameElement);
  });
}

languageSwitcher.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ua" : "en";
  languageSwitcher.textContent = currentLanguage === "en" ? "🇬🇧 EN" : "🇺🇦 UA";
  document.getElementById("title").textContent =
    currentLanguage === "en"
      ? "Top 5 Popular Games of All Time"
      : "Топ-5 найпопулярніших ігор усіх часів";
  renderGames();
});

renderGames();
