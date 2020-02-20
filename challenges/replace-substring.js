console.log("-- load & test replaceSubstring --");
debugger; // step through loading & testing

// replace every occurrence of a substring with a new value
function replaceSubstring(str, oldThing, newThing) {
  if (str.indexOf(oldThing) === -1) {
    return str;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str.slice(i, i + oldThing.length) === oldThing) {
        str.slice(i, i + oldThing, newThing);
      }
    }
  }

  /* if (str.indexOf(oldThing) !== -1) {
    let reg = new RegExp(oldThing, "g");
    return str.replace(reg, newThing); //g-global match flag for REGEX */

  /*let i=0;
    while (i=str.matchAll(oldThing)) {    }
    str.includes(oldThing)
    return str.replace(oldThing, newThing);*/
  return str;
}

console.log('Test with: "aaaa", "a", "b" ', replaceSubstring("aaaa", "a", "b"));
console.log(
  '"They type fast!", "type", "talk" ',
  replaceSubstring("They type fast!", "type", "talk")
);
console.log(
  '"They type fast!", "pe fa", "" ',
  replaceSubstring("They type fast!", "pe fa", "")
);
console.log('["bbbb", "1", "2" ', replaceSubstring("bbbb", "1", "2"));

// declare and evaluate test cases for replaceSubstring
const replaceSubstringTests = [
  { name: "Test 1", args: ["aaaa", "a", "b"], expected: "bbbb" },
  {
    name: "Test 2",
    args: ["They type fast!", "type", "talk"],
    expected: "They talk fast!"
  },
  {
    name: "Test 3",
    args: ["They type fast!", "pe fa", ""],
    expected: "They tyst!"
  },
  { name: "Test 4", args: ["bbbb", "1", "2"], expected: "bbbb" },
  { name: "Test 5", args: ["", "x", "y"], expected: "" },
  { name: "Test 6", args: ["..|..|..", "|.", ","], expected: "..,.,." },
  {
    name: "Test 7",
    args: ["Brussels, Belgium", "Brussels, Belgium", "Ghent, Flanders"],
    expected: "Ghent, Flanders"
  }
];
for (let test of replaceSubstringTests) {
  const expected = test.expected;
  const actual = replaceSubstring(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
}
console.log(replaceSubstringTests);

// declare handler
function replaceSubstringHandler(event) {
  debugger; // step through user actions

  // read & process user input
  const inputStr = prompt("enter some text");
  const oldStr = prompt("enter what to replace");
  const newStr = prompt("enter new value to replace");

  // perform core logic
  const result = replaceSubstring(inputStr, oldStr, newStr);

  // display result to user
  alert(result);

  // log action for developer
  console.log("\n-- replaceSubstring --");
  // user inputs
  // result
}

// attach handler to replaceSubstring button with an event listener
document
  .getElementById("replaceSubstring-button")
  .addEventListener("click", replaceSubstringHandler);

/* looking for a hint?
  too bad!  no hints for this challenge
*/
