class person {
  constructor(name, job, age) {
    this.exercise = (x) => console.log(x);
    this.fetchJob = () => console.log(`${name} is a ${job}`);
  }
}

class programmer {
  constructor(name, job, age, languages, busy = true) {
    this.completeTask = () => (busy = false);
    this.acceptNewTask = () => (busy = true);
    this.offerNewTask = () => {
      busy === true
        ? console.log(`${name} can't accept any new tasks right now`)
        : console.log(`${name} would love to take on a new responsibility`);
    };
    this.learnLanguage = (lan) => languages.push(lan);
    this.listLanguages = () => console.log(languages);
  }
}

const hector = new programmer("Hector", "Coding Apprentice", 19, [
  "Javascript",
  "CSS",
  "HTML",
]);

hector.completeTask();

hector.offerNewTask();

hector.learnLanguage("C++");

hector.listLanguages();
