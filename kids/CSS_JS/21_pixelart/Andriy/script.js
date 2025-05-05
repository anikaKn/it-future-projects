function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
  pixel.style.borderColor = borderColour;
}
let penColour = "black";
let borderColour = "black";
function setPenColour(pen) {
  penColour = pen;
  console.log(pen);
}
function setBorderColour(border) {
  borderColour = border;
  console.log(border);
}
