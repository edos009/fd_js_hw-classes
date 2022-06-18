"use strict";

/*
Создать класс RangeValidator, со следующими свойствами:
■ from (number);
■ to (number);
Реализовать getter'ы и setter'ы для обоих свойств
from должен быть меньше to
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.
*/

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to === false) {
      throw new TypeError("To must be number!");
    }
    if (to <= this._from) {
      throw new RangeError("Number from must be less number to.");
    }

    this._to = to;
  }

  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from === false) {
      throw new TypeError("From must be number!");
    }

    this._from = from;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(num) {
    if (num >= this._from && num <= this._to) {
      return num;
    }
    throw new RangeError(
      `The number ${num} is not in the range from ${this._from} to ${this._to}`
    );
  }
}

const rangeV1 = new RangeValidator(1, 20);
console.log(rangeV1.validate(7));

/*
Создать класс Figure3D
Создать классы-потомки для Шара, Цилиндра и Куба.
У всех классов должен быть метод для рассчета объема.
*/

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume(){
    return null;
  }
}

class Ball extends Figure3D {
  constructor(radius) {
    super("ball");
    this.radius = radius;
  }
  getVolume(){
    return 4/3 * (Math.PI * Math.pow(this.radius, 3))
  };
}

class Cylinder extends Figure3D {
  constructor(radius, height) {
    super("cylinder");
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return Math.PI * Math.pow(this.radius, 2)* this.height;
  }
}

class Cube extends Figure3D {
  constructor(edge) {
    super("cube");
    this.edge = edge;
  }
  getVolume() {
    return Math.pow(this.edge, 3);
  }
}

const ball = new Ball(3);
const cylinder = new Cylinder(2,5);
const cube = new Cube(3);

console.log(ball.getVolume());
console.log(cylinder.getVolume());
console.log(cube.getVolume());
