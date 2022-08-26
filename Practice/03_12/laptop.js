/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Laptop {
  constructor(
    // Defines parameters:
    color,
    weight,
    boughtNew,
    brand,
    screenSize,
    screenRes,
    keyboardNumOfKeys,
    keyboardColor,
    keyboardLanguage
  ) {
    // Define properties:
    this.color = color;
    this.weight = weight;
    this.boughtNew = boughtNew;
    this.brand = brand;
    this.screen = {
      size: screenSize,
      resolution: screenRes,
    };
    this.keyboard = {
      numOfKeys: keyboardNumOfKeys,
      color: keyboardColor,
      language: keyboardLanguage,
    };
  }
  // Add methods like normal functions:
  changeScreenInfo(newSize, newResolution) {
    this.screen.size = newSize;
    this.screen.resolution = newResolution;
  }
  changeKeyboardInfo(newNumOfKeys, newKeyboardColor, newLanguage) {
    this.keyboard.numOfKeys = newNumOfKeys;
    this.keyboard.color = newKeyboardColor;
    this.keyboard.language = newLanguage;
  }
  changeBoughtNew(newBoughtNewFlag) {
    this.boughtNew = newBoughtNewFlag;
  }
}

export default Laptop;
