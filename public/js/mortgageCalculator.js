export default function mortageCalculator() {
  let results = document.getElementById("results");
  let tbody = document.getElementById("results__tbody");
  let downPaymentElement = document.getElementById("downPayment");
  let totalPrincipalElement = document.getElementById("totalPrincipal");
  let totalInterestElement = document.getElementById("totalInterest");
  let totalCostElement = document.getElementById("totalCost");
  
  let resetButton = document.getElementById("resetButton");
  let runButton = document.getElementById("runButton");
  
  runButton.addEventListener("click", runCode);
  resetButton.addEventListener("click", resetTable);
  

  function runCode() {
    let houseValue = document.getElementById("houseValue").value;
    let downPaymentRateValue = document.getElementById("downPaymentRateValue").value;
    let interestRateValue = document.getElementById("interestRateValue").value;
    let yearsValue = document.getElementById("yearsValue").value;
    
    houseValue = Number(houseValue);
    downPaymentRateValue = Number(downPaymentRateValue);
    interestRateValue = Number(interestRateValue);
    yearsValue = Number(yearsValue);

    if(!(isNaN(houseValue) | isNaN(downPaymentRateValue) | isNaN(interestRateValue) | isNaN(yearsValue))) {
      let mortgageData = generateMortgageData(houseValue, downPaymentRateValue, interestRateValue, yearsValue);
      displayData(mortgageData);
    }
  }
  
  function generateMortgageData(houseValue, downPaymentRateValue, interestRateValue, yearsValue) {
    let chart = [];
    let months = Math.ceil(yearsValue * 12);
    let downPayment = houseValue * downPaymentRateValue / 100;
    let balance = houseValue - downPayment;
    let totalPrincipal = balance;
    let interestRateValueMonths = interestRateValue / 100 / 12;
    let principal = 0;
    let interest = 0;
    let totalInterest = 0;
    let numerator = balance * interestRateValueMonths;
    let denominator = 1 - Math.pow(1 + interestRateValueMonths, -months);
    let payment = numerator / denominator;

    
    for(let i = 0; i < months; ++i) {
      interest = balance * interestRateValueMonths;
      totalInterest += interest;
      principal = payment - interest;

      if(principal > balance) {
        principal = balance;
      }

      balance -= principal;
      
      chart.push({payment, principal, interest, totalInterest, balance})
    }

    return {downPayment, totalPrincipal, totalInterest, chart, totalCost: totalPrincipal + totalInterest};
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getMortgageString(chart) {
    let text = [];
    let data;
    for(let i = 0; i < chart.length; ++i) {
      data = chart[i];
      text.push(`<tr>
        <th scope="col">${i + 1}</th>
        <td>$${numberWithCommas((data.payment).toFixed(2))}</td>
        <td>$${numberWithCommas((data.principal).toFixed(2))}</td>
        <td>$${numberWithCommas((data.interest).toFixed(2))}</td>
        <td>$${numberWithCommas((data.totalInterest).toFixed(2))}</td>
        <td>$${numberWithCommas((data.balance).toFixed(2))}</td>
      </tr>`);
    }
    return text.join("");
  }

  function displayData(mortgageData) {
    resetTable();
    results.classList.remove("d-none");
    tbody.innerHTML = getMortgageString(mortgageData.chart);
    downPaymentElement.innerHTML = `$${numberWithCommas(mortgageData.downPayment.toFixed(2))}`;
    totalPrincipalElement.innerHTML = `$${numberWithCommas(mortgageData.totalPrincipal.toFixed(2))}`;
    totalInterestElement.innerHTML = `$${numberWithCommas(mortgageData.totalInterest.toFixed(2))}`;
    totalCostElement.innerHTML = `$${numberWithCommas(mortgageData.totalCost.toFixed(2))}`;
  }
  
  function resetTable() {
    results.classList.add("d-none");
    tbody.innerHTML = "";
    totalPrincipalElement.innerHTML = "";
    totalInterestElement.innerHTML = "";
    totalCostElement.innerHTML = "";
  }
}

