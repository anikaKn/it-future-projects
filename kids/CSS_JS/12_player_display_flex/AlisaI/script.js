let songs = {
  1: {
    name: "Senorita",
    link: "https://www.youtube.com/embed/2cevbhEqQF4?si=RfWYNfXmx8JGAM6W",
    singer: "(G)-idle",
    album:"I made"
  },
  2: {
    name: "Wife",
    link: "https://www.youtube.com/embed/baaNwRAhHBo?si=gxdZgA8oyMYCiH2z",
    singer: "(G)-idle",
    album:"Wife"
  },
  3: {
    name: "Nxde",
    link: "https://www.youtube.com/embed/fCO7f0SmrDc?si=SsCieJqHtjEuwFQs",
    singer: "(G)-idle",
    album:"I love"
  },
  4: {
    name: "Super lady",
    link: "https://www.youtube-nocookie.com/embed/6f3RzjXPQwA?si=qzbapRgcpbhy6mRG",
    singer: "(G)-idle",
    album:"2"
  },
  5: {
    name: "Lion",
    link: "https://www.youtube-nocookie.com/embed/6oanIo_2Z4Q?si=-LVj9EeCgamlwRhJ",
    singer: "(G)-idle",
    album:"I trust"
  },
  6: {
    name: "Oh my god",
    link: "https://www.youtube-nocookie.com/embed/om3n2ni8luE?si=_fhFwLXjan21i_eb",
    singer: "(G)-idle",
    album:"I trust"
  },
}; 

function refreshList() {
  let cards = document.getElementById("cards")
  cards.innerHTML = "";
  for (const [skey, song] of Object.entries(songs)) {
    let card= document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    card.innerHTML = `<iframe width="100%" height="350px" src="${song["link"]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  
  
 let container = document.createElement("div"); // створюємо новий div
  container.classList.add("container"); // додаємо йому клас container
  card.appendChild(container); //додаємо новий <div class="container"> в середину <div class="card">

  let h4 = document.createElement("h4"); // створюємо новий h4
  container.appendChild(h4); // додаємо h4 в середину  <div class="container">
  h4.innerText = song["name"];
  
   h4 = document.createElement("h4"); // створюємо новий h4
  container.appendChild(h4); // додаємо h4 в середину  <div class="container">
  h4.innerText = song["singer"];
  
   h4 = document.createElement("h4"); // створюємо новий h4
  container.appendChild(h4); // додаємо h4 в середину  <div class="container">
  h4.innerText = song["album"];
  }
}

refreshList();

let addForm = document.getElementById("add"); //зчитуємо форму
addForm.addEventListener("submit", (e) => { //Якщо на кнопку натиснули
  e.preventDefault();
  let name = document.getElementById("name").value; // Читаємо назву пісні
  let singer = document.getElementById("singer").value; // Читаємо виконавця пісні
  let link = document.getElementById("link").value; // Читаємо посилання на пісню
  let album = document.getElementById("album").value; // Читаємо альбом

  id = Math.floor(Math.random() * 100);  //Генеруємо випадковий іd для пісні
  songs[id] = { //Додаємо в список нову пісню
    name: name,
    singer: singer,
    link: link,
    album: album
  };
  refreshList(); //Перезапускаємо функцію відображення пісень
});