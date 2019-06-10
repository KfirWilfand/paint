var isDrawing = false;
var isErasing = false;

var onChangeContext = () => {
  onPickedColor();
};

var erase = e => {
  document.getElementById("canvas").removeChild(e.target);
};

var draw = e => {
  if (!isDrawing) {
    return;
  }

  if (isScale || isMouseOnScaleItem) {
    return;
  }

  var dElement = context.getElementWithContext();

  dElement.style.left = e.offsetX + "px";
  dElement.style.top = e.offsetY + "px";

  dElement.addEventListener("mouseover", function() {
    if (!isErasing) return;
    document.getElementById("canvas").removeChild(dElement);
  });
  canvas.appendChild(dElement);
};

var onChangeSizeOfPen = e => {
  switch (e.target.id) {
    case "plus":
      $("#plus").toggleClass("choosed-tool");
      context.height++;
      context.width++;
      break;
    case "minus":
      context.height--;
      context.width--;
      break;
  }
};

$(document).ready(function() {
  $("#canvas")
    .mousedown(function(e) {
      switch ($(".choosed-tool")[0].id) {
        case "pen":
          isDrawing = true;
          draw(e);
          break;
        case "eraser":
          isErasing = true;
          break;
      }
    })
    .mousemove(function(e) {
      switch ($(".choosed-tool")[0].id) {
        case "pen":
          draw(e);
          break;
        case "eraser":
          break;
      }
    })
    .mouseup(function() {
      isDrawing = false;
      isScale = false;
      isErasing = false;
    });

  $(".tool-item.t-drawer").click(function(e) {
    $(".tool-item.t-drawer").toggleClass("choosed-tool");
  });

  $(".tool-item.t-mod").click(function(e) {
    var item = $(this);
    item.toggleClass("choosed-tool");
    setTimeout(function() {
      item.toggleClass("choosed-tool");
    }, 100);
    onChangeSizeOfPen(e);
  });

  $(".tool-item.t-mod").click(function(e) {
    var item = $(this);
    item.toggleClass("choosed-tool");
    setTimeout(function() {
      item.toggleClass("choosed-tool");
    }, 100);
    onChangeSizeOfPen(e);
  });

  $(".tool-item.t-brash").click(function(e) {
    $(".tool-item.t-brash").toggleClass("choosed-tool");

    switch (e.target.id) {
      case "brash-1":
        context.borderRadius = 25;
        break;
      case "brash-2":
        context.borderRadius = 0;
        break;
    }
  });
});
