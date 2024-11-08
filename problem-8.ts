{
  
  interface Person {
    name: string;
    email: string;
    age: number;
}
const person: Person = { name: "Alice", email: "alice@gmail.com", age: 32 }

const validateKeys = <T extends object, K extends keyof T>(obj: T, keys: K[]): boolean => {
    return keys.every((key) => key in obj);
};

validateKeys(person, ["name","age"])

}