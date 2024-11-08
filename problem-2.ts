function removeDuplicates(numbers: number[]): number[] {
  const uniqueNumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
      if (!uniqueNumbers.includes(numbers[i])) {
          uniqueNumbers.push(numbers[i]);
      }
  }
  return uniqueNumbers;
}

// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));