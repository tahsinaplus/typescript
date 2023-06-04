import { Country } from "./Country";
import { State } from "./State";
import { City } from "./City";
import { Village } from "./Village";

let state = new State();
let city = new City();
let village = new Village();

let countries: Country[] = [];
countries.push(state);
countries.push(city);
countries.push(village);

for(let temp of countries){
    console.log(temp.getInfo());
}