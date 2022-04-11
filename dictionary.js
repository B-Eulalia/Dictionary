const wordList = [];
let dictionaryContent;

function updateList(wordAdded) {
  dictionaryContent +=  "<li>" + wordAdded + "<br>";
}

function addWord() {
  let wordAdded = document.getElementById("word").value;
  wordList.push(wordAdded);
  wordList.sort();
  dictionaryContent = " ";
  wordList.forEach(updateList);
  document.getElementById("list").innerHTML = dictionaryContent;
}

function check() {
  let lookForTheWord = document.getElementById("lookFor").value;
  let res = "Not found in the dictionary";
  let result = wordList.find(tree => tree.startsWith(lookForTheWord));
  document.getElementById("message").innerHTML = typeof result === "undefined" ? res : "Is found in the dictionary";
}
