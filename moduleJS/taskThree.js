const name = 'name';

class HiddenPropertiesOne {
  constructor() {
    this[name] = 'Vladislav';
  }
}

const one = new HiddenPropertiesOne();
console.log(one);

class HiddenPropertiesTwo {
  constructor() {
    let name = 'Vladislav';

    this.getName = function () {
      return name;
    };
  }
}

const two = new HiddenPropertiesTwo();
console.log(two.getName());
