let person = {
  name: "James",
  age: 22,
  favouriteColour: undefined,
};

function addYear() {
  person.age++, year++;
}

for (let year = 2023; year < 2100; year++, person.age++) {
  showMessage(person.name + " will be " + person.age + " in " + year);
}
