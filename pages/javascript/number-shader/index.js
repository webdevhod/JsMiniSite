import AppLayout from '../../../components/layouts/AppLayout';
import numberShader from '../../../public/js/numberShader';
import {useEffect, useState} from 'react';
import {numberShaderLinks as links} from '../../../components/js/links';

export default function Home() { 
  let minValue = 0;
  let maxValue = 1000;
  let [startValue, setStartValue] = useState(0);
  let [endValue, setEndValue] = useState(10);
  let [highlight, setHighlight] = useState(false);
  let iconClass = "fas fa-sort-numeric-up";
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript Loops","Javascript Functions","Javascript DOM manipulation","Javascript If/Else","Javascript Boolean Logic"];
  let appName = "Number Shader";
  let description = "This Javascript application will print out numbers between a range, and will highlight the even or odd numbers.";
  let metaData = {
    appName, description, links, checkList, highlight, handleHighlight, iconClass
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

  useEffect(() => {
      numberShader();
  }, []);
  
  return (
    <AppLayout metaData={metaData}>
      <form>
        <div className="row row-cols-2">
          <div className="col">
            <label htmlFor="startValue" className="form-label">Start</label>
            <input type="number" className="form-control" id="startValue" min={minValue} max={maxValue} value={startValue} onChange={(event) => {inputChange(setStartValue, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
          <div className="col">
            <label htmlFor="endValue" className="form-label">End</label>
            <input type="number" className="form-control" id="endValue" min={minValue} max={maxValue} value={endValue} onChange={(event) => {inputChange(setEndValue, event)}} onFocus={() => {handleHighlight(false)}} />
          </div>
        </div>
      </form>
      <div className="options mt-3 d-flex flex-column align-items-end">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="odd" id="even" onFocus={() => {handleHighlight(false)}} defaultChecked />
          <label className="form-check-label" htmlFor="even">
            Even
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="odd" id="odd" onFocus={() => {handleHighlight(false)}} />
          <label className="form-check-label" htmlFor="odd">
            Odd&nbsp;
          </label>
        </div>
        <button type="button" className="btn btn-danger border-2 mt-2" id="runButton" onClick={() => {handleHighlight(false)}} >Run</button>
        <button type="button" className="btn btn-secondary border-2 mt-2" id="resetButton" onClick={() => {handleHighlight(false)}} >Clear</button>
      </div>
      <table className={`table mt-3 d-none`} id="results">
        <thead>
          <tr>
            <th scope="col">Results</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </AppLayout>
  )
}
