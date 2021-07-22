import AppLayout from '../../../components/layouts/AppLayout';
import fizzBuzz from '../../../components/js/fizzBuzz';
import {useEffect, useState} from 'react';
import {numberShaderLinks as links} from '../../../components/js/links';

export default function Home() { 
  let minValue = 1;
  let maxValue = 100;
  let [fizz, setFizz] = useState(3);
  let [buzz, setBuzz] = useState(5);
  let [highlight, setHighlight] = useState(false);
  let iconClass = "fab fa-forumbee";
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript Loops","Javascript Functions","Javascript DOM manipulation","Javascript If/Else","Javascript Boolean Logic"];
  let appName = "Fizz Buzz";
  let description = "This Javascript application print Fizz for multiples of first input, Buzz for multiples of the second input, or FizzBuzz for both.";
  let metaData = {
    appName, description, links, checkList, highlight, handleHighlight, iconClass
  };
 
  function inputChange(handler, event) {
    let inputValue = event.target.value;
    handler(inputValue);
  }

  function handleHighlight(state=false) {
    setHighlight(state);
  }

  useEffect(() => {
    fizzBuzz();
  }, []);
  
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
