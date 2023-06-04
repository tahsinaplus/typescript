"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Shape_1 = require("./Shape");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(10, 10);
//console.log(shape.getInfo());
var circle = new Circle_1.Circle(5, 6, 10);
//console.log(circle.getInfo());
var rec = new Rectangle_1.Rectangle(8, 9, 10.23, 11.99);
//console.log(rec.getInfo());
var shapes = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rec);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var temp = shapes_1[_i];
    console.log(temp.getInfo());
}
