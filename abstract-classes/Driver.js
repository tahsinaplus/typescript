"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(10, 11, 12);
// area = 452.3893421169302
var rectangle = new Rectangle_1.Rectangle(13, 14, 15.24, 16.99);
// area = 258.9276
var shapes = [];
shapes.push(circle);
shapes.push(rectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var temp = shapes_1[_i];
    console.log(temp.getInfo() + ", area = ".concat(temp.calculate().toFixed(2)));
}
