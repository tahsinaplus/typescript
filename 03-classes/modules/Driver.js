"use strict";
exports.__esModule = true;
var Customer_1 = require("./Customer");
var cust = new Customer_1.Customer("a", "b");
cust.firstName = "Micheal";
cust.lastName = "Mike";
console.log("Customer Name from Driver: " + cust.firstName + " " + cust.lastName);
