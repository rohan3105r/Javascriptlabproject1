function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

console.log(countVowels("Hello World")); 
