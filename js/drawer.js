var canvas = document.getElementById("canvas");
var isDrawing = false;
var draw = e => {

  if (!isDrawing) return;

  var dElement = document.createElement("div");
  var dElementStyle = dElement.style;

  dElementStyle.width = "12px";
  dElementStyle.height = "12px";
  dElementStyle.backgroundColor = mainPickedColor;
  dElementStyle.left = e.layerX + "px";
  dElementStyle.top = e.layerY + "px";
  dElementStyle.position = "absolute";
  dElementStyle.border = "0px";
  dElementStyle.padding = "0px";
  dElementStyle.margin = "0px";
  canvas.appendChild(dElement);
};

canvas.addEventListener("mousedown", function() {
  isDrawing = true;
});

canvas.addEventListener("mouseup", function() {
  isDrawing = false;
});

canvas.addEventListener("mousemove", draw);

