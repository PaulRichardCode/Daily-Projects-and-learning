/* class Rectangle {
  constructor(_width, _height, _color) {
    console.log("The rectangle is being created");

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  multiply() {
    return parseFloat(this.width) * parseFloat(this.height);
  }

  speechBot() {
    console.log(
      `i am a rectangle with an area of ${this.width} x ${this.height} and i am ${this.color} in color`
    );
  }
}

let rectangle = new Rectangle("5", "2", "blue");
let rectangle2 = new Rectangle("15", "12", "red");

console.log(rectangle.multiply());
console.log(rectangle2.multiply());

rectangle.speechBot(); */

// GETTERS AND SETTERS N JAVASCRIPT

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  /* get area() {
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
  } */
}

let squareArea = new Square(4);

console.log(squareArea.area);

squareArea.area = "25";
console.log(squareArea.width);
