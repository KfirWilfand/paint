var changeScale = (e, isIncreasing) => {
  if (!isScale) {
    return;
  }
  var canvasStyle = $("#canvas").css("maxHeight");

  var calcSizeValue = preValue => {
    preValue = parseInt(preValue);
    var calcVar = isIncreasing ? preValue + 1 : preValue - 1;
    return calcVar + "px";
  };

  switch (e.target.id) {
    case "right-top":
    case "right-center":
      $("#canvas")
        .css("maxWidth", calcSizeValue($("#canvas").css("maxWidth")))
        .css("minWidth", calcSizeValue($("#canvas").css("minWidth")));
      break;
    case "bottom-right":
      $("#canvas")
        .css("maxWidth", calcSizeValue($("#canvas").css("maxWidth")))
        .css("minWidth", calcSizeValue($("#canvas").css("minWidth")))
        .css("maxHeight", calcSizeValue($("#canvas").css("maxHeight")))
        .css("minHeight", calcSizeValue($("#canvas").css("minHeight")));
      break;
    case "bottom-left":
      // $("#canvas")
      //   .css("maxWidth", calcSizeValue($("#canvas").css("maxWidth")))
      //   .css("minWidth", calcSizeValue($("#canvas").css("minWidth")))
      //   .css("maxHeight", calcSizeValue($("#canvas").css("maxHeight")))
      //   .css("minHeight", calcSizeValue($("#canvas").css("minHeight")));
      break;
    case "bottom-center":
      // $("#canvas")
      //   .css("maxHeight", calcSizeValue($("#canvas").css("maxHeight")))
      //   .css("minHeight", calcSizeValue($("#canvas").css("minHeight")));
      break;
  }
};

var firstMouseDownOffsetX;
var firstMouseDownOffsetY;

$(document).ready(function() {
  $(".scale-item")
    .mousedown(function(e) {
      firstMouseDownOffsetX = parseInt(e.offsetX);
      firstMouseDownOffsetY = parseInt(e.offsetY);
      isScale = true;
    })
    .mouseout(function(e) {
      isMouseOnScaleItem = false;
    })
    .mousemove(function(e) {
      isMouseOnScaleItem = true;

      parseInt(e.offsetX) > firstMouseDownOffsetX
        ? changeScale(e, true)
        : changeScale(e, false);
    });

  $("#canvas-height").change(function(e) {
    let newHeight = parseInt(e.target.value);
    $("#canvas")
      .css("minHeight", newHeight)
      .css("minHeight", newHeight);

    canvasHeight = newHeight;
  });

  $("#canvas-width").change(function(e) {
    let newWidth = parseInt(e.target.value);

    $("#canvas")
      .css("maxWidth", parseInt(e.target.value))
      .css("minWidth", parseInt(e.target.value));

      canvasWidth = newWidth;
  });
});
