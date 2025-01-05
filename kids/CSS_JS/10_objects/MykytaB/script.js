let myProducts = {
    berry: {
        name: "Fanta Berry",
        price: 4.88,
        country: "US",
        tag: "#soda",
        topSaled: false,
        sale: 5,
        value: 0.3,

        img:
            "https://images.prom.ua/1577103584_w455_h473_napitok-fanta-berry.jpg"
    },
    fruitpunch: {
        name: "FANTA FRUIT PUNCH",
        price: 4.88,
        country: "US",
        tag: "#soda",
        topSaled: true,
        sale: 80,
        value: 0.3,

        img:
            "https://thesweetlab.co.uk/wp-content/uploads/2021/01/fanta-fruit-punch-355ml.jpg"
    },
    peach: {
        name: "FANTA PEACH",
        price: 2.14,
        country: "US",
        tag: "#soda",
        topSaled: false,
        sale: 0,
        value: 0.3,

        img:
            "https://images.silpo.ua/products/500x500/webp/8463a806-5da3-48bc-b6fe-bf7152e52a08.png"
    },
    stawberry: {
        name: "FANTA STRAWBERRY",
        price: 2.14,
        country: "US",
        tag: "#soda",
        topSaled: false,
        sale: 0,
        value: 0.3,

        img:
            "https://images.silpo.ua/products/500x500/webp/87ba39a1-4076-4a7e-a573-1f19b9ef9079.png"
    }
};

myProducts["pineapple"] = {
    name: "FANTA PINEAPPLE",
    price: 1.78,
    country: "US",
    tag: "#soda",
    topSaled: false,
    sale: 0,
    value: 0.3,

    img:
        "https://nuts.org.ua/wp-content/uploads/2022/02/fanta-pineapple-355ml.jpg"
};
myProducts["pinacolada"] = {
    name: "FANTA PINA COLADA",
    price: 2.18,
    country: "US",
    tag: "#soda",
    topSaled: false,
    sale: 0,
    value: 0.5,

    img: "https://content.rozetka.com.ua/goods/images/big_tile/317362548.jpg"
};
myProducts["grape"] = {
    name: "FANTA GRAPE",
    price: 1.78,
    country: "US",
    tag: "#soda",
    topSaled: false,
    sale: 0,
    value: 0.3,

    img: "https://images.prom.ua/807718554_w640_h640_gazirovka-fanta-grape.jpg"
};

delete myProducts["stawberry"];

const ul = document.getElementById("prlist");
for (const [pkey, product] of Object.entries(myProducts)) {
    console.log(`pkey ${pkey} pvalue ${product}`);
    let li = document.createElement("li");
    ul.appendChild(li);
    let div = document.createElement("div");
    li.appendChild(div);
    let im = document.createElement("img");
    im.setAttribute("src", product["img"]);
    div.appendChild(im);
    let table = document.createElement("table");
    div.appendChild(table);
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id", "products");
    table.appendChild(tbody);
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let th_name = document.createElement("th");
    let td_name = document.createElement("td");
    th_name.innerText = "Назва";
    // td_name.innerText = product["name"];
    if (product["topSaled"] == true) {
        td_name.innerHTML = `<p>${product["name"]}</p>`;
        td_name.innerHTML += `<img src="https://sigmamobile.net/wp-content/themes/sigmamobile/img/badge/ua/xhit.png.pagespeed.ic.pAVA6uLQxx.png" class="top">`;
    } else {
        td_name.innerText = product["name"];
    }
    td_name.classList.add("name");
    tr.appendChild(th_name);
    tr.appendChild(td_name);

    tr = document.createElement("tr");
    tbody.appendChild(tr);
    th_name = document.createElement("th");
    td_name = document.createElement("td");
    th_name.innerText = "Ціна";
    if (product["sale"] != 0) {
        td_name.innerHTML = `<p> ${product["price"]}  ( + знижка ${product["sale"]}% ) </p>`;
        // td_name.innerText = product["price"] + product["sale"];
    } else {
        td_name.innerText = product["price"];
    }
    // td_name.innerText = product["price"];
    td_name.classList.add("price");
    tr.appendChild(th_name);
    tr.appendChild(td_name);

    tr = document.createElement("tr");
    tbody.appendChild(tr);
    th_name = document.createElement("th");
    td_name = document.createElement("td");
    th_name.innerText = "Країна";
    td_name.innerText = product["country"];
    td_name.classList.add("produced");
    tr.appendChild(th_name);
    tr.appendChild(td_name);

    tr = document.createElement("tr");
    tbody.appendChild(tr);
    th_name = document.createElement("th");
    td_name = document.createElement("td");
    th_name.innerText = "Тег";
    td_name.innerText = product["tag"];
    td_name.classList.add("tag");
    tr.appendChild(th_name);
    tr.appendChild(td_name);

    tr = document.createElement("tr");
    tbody.appendChild(tr);
    th_name = document.createElement("th");
    td_name = document.createElement("td");
    th_name.innerText = "Value";
    td_name.innerText = product["value"];
    td_name.classList.add("value");
    tr.appendChild(th_name);
    tr.appendChild(td_name);
}

//############Sorting setings ###################################
var options = {
    valueNames: ["name", "price", "produced", "tag", "value"],
    page: 3,
    pagination: true
};

var userList = new List("product-list", options);

function hide() {
    var el = document.getElementById("advertisement");
    el.style.display = "none";
}
