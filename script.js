function Animal(name) {
  this.name = name;
  this.speed = 0;
}
Animal.prototype.run = function () {
  alert(this.name + " бежит!");
};

function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(`${this.name} подпрыгивает!`);
};

let rabbit = new Rabbit("Кролик");

// --- DOG --- //
function Dog(name) {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(`${this.name} гавкает!`);
};

let dog = new Dog("Собака");

// --- CAT --- //
function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(`${this.name} мяукает!`);
};

let cat = new Cat("Кошка");

// --- ROOSTER --- //
function Rooster(name) {
  Animal.apply(this, arguments);
}

Rooster.prototype = Object.create(Animal.prototype);
Rooster.prototype.constructor = Rooster;

Rooster.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(`${this.name} кукарекает!`);
};

let rooster = new Rooster("Петух");

// --- SNAKE --- //
function Snake(name) {
  Animal.apply(this, arguments);
}

Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(`${this.name} шипит!`);
};

let snake = new Snake("Змея");

// --- ELEPHANT --- //
function Ele(name) {
  Animal.apply(this, arguments);
}

Ele.prototype = Object.create(Animal.prototype);
Ele.prototype.constructor = Ele;

Ele.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(`${this.name} хлопает ушами!`);
};

let el = new Ele("Слон");

let arr = [rabbit, dog, el, snake, cat, rooster];

for (let i = 0; i < arr.length; i++) {
  arr[i].run();
}
