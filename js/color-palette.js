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

var fillColorPalette = () => {
  colors.forEach(color => {
    var colorItem = $("<div></div>")
      .addClass("col-1 palette-item")
      .css("background-color", color)
      .click(onPickedColor);

    $("#color-palette").append(colorItem);
  });
};

var onPickedColor = e => {
  slavePickedColor = mainPickedColor;
  mainPickedColor = $(e.target).css("background-color");
  context.color = mainPickedColor;
  document.getElementById(
    "main-picked-item"
  ).style.backgroundColor = mainPickedColor;
  document.getElementById(
    "slave-picked-item"
  ).style.backgroundColor = slavePickedColor;
};

$(document).ready(function() {
  fillColorPalette();
  $("#slave-picked-item").click(onPickedColor);
});