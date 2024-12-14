//readonly

type User3 = {
  readonly name: string;
  readonly age: number;
}

const user: User3 = {
  name: 'John',
  age: 36,
}

//user.age = 25;  // gives an error because age is a read-only property


// type User3 = {
//   name: string;
//   age: number;
// }

// const user: Readonly<User3> = {
//   name: 'John',
//   age: 36,
// }