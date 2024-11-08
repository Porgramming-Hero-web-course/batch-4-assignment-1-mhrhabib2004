function countWordOccurrences(sentence: string, word: string): number {
  // Convert both sentence and word to lowercase for case-insensitive comparison
  const lowerSentence = sentence.toLowerCase();
  const lowerWord = word.toLowerCase();

  // Split the sentence into words
  const words = lowerSentence.split(" ");
  
  // Count occurrences of the word
  let count = 0;
  for (let i = 0; i < words.length; i++) {
      if (words[i] === lowerWord) {
          count++;
      }
  }

  return count;
}

// Sample Input:
console.log(countWordOccurrences("I love typescript", "typescript"));