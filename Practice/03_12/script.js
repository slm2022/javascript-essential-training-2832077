/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Laptop from "./Laptop.js";

const myLaptop = new Laptop(
  "My Lenovo Laptop",
  "Black",
  "5lbs",
  "True",
  "Lenovo",
  "15in",
  "4k",
  38,
  "Red",
  "ENG"
);

console.log("My laptop Info:", myLaptop);

myLaptop.changeKeyboardInfo(45, "Yellow", "FRA");

console.log("My laptop Info:", myLaptop);
