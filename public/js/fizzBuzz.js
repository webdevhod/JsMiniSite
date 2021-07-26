let results = document.getElementById("results");
let table = document.getElementById("results__table");

let resetButton = document.getElementById("resetButton");
let runButton = document.getElementById("runButton");

runButton.addEventListener("click", runCode);
resetButton.addEventListener("click", resetTable);


function runCode() {
  let fizz = document.getElementById("fizzValue").value;
  let buzz = document.getElementById("buzzValue").value;

  fizz = Number.parseInt(fizz);
  buzz = Number.parseInt(buzz);

  if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
    // get table
    let fizzBuzzTable = generateTable(fizz, buzz);

    // view
    displayTable(fizzBuzzTable);
  }
}

function generateTable(fizz, buzz) {
  let arr = [];
  let fizzColorClass = "text-danger";
  let buzzColorClass = "text-success";
  let fizzBuzzColorClass = "text-warning";
  let textTuple = ["", null];
  let checkFizz = false;
  let checkBuzz = false;

  for(let i = 1; i <= 100; ++i) {
    checkFizz = i % fizz === 0;
    checkBuzz = i % buzz === 0;

    if(checkFizz) {
      if(checkBuzz) {
        textTuple[0] = "FizzBuzz";
        textTuple[1] = fizzBuzzColorClass;
      } else {
        textTuple[0] = "Fizz";
        textTuple[1] = fizzColorClass;
      } 
    } else if (checkBuzz) {
      textTuple[0] = "Buzz";
      textTuple[1] = buzzColorClass;
    } else {
      textTuple[0] = i.toString();
      textTuple[1] = null;
    }

    if(i % 5 === 1) {
      arr.push(`<tr><td${textTuple[1] !== null ? ` class="${textTuple[1]}"` : ''}>${textTuple[0]}</td>`)
    } else if (i % 5 === 0) {
      arr.push(`<td${textTuple[1] !== null ? ` class="${textTuple[1]}"` : ''}>${textTuple[0]}</td></tr>`)
    } else {
      arr.push(`<td${textTuple[1] !== null ? ` class="${textTuple[1]}"` : ''}>${textTuple[0]}</td>`)
    }
  }

  return arr.join("");
}

function displayTable(fizzBuzzTable) {
  resetTable();
  results.classList.remove("d-none");
  table.innerHTML = fizzBuzzTable;
}

function resetTable() {
  results.classList.add("d-none");
  table.innerHTML = "";
}

