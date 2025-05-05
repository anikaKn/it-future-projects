window.onload = function () {
  const map = document.getElementById("map");
  const clicksDisplay = document.getElementById("clicks");
  const hintDisplay = document.getElementById("hint");
  let clicks = 0;
  const treasure = {
    x: Math.floor(Math.random() * map.clientWidth),
    y: Math.floor(Math.random() * map.clientHeight),
  };
  // Відстань між двома точками
  function getDistance(eventX, eventY, treasureX, treasureY) {
    const dx = eventX - treasureX;
    const dy = eventY - treasureY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function getHint(distance) {
    if (distance < 25) return "SO CLOSE TO ERUPTION THAT YOU SHOULD RUN!!";
    if (distance < 50) return "Eruption!";
    if (distance < 100) return "Warm!";
    if (distance < 200) return "Cold!";
    if (distance < 300) return "Freezing cold!";
    if (distance < 340) return "Idk what are you doing in antarctica -_-";
    return "WHAT ARE YOU DOING IN ANOTHER SIDE OF THE WORLD IF YOU ARE SEARCHING VOLCANO?";
  }
  map.addEventListener("click", (event) => {
    clicks++;
    const distance = getDistance(event.offsetX, event.offsetY, treasure.x, treasure.y);
    const hint = getHint(distance);

    clicksDisplay.textContent = clicks;
    hintDisplay.textContent = hint;
    if (distance < 15) {
      alert("You did it, but Why the hell are you jumping into a lava?");
      location.reload();
    }
    if (clicks > 30) {
      alert("WHAT THE HELL JUST HAPPENED??(You lost) Try again.. 0_0");
      location.reload();
    }
  });
};
