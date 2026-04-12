// use to define static property and methods
// memory efficiency
// utility methods
// global constants

// call by className
// and not efficited by this

class Company {
  static name: string = "GOOGLE";
}

const c1 = new Company();

// console.log(c1.name)  Can't call by object instance
console.log(Company.name);
