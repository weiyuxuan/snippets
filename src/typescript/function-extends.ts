// How to check if a function type is a subtype of another function type:
// whether the parameter type follows type contravariance,
// and whether the return value type follows type covariance.

class Animal {
  asPet () {}
}

class Dog extends Animal {
  bark () {}
}

class Corgi extends Dog {
  cute () {}
}

function fn (dog: Dog) {
  dog.bark();
  return dog;
}

type AnimalToAnimal = (animal: Animal) => Animal;
type AnimalToDog = (animal: Animal) => Dog;
type AnimalToCorgi = (animal: Animal) => Corgi;
type DogToAnimal = (dog: Dog) => Animal;
type DogToDog = (dog: Dog) => Dog;
type DogToCorgi = (dog: Dog) => Corgi;
type CorgiToAnimal = (corgi: Corgi) => Animal;
type CorgiToDog = (corgi: Corgi) => Dog;
type CorgiToCorgi = (corgi: Corgi) => Corgi;

// Dog is a subtype of Animal, but Dog -> T is not a subtype of Animal -> T,
// cause the parameter type follows type contravariance.
// const animalToAnimalFunc: AnimalToAnimal = fn;
// const animalToDogFunc: AnimalToDog = fn;
// const animalToCorgiFunc: AnimalToCorgi = fn;

// Corgi is a subtype of Dog, but T -> Dog is not a subtype of T -> Corgi,
// cause the return value type follows type covariance.
// const dogToCorgiFunc: DogToCorgi = fn;
// const corgiToCorgiFunc: CorgiToCorgi = fn;

const dogToAnimalFunc: DogToAnimal = fn;
const dogToDogFunc: DogToDog = fn;

const corgiToAnimalFunc: CorgiToAnimal = fn;
const corgiToDogFunc: CorgiToDog = fn;

export {};
