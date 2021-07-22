export default function reverseString() {
  let resetButton = document.getElementById("resetButton");
  let runButton = document.getElementById("runButton");
  
  runButton.addEventListener("click", runCode);
  resetButton.addEventListener("click", resetText);

  let resultDisplay = document.getElementById("result");
  let resultText = document.getElementById("result__text");

  function runCode() {
    let text = document.getElementById("inputText").value;

    let reversedText = reverseString(text);

    displayText(reversedText);
  }
  
  function reverseString(text) {
    let result = [];

    for(let i = text.length - 1; i >= 0; --i) {
      result.push(text[i]);
    }

    return result.join("");
  }
  
  function displayText(reversedString) {
    resultText.innerHTML = reversedString;

    resultDisplay.classList.remove("invisible");
    
  }
  
  function resetText() {
    resetText.innerHTML = "";
    
    resultDisplay.classList.add("invisible");
  }
}