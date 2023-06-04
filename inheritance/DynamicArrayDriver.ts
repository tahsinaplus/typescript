import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";

let shape = new Shape(10,10);
//console.log(shape.getInfo());

let circle = new Circle(5,6,10);
//console.log(circle.getInfo());

let rec = new Rectangle(8,9,10.23,11.99);
//console.log(rec.getInfo());
let shapes: Shape[] = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rec);

for(let temp of shapes){
    console.log(temp.getInfo());
}