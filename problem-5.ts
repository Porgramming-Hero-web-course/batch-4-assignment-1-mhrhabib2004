interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: "Alice",
  age: 30
}

const getProperty = <T, X extends keyof T>(obj: T, key: X): T[X] => {
  return obj[key]
}
getProperty(person, "name")