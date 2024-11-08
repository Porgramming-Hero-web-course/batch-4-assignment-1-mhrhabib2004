{function validateKeys<A extends object>(obj: A, keys: (keyof A)[]): boolean {
  return keys.every(key => key in obj);
}

// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"])); // Sample Output: true
}