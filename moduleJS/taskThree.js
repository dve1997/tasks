const name = Symbol('name');

class HiddenPropertiesOne {
  constructor() {
    this[name] = 'Vladislav';
  }
}

const one = new HiddenPropertiesOne();
// Раскомментировать
// console.log(one);

class HiddenPropertiesTwo {
  constructor() {
    let name = 'Vladislav';

    this.getName = function () {
      return name;
    };
  }
}

const two = new HiddenPropertiesTwo();
// Раскомментировать
// console.log(two.getName());
