var defaultColor = "#a29c9b";
var mainPickedColor = defaultColor;
var slavePickedColor = defaultColor;
var isScale = false;
var isMouseOnScaleItem = false;

var context = {
  width: 5,
  height: 5,
  color: defaultColor,
  borderRadius: 500,
  getElementWithContext: e => {
    var dElement = document.createElement("div");
    dElement.id = "d-drawer";
    var dElementStyle = dElement.style;
    dElementStyle.width = context.width + "px";
    dElementStyle.height = context.height + "px";
    dElementStyle.backgroundColor = context.color;
    dElementStyle.position = "absolute";
    dElementStyle.border = "0px";
    dElementStyle.padding = "0px";
    dElementStyle.margin = "0px";
    dElementStyle.borderRadius = context.borderRadius + "px";
    return dElement;
  }
};

$(document).ready(function() {
  var canvas = $("#canvas");
});
