import { Shape } from "./Shape";

export class Rectangle extends Shape{

    constructor(private thex:number, private they:number, private _width: number, private _height: number ){
        super(thex,they);
    }

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    getInfo(): string{
        return super.getInfo()+`, width = ${this._width}, height = ${this._height}`
    }
}