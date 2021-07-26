import AppLayout from '../../../components/layouts/AppLayout';
import {useState} from 'react';
import {fizzBuzzMetaData} from '../../../components/js/metaData';

export default function Home() { 
  let minValue = 0;
  let maxValue = 100;
  let [fizz, setFizz] = useState(3);
  let [buzz, setBuzz] = useState(5);
  let [highlight, setHighlight] = useState(false);
  let iconClass = "fab fa-forumbee pb-2";
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript Loops","Javascript Functions","Javascript DOM manipulation","Javascript If/Else","Javascript Boolean Logic"];

  let metaData = {
    ...fizzBuzzMetaData,
    checkList, highlight, handleHighlight, iconClass
  };
 
  function inputChange(handler, event) {
    let inputValue = event.target.value;
    if(inputValue >= minValue && inputValue <= maxValue) {
      handler(inputValue);
    }
  }

  function handleHighlight(state=false) {
    setHighlight(state);
  }
  
  return (
    <AppLayout metaData={metaData}>
      <form>
        <div className="row row-cols-2">
          <div className="col">
            <label htmlFor="fizzValue" className="form-label">Fizz</label>
            <input type="number" className="form-control" id="fizzValue" min={minValue} max={maxValue} value={fizz} onChange={(event) => {inputChange(setFizz, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
          <div className="col">
            <label htmlFor="buzzValue" className="form-label">Buzz</label>
            <input type="number" className="form-control" id="buzzValue" min={minValue} max={maxValue} value={buzz} onChange={(event) => {inputChange(setBuzz, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
        </div>
      </form>
      <div className="options mt-3 d-flex flex-column align-items-end">
        <button type="button" className="btn btn-danger border-2 mt-2" id="runButton" onClick={() => {handleHighlight(false)}} >Run</button>
        <button type="button" className="btn btn-secondary border-2 mt-2" id="resetButton" onClick={() => {handleHighlight(false)}} >Clear</button>
      </div>
      <div className="d-none mt-4" id="results">
        <h2>Results</h2>
        <hr />
        <table className={`table mt-3`} id="results__table">
        </table>
      </div>
    </AppLayout>
  )
}
