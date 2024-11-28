const name = Symbol('name');
class One {
  constructor() {
    this[name] = 'Vera';
    this.getName = function () {
      return `Name: ${this[name]}`;
    };
  }
}

class Two {
  constructor() {
    let name = 'Vladislav';
    this.getName = function () {
      return `Name: ${name}`;
    };
  }
}

class Three {
  #name = 'Diana';

  getName() {
    return `Name: ${this.#name}`;
  }
}

// const one = new One();
// console.log(one.getName());

// const two = new Two();
// console.log(two.getName());

// const three = new Three();
// console.log(three.getName());
