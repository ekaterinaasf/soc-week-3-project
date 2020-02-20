console.log("-- load & test sortCharacters --");
debugger; // step through loading & testing

/* sort the characters in a string
  each character in a javascript string has a "charCode" number
  no two strings have the same charCode
  you can find a character's charCode like this:
    https://www.w3schools.com/jsref/jsref_charCodeAt.asp
  to sort strings you rearrange the characters in charCode order
*/
function sortCharacters(str) {
  return str
    .split("")
    .sort()
    .join("");
}

// declare and evaluate test cases for sortCharacters
const sortCharactersTests = [
  { name: "Test 1", args: ["fedcba"], expected: "abcdef" },
  { name: "Test 2", args: ["54321"], expected: "12345" },
  { name: "Test 3", args: [""], expected: "" },
  { name: "Test 4", args: ["aAbBcC"], expected: "ABCabc" },
  { name: "Test 5", args: [";:,."], expected: ",.:;" },
  { name: "Test 6", args: ["a1b2c3"], expected: "123abc" },
  { name: "Test 7", args: ["Walk fast."], expected: " .Waafklst" }
];
for (let test of sortCharactersTests) {
  const expected = test.expected;
  const actual = sortCharacters(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
}
console.log(sortCharactersTests);

// declare handler
function sortCharactersHandler() {
  debugger; // step through user actions

  // read & process user input
  const userText = prompt("enter some set of characters");

  // execute core logic
  result = sortCharacters(userText);

  // display result to user
  alert(result);

  // log action for developer
  console.log("\n-- sortCharacters --");
  // user inputs
  console.log("userText:", "(" + typeof userText + "),", userText);
  // result
  console.log("result:", "(" + typeof result + "),", result);
}

// attach handler to sortCharacters button with an event listener
document
  .getElementById("sortCharacters-button")
  .addEventListener("click", sortCharactersHandler);

/* looking for a hint?
  try solving the challenge in 3 steps:
    step 1, separate the string into characters
    step 2, sort the characters by comparing their charCodes
    step 3, join the sorted characters into the final string
*/
