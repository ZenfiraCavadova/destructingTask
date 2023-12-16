//? const numbers = [1, 2, 3, 4, 5]; Arrayın elementlərini yazdırın

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, , fourth] = numbers;
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(fourth); // Output: 4

//?Objectin elementlərini yazdırın
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };
// const { firstName, lastName, age } = person;

// console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe
// console.log(age); // Output: 30

//?printPerson Funksiyasını yazın.
const person1 = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 25,
};
const printPerson = function (person) {
  console.log(
    `${person.firstName} ${person.lastName} is ${person.age} years old.`
  );
};
printPerson(person1); // Output: Alice Johnson is 25 years old.

//?Ekrana yazdırın məlumatları aşağıdakı kimi
const user = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  details: {
    firstName: "John",
    lastName: "Doe",
    address: {
      city: "New York",
      zipCode: "10001",
    },
  },
};
const {
  username,
  details: {
    firstName,
    address: { city, zipCode },
  },
} = user;
console.log(username); // Output: john_doe
console.log(firstName); // Output: John
console.log(city); // Output: New York

//? const numbers = [1, 2, 3, 4, 5];  rest parametrdən istifadə edərək ilk ədədi və qalan ədədləri ekrana yazdırın
//console.log(first); // Output: 1
//console.log(restOfNumbers); // Output: [2, 3, 4, 5]

const numbers1 = [1, 2, 3, 4, 5];

const [first, ...restOfNumbers] = numbers1;

console.log("First number:", first);
console.log("Rest of the numbers:", restOfNumbers);
