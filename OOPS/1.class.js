class people{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello ${this.name} & your age is ${this.age}`)
  }
}

const a = new people("Art",29);               //a = object access class data & method

a.greet();