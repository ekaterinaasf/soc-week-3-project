console.log("-- load & test repeatCharacters --");
debugger; // step through loading & testing

// repeat each character in a string, without changing the order
function repeatCharacters(str, repetitions) {
  let rez = "";
  if (isNaN(repetitions)) {
    return "repetitions must be a number";
  } else {
    let str1 = str.slice("");
    for (let i in str1) {
      //string.repeat([count]);
      rez = rez + str1[i].repeat(Number(repetitions));
    }
    return rez;
  }
}

// declare and evaluate test cases for repeatCharacters
const repeatCharactersTests = [
  { name: "Test 1", args: ["aaaa", 2], expected: "aaaaaaaa" },
  { name: "Test 2", args: ["fast!", 3], expected: "fffaaasssttt!!!" },
  { name: "Test 3", args: ["They type fast!", 0], expected: "" },
  { name: "Test 4", args: ["...", 1], expected: "..." },
  {
    name: "Test 5",
    args: ["bbbb", NaN],
    expected: "repetitions must be a number"
  },
  {
    name: "Test 6",
    args: ["hi there", "x"],
    expected: "repetitions must be a number"
  }
];
for (let test of repeatCharactersTests) {
  const expected = test.expected;
  const actual = repeatCharacters(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
}
console.log(repeatCharactersTests);

// declare handler
function repeatCharactersHandler() {
  debugger; // step through user actions

  // read & process user input
  const userPhrase = prompt("enter a phrase");
  const userNumStr = prompt("enter a num");

  //Not necessary, as testing and conversion inside a function:
  //const numRepeatsIsANumber = typeof userNumStr === "number";
  //console.assert(numRepeatsIsANumber, 'cast numRepeats to type "number"');

  // execute core logic
  const result = repeatCharacters(userPhrase, userNumStr);

  // display result to user
  alert(result);

  // log action for developer
  console.log("\n-- repeatCharacters --");
  // user inputs
  console.log("userPhrase:", "(" + typeof userPhrase + "),", userPhrase);
  // result
  console.log("result:", "(" + typeof result + "),", result);
}

// attach handler to repeatCharacters button with an event listener
document
  .getElementById("repeatCharacters-button")
  .addEventListener("click", repeatCharactersHandler);

/* looking for a hint?
  - try using an early return to avoid entering the loop if repetitions isNaN
  - you can iterate through each character in a string using for ... of
  - it is possible to solve this challenge using a for loop inside a for loop
*/
