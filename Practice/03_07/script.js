/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
  color: "black",
  screen: { size: 15, resolution: "4k" },
  keyboard: { numOfKeys: 35, color: "black", language: "ENG" },
  weight: 5,
  boughtNew: true,
  brand: "Lenovo",
  changeScreenInfo: function (newSize, newResolution) {
    this.screen.size = newSize;
    this.screen.resolution = newResolution;
  },
  changeKeyboardInfo: function (newNumOfKeys, newColor, newLanguage) {
    this.keyboard.numOfKeys = newNumOfKeys;
    this.keyboard.color = newColor;
    this.keyboard.language = newLanguage;
  },
  changeBoughtNew: function (newBoughtNewFlag) {
    this.boughtNew = newBoughtNewFlag;
  },
};

console.log("Laptop Color:", laptop.color);
console.log(
  "Screen Res:",
  laptop.screen.resolution,
  "   -- Screen Size:",
  laptop.screen.size
);
console.log(
  "Keyboard Language:",
  laptop.keyboard.language,
  "   -- Keyboard Color:",
  laptop.keyboard.color,
  "   -- Keyboard Num of Keys:",
  laptop.keyboard.numOfKeys
);

laptop.changeKeyboardInfo(40, "red", "FRA");
laptop.changeBoughtNew(false);
laptop.changeScreenInfo(13, "1080p");

console.log("Laptop Color:", laptop.color);
console.log(
  "Screen Res:",
  laptop.screen.resolution,
  "   -- Screen Size:",
  laptop.screen.size
);
console.log(
  "Keyboard Language:",
  laptop.keyboard.language,
  "   -- Keyboard Color:",
  laptop.keyboard.color,
  "   -- Keyboard Num of Keys:",
  laptop.keyboard.numOfKeys
);
