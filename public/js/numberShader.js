let table = document.getElementById("results");
let tbody = table.getElementsByTagName("tbody")[0];

let resetButton = document.getElementById("resetButton");
let runButton = document.getElementById("runButton");

runButton.addEventListener("click", runCode);
resetButton.addEventListener("click", resetTable);

// get start and end values
function runCode() {
  let start = document.getElementById("startValue").value;
  let end = document.getElementById("endValue").value;

  start = Number.parseInt(start);
  end = Number.parseInt(end);

  if (!isNaN(start) && !isNaN(end)) {
    // get array
    let range = generateRange(start, end);

    let even = document.getElementById("even").checked;

    // view
    displayValues(range, even);
  }
}

// logic to generate an array containing the range of numbers
function generateRange(start, end) {
  let arr = [];

  if (start <= end) {
    for (let i = start; i <= end; ++i) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; --i) {
      arr.push(i);
    }
  }
  return arr;
}

function displayValues(range, even) {
  resetTable();
  let textArr = [];
  let highlightStyle = "table-danger";
  if (even) {
    for (let i = 0; i < range.length; ++i) {
      let number = range[i];
      if (number % 2 == 0) {
        textArr.push(`<tr class="${highlightStyle}"><td>${number}</td></tr>`);
      } else {
        textArr.push(`<tr><td>${number}</td></tr>`);
      }
    }
  } else {
    for (let i = 0; i < range.length; ++i) {
      let number = range[i];
      if (number % 2 == 0) {
        textArr.push(`<tr><td>${number}</td></tr>`);
      } else {
        textArr.push(`<tr class="${highlightStyle}"><td>${number}</td></tr>`);
      }
    }
  }
  table.classList.remove("d-none");
  tbody.innerHTML = textArr.join("");
}

function resetTable() {
  table.classList.add("d-none");
  tbody.innerHTML = "";
}