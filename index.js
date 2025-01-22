// Cat Class
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Dog Class
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Bird Class
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }

  const cat = new Cat("Whiskers", "female");
  console.log(cat.speak()); 
  
  const dog = new Dog("Buddy", "male");
  console.log(dog.speak()); 
  
  const maleBird = new Bird("Polly", "male");
  console.log(maleBird.speak()); 
  
  const femaleBird = new Bird("Chirpy", "female");
  console.log(femaleBird.speak()); 
  
  module.exports = { Cat, Dog, Bird };
  