class Animal {
  makeSound(){
    console.log("Generic Sound Produce")
  }
}

class Dog extends Animal {
  makeSound(){
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(){
    console.log("Meow");
  }
}

const Animals = [new Dog() , new Cat(), new Animal()];

Animals.forEach(animal=>animal.makeSound());