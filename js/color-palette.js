var colors = [
  "#1779ba",
  "#767676",
  "#3adb76",
  "#ffae00",
  "#cc4b37",
  "#663399",
  "#003366",
  "#fcc743",
  "#a29c9b",
  "#767676",
  "#b48000",
  "#faDafa",
  "#cc4bD7",
  "#6632DD",
  "#00DFF6",
  "#fcDF43"
];

var mainPickedColor = "#a29c9b";
var slavePickedColor = "#a29c9b";

var fillColorPalette = () => {
  colors.forEach(color => {
    var colorItem = document.createElement("div");
    colorItem.setAttribute("class", "col-1 palette-item");
    colorItem.style.backgroundColor = color;
    colorItem.addEventListener("click", onPickedColor);
    document.getElementById("color-palette").appendChild(colorItem);
  });
};

var onPickedColor = e => {
  slavePickedColor = mainPickedColor;
  mainPickedColor = e.target.style.backgroundColor;
  document.getElementById(
    "main-picked-item"
  ).style.backgroundColor = mainPickedColor;
  document.getElementById(
    "slave-picked-item"
  ).style.backgroundColor = slavePickedColor;
};

//init palette
fillColorPalette();
document
  .getElementById("slave-picked-item")
  .addEventListener("click", onPickedColor);
