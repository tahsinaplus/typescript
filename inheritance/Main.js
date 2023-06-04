"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Shape_1 = require("./Shape");
var shape = new Shape_1.Shape(10, 10);
console.log(shape.getInfo);
var circle = new Circle_1.Circle(5, 6, 10);
console.log(circle.getInfo);
