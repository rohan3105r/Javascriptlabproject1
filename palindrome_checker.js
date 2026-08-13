
function isPalindrome(value) {
  const str = String(value);
  const reversed = str.split("").reverse().join("");
  return str === reversed ? "Palindrome" : "Not a Palindrome";
}

console.log(isPalindrome(121));     
console.log(isPalindrome("madam")); 
console.log(isPalindrome(123));     
