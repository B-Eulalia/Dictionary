const listDictionary = [];
let wordAdded;
let lookForTheWord;
function createDictionary() {
  wordAdded = document.getElementById("word").value;
  listDictionary.push(wordAdded);
  listDictionary.sort();
  let txt = "";
  listDictionary.forEach(myDictionary);
  function myDictionary(wordAdded) {
    txt += "<li>" + wordAdded + "<br>";
  }
  document.getElementById("list").innerHTML = txt;
}

function check() {
  let wordlook = document.getElementById("lookFor").value;
  for (let i = 0; i < listDictionary.length; ++i) {
    if (listDictionary[i] == wordlook) {
      document.getElementById("message").innerHTML = "Is found in the dictionary";
      break;
    } else {
      document.getElementById("message").innerHTML = "Not found in the dictionary";
    }
  }
}
