const object = {
  age: 9,
  getValue() {
    return this.age;
  },
  getAge: () => {
    return this.age;
  },
};

// console.log(object.getValue()); // 9
// console.log(object.getAge()); // undefined
