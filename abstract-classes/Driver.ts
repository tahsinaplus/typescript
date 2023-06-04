import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let circle = new Circle(10,11,12);
// area = 452.3893421169302
let rectangle = new Rectangle(13,14,15.24,16.99);
// area = 258.9276

let shapes: Shape[] = [];
shapes.push(circle);
shapes.push(rectangle);

for(let temp of shapes){
    console.log(temp.getInfo()+`, area = ${temp.calculate().toFixed(2)}`)
}
