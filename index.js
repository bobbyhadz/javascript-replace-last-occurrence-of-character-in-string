// EXAMPLE 1 - Replace the Last Occurrence of a Character in a String in Javascript

const str = 'bobbyhadz.com';

const lastIndex = str.lastIndexOf('b');

const replacement = '.';

const replaced =
  str.slice(0, lastIndex) +
  replacement +
  str.slice(lastIndex + 1);

console.log(replaced); // 👉️ bob.yhadz.com

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace the Last Occurrence of a Character in String using split()

// function replaceLastOccurrence(string, replacement) {
//   const lastIndex = str.lastIndexOf('b');

//   const arr = string.split('');
//   console.log(arr);

//   arr[lastIndex] = replacement;

//   return arr.join('');
// }

// const str = 'bobbyhadz.com';

// // 👇️ bob.yhadz.com
// console.log(replaceLastOccurrence(str, '.'));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace the Last Occurrence of a Character in String using substring()

// const str = 'bobbyhadz.com';

// const lastIndex = str.lastIndexOf('b');

// const replacement = '.';

// const replaced =
//   str.substring(0, lastIndex) +
//   replacement +
//   str.substring(lastIndex + 1);

// console.log(replaced); // 👉️ bob.yhadz.com

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the last Occurrence of a Character from a String in JS

// function removeLastOccurrence(string, char) {
//   const lastIndex = string.lastIndexOf(char);

//   return string.slice(0, lastIndex) + str.slice(lastIndex + 1);
// }

// const str = 'hello world';

// // 👇️ hello word
// console.log(removeLastOccurrence(str, 'l'));

// // 👇️ hello wrld
// console.log(removeLastOccurrence(str, 'o'));

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove the last occurrence of a substring from a string

// function removeLastOccurrence(string, substring) {
//   const lastIndex = string.lastIndexOf(substring);

//   return (
//     string.slice(0, lastIndex) +
//     str.slice(lastIndex + substring.length)
//   );
// }

// const str = 'abc 123 abc 123';

// // 👇️ 'abc 123  123'
// console.dir(removeLastOccurrence(str, 'abc'));
