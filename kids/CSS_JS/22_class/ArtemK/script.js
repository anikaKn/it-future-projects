class Character {
  constructor(name, house, image, isQuidditchPlayer, patronus) {
    this.name = name;
    this.house = house;
    this.image = image;
    this.isQuidditchPlayer = isQuidditchPlayer;
    this.patronus = patronus;
    this.houselogo = this.getHouseLogo();
  }

  getHouseMotto() {
    const houseMottos = {
      Gryffindor: "❤️ Сміливість, відвага, рішучість!",
      Slytherin: "💚 Хитрість, амбіційність, сила!",
      Ravenclaw: "💙 Мудрість, творчість, інтелект!",
      Hufflepuff: "💛 Вірність, працьовитість, справедливість!",
    };
    return houseMottos[this.house] || "Невідомий факультет";
  }

  getHouseLogo() {
    const houseLogos = {
      Gryffindor:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rWoObaF0c_w3hrVDzfHm8gbaCz4Vqy5pWg&s",
      Slytherin:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY78JHjbYl6t9ZE1XjUOP3kwtAxTz45cksPA&s",
      Ravenclaw:
        "https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg?ezimgfmt=ngcb22/notWebP",
      Hufflepuff:
        "https://humankind.shop/cdn/shop/products/HARRY_POTTER-_HUFFLEPUFF_CREST.png?v=1676247914",
    };
    return houseLogos[this.house] || "";
  }
}

const characters = [
  new Character(
    "Harry Potter",
    "Gryffindor",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiLPew45S--CQqD2OEvWev2OyaIRuJyQK8w&s",
    true,
    "олень"
  ),
  new Character(
    "Hermione Granger",
    "Gryffindor",
    "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    false,
    "видра"
  ),
  new Character(
    "Draco Malfoy",
    "Slytherin",
    "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
    true,
    "немає"
  ),
  new Character(
    "Luna Lovegood",
    "Ravenclaw",
    "https://contentful.harrypotter.com/usf1vwtuqyxm/Mam68Vfou2OO6kqEcyW8W/41657e4dbb7d42d2cab591276105bcc1/LunaLovegood_WB_F6_LunaLovegoodInQuibblerSpecsOnHogwartsExpress_Still_080615_Port.jpg",
    false,
    "зайчик"
  ),
  new Character(
    "Cedric Diggory",
    "Hufflepuff",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uB9XDBdLioDJTwdSxh6wMAuG-0PPWyELIg&s",
    true,
    "немає"
  ),
  new Character(
    "Neville Longbottom",
    "Gryffindor",
    "https://upload.wikimedia.org/wikipedia/en/7/75/Neville_Longbottom.jpeg",
    false,
    "немає"
  ),
];

const container = document.getElementById("characters");

characters.forEach((character) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = character.name;

  const name = document.createElement("h3");
  name.textContent =
    character.name + (character.isQuidditchPlayer ? " 🧹" : "");

  img.addEventListener("mouseenter", () => {
    img.src = character.houselogo;
    name.textContent = parseltongue(character.name);
  });

  img.addEventListener("mouseleave", () => {
    img.src = character.image;
    name.textContent =
      character.name + (character.isQuidditchPlayer ? " 🧹" : "");
  });

  const house = document.createElement("p");
  house.textContent = `House: ${character.house}`;

  const patronus = document.createElement("p");
  patronus.textContent = `Patronus: ${character.patronus}`;

  const motto = document.createElement("p");
  motto.textContent = `Motto: ${character.getHouseMotto()}`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(house);
  card.appendChild(patronus);
  card.appendChild(motto);
  container.appendChild(card);
});

function parseltongue(name) {
  return name
    .replace(/a/g, "🐍")
    .replace(/o/g, "🦎")
    .replace(/y/g, "🪱")
    .replace(/e/g, "🕷")
    .replace(/i/g, "🦗")
    .replace(/u/g, "🦂");
}

const minecraftCharacters = [
  {
    name: "Steve",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/e/e7/Steve_%28Minecraft%29.png",
  },
  {
    name: "Alex",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBlA38NGp5oMnHFsDKo4AFjsuyY_WL8VkOg&s",
  },
  {
    name: "Creeper",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/49/Creeper_%28Minecraft%29.png",
  },
  {
    name: "Enderman",
    image:
      "https://minecraft.wiki/images/thumb/Enderman_JE3_BE1.png/640px-Enderman_JE3_BE1.png?c6308",
  },
];

const minecraftContainer = document.getElementById("minecraftCharacters");

minecraftCharacters.forEach((character) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = character.name;

  const name = document.createElement("h3");
  name.textContent = character.name;

  card.appendChild(img);
  card.appendChild(name);
  minecraftContainer.appendChild(card);
});
