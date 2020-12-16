function speak(line) {
  console.log(`${this.name} sez '${line}'`);
}
let rabbit = { name: "Hurley", speak };
rabbit.speak("hello");

class Rabbit {
  constructor(kind) {
    this.kind = kind;
  }
  speak(line) {
    console.log(`The ${this.kind} rabbit sez '${line}'.`);
  }
}
let killerRabbit = new Rabbit("killer");
killerRabbit.speak("You are going to die, clown.")