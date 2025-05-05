window.onload = function () {
  const map = document.getElementById("map");
  const clicksDisplay = document.getElementById("clicks");
  const hintDisplay = document.getElementById("hint");
  const maxClicks = 40;
  let clicks = 0;
  const seconds = new Date().getSeconds();

  map.style.backgroundImage = `url("${getRandomMap()}")`;

  const treasure = {
    x: Math.floor(Math.random() * map.clientWidth),
    y: Math.floor(Math.random() * map.clientHeight),
  };
  console.log(treasure.x, treasure.y);

  function getDistance(eventX, eventY, treasureX, treasureY) {
    const dx = eventX - treasureX;
    const dy = eventY - treasureY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function getHint(distance) {
    if (distance < 20) return "Hot!";
    else if (distance < 50) return "Very warm";
    else if (distance < 100) return "Warm";
    else if (distance < 150) return "A little bit warm";
    else if (distance < 200) return "Cool";
    else if (distance < 250) return "Cold";
    else if (distance < 300) return "Very cold";

    return "Крижано!";
  }

  function getRandomMap() {
    return `map${Math.floor(Math.random() * 4 + 1)}.png`;
  }

  map.addEventListener("click", (event) => {
    clicks++;
    const distance = getDistance(
      event.offsetX,
      event.offsetY,
      treasure.x,
      treasure.y
    );
    const hint = getHint(distance);

    clicksDisplay.textContent = `${clicks}`;
    hintDisplay.textContent = `${hint}`;

    if (distance < 15) {
      const now = new Date().getSeconds();
      alert(`VICTORY! Count of click: ${clicks}. Time ${now - seconds}s`);
      location.reload();
    }

    if (clicks >= maxClicks) {
      alert("Oh no! I loose! Too much clicks");
      location.reload();
    }
  });
};
