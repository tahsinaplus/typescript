"use strict";
exports.__esModule = true;
var State_1 = require("./State");
var City_1 = require("./City");
var Village_1 = require("./Village");
var state = new State_1.State();
var city = new City_1.City();
var village = new Village_1.Village();
var countries = [];
countries.push(state);
countries.push(city);
countries.push(village);
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var temp = countries_1[_i];
    console.log(temp.getInfo());
}
