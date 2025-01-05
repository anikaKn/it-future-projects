let addForm = document.getElementById("add"); //зчитуємо форму
addForm.addEventListener("submit", (e) => { //Якщо на кнопку натиснули
  e.preventDefault();
  let name = document.getElementById("name").value; // Читаємо назву пісні
  let singer= document.getElementById("singer").value; // Тут щось замініть
  let link= document.getElementById("link").value;// І тут
  let country= document.getElementById("country").value;
  let tag= document.getElementById("tag").value;
  

  id = Math.floor(Math.random() * 100);  //Генеруємо випадковий іd для пісні
  songs[id] = { //Додаємо в список нову пісню
    name: name,
    singer: singer,
    link: link,
    country: country,
    tag: tag
  };
  refreshList(); //Перезапускаємо функцію відображення пісень
});


let songs = {
  1: {
    name: "Доброго вечора ми з України",
    link: "https://www.youtube.com/embed/BvgNgTPTkSo?si=kXKe7HYSkHiI2lrj",
    singer: "PROBASS ∆ HARDI",
    country: "Ukraine",
    tag: "Dont Like"
  },
  2: {
    name: "I HONKed the demons.",
    link: "https://www.youtube.com/embed/-zlZiBm86jI?si=r96TAxxWdaABon6d",
    singer: "HONK",
    country: "USA, probably",
    tag: "Pretty slaps"
  },
  3: {
    name: "Wendigo's Song.",
    link: "https://www.youtube.com/embed/RLujZEJGUV8?si=sKDJ_Y_W_HsMBc2B",
    singer: "Nick Casso",
    country: "England, at least i think so",
    tag: "Niiiiceeee"
  },
  4: {
    name: "Bling-Bang-Bang-Born.",
    link: "https://www.youtube.com/embed/9rVKos-oGnQ?si=hJV_EPnuGHzwtSvT",
    singer: "Creepy Nuts",
    country: "Japan",
    tag: "Pretty Funny"
  },
  5: {
    name: "Lullaby of False Hydra.",
    link: "https://www.youtube.com/embed/q85zE0JQamc?si=j-hz05-ft6UPYEuz",
    singer: "EmpathP",
    country: "USA",
    tag: "Calming"
  },
  6: {
    name: "Christ & Combat.",
    link: "https://www.youtube.com/embed/CIXchfB_sVc?si=yV4jz-HKVABwz4CE",
    singer: "Powerwolf",
    country: "You think i know?",
    tag: "We taking Jerusalem with this one"
  }
};
function refreshList() {
  let cards = document.getElementById("cards");
    cards.innerHTML = "";
for (const [skey, song] of Object.entries(songs)) {
  console.log(song);
 let card = document.createElement("div"); // створюємо новий div
  card.classList.add("card"); // додаємо йому клас card
  cards.appendChild(card); //додаємо новий <div class="card"> в середину <div class="cards">
  
    card.innerHTML = `<iframe width="100%" height="350px" src="${song["link"]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  
   let container = document.createElement("div"); // створюємо новий div
  container.classList.add("container"); // додаємо йому клас container
  card.appendChild(container); //додаємо новий <div class="container"> в середину <div class="card">

  let h4 = document.createElement("h4"); // створюємо новий h4
  container.appendChild(h4); // додаємо h4 в середину  <div class="container">
  h4.innerText = song["name"];
  let h3 = document.createElement("h3"); // створюємо новий h4
  container.appendChild(h3); // додаємо h4 в середину  <div class="container">
  h3.innerText = song["singer"];
  let h2 = document.createElement("h2"); // створюємо новий h4
  container.appendChild(h2); // додаємо h4 в середину  <div class="container">
  h2.innerText = song["country"];
  let h1 = document.createElement("h1"); // створюємо новий h4
  container.appendChild(h1); // додаємо h4 в середину  <div class="container">
  h1.innerHTML =`<span class="w3-tag w3-red">${song["tag"]}</span>`;
}
  
  }

refreshList();
