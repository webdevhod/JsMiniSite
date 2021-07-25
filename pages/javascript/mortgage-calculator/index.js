import AppLayout from '../../../components/layouts/AppLayout';
import {useEffect, useState} from 'react';
import mortgageCalculator from '../../../public/js/mortgageCalculator';
import {mortgageCalculatorMetaData} from '../../../components/js/metaData';

export default function MortgageCalculator() { 
  let minValue = 0;
  let [housePrice, setHousePrice] = useState(850000);
  let [downPaymentRate, setDownPaymentRate] = useState(20);
  let [interestRate, setInterestRate] = useState(3);
  let [years, setYears] = useState(30);

  let [highlight, setHighlight] = useState(false);
  let iconClass = "fas fa-calculator pb-2";
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript Loops","Javascript Functions","Javascript DOM manipulation","Javascript If/Else","Javascript Boolean Logic"];

  let metaData = {
    ...mortgageCalculatorMetaData,
    checkList, highlight, handleHighlight, iconClass
  };
 
  function inputChange(handler, event) {
    let inputValue = event.target.value;
    if(inputValue >= minValue) {
      handler(inputValue);
    }
  }

  function handleHighlight(state=false) {
    setHighlight(state);
  }

  useEffect(() => {
    mortgageCalculator();
  }, []);
  
  return (
    <AppLayout metaData={metaData}>
      <form>
        <div className="row row-cols-2 gy-3">
          <div className="col">
            <label htmlFor="houseValue" className="form-label">House Price $</label>
            <input type="number" className="form-control" id="houseValue" min={minValue} value={housePrice} onChange={(event) => {inputChange(setHousePrice, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
          <div className="col">
            <label htmlFor="downPaymentRateValue" className="form-label">Down Payment Rate %</label>
            <input type="number" className="form-control d-inline-block" id="downPaymentRateValue" min={minValue} value={downPaymentRate} onChange={(event) => {inputChange(setDownPaymentRate, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
          <div className="col">
            <label htmlFor="interestRateValue" className="form-label">Interest rate %</label>
            <input type="number" className="form-control" id="interestRateValue" min={minValue} value={interestRate} onChange={(event) => {inputChange(setInterestRate, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
          <div className="col">
            <label htmlFor="yearsValue" className="form-label">Years</label>
            <input type="number" className="form-control" id="yearsValue" min={minValue} value={years} onChange={(event) => {inputChange(setYears, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
        </div>
      </form>
      <div className="options mt-3 d-flex flex-column align-items-end">
        <button type="button" className="btn btn-danger border-2 mt-2" id="runButton" onClick={() => {handleHighlight(false)}} >Run</button>
        <button type="button" className="btn btn-secondary border-2 mt-2" id="resetButton" onClick={() => {handleHighlight(false)}} >Clear</button>
      </div>
      <div className="mt-4 d-none" id="results">
        <h2>Results</h2>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            Down Payment:&emsp;<span id="downPayment"></span>
          </div>
          <div className="col-12 d-flex justify-content-end">
            Total Principal:&emsp;<span id="totalPrincipal"></span>
          </div>
          <div className="col-12 d-flex justify-content-end">
            Total Interest:&emsp;<span id="totalInterest"></span>
          </div>
          <div className="col-12 d-flex justify-content-end">
            Total Cost:&emsp;<span id="totalCost"></span>
          </div>
        </div>
        <hr />
        <table className={`table mt-3`}>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Payment</th>
              <th scope="col">Principal</th>
              <th scope="col">Interest</th>
              <th scope="col">Total Interest</th>
              <th scope="col">Remaining</th>
            </tr>
          </thead>
          <tbody id="results__tbody"></tbody>
        </table>
      </div>
    </AppLayout>
  )
}
