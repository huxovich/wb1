class Shape {
  constructor() {
    this.type = 'Shape';
  }

  getArea() {
    console.log("Метод getArea() не реализован для данной фигуры");
  }

  getPerimeter() {
    console.log("Метод getPerimeter() не реализован для данной фигуры");
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.type = 'Rectangle';
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = 'Circle';
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.type = 'Triangle';
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getArea() {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

const rectangle = new Rectangle(4, 5);
console.log(rectangle.getArea()); // Output: 20
console.log(rectangle.getPerimeter()); // Output: 18

const circle = new Circle(3);
console.log(circle.getArea()); // Output: 28.274333882308138
console.log(circle.getPerimeter()); // Output: 18.84955592153876

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea()); // Output: 6
console.log(triangle.getPerimeter()); // Output: 12