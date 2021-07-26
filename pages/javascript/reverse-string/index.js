import {useState} from 'react';
import AppLayout from '../../../components/layouts/AppLayout';
import {reverseStringMetaData} from '../../../components/js/metaData';

export default function Home() { 
  let [inputText, setInputText] = useState("");
  let [highlight, setHighlight] = useState(false);
  let iconClass = "fas fa-backward";
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript For Loops", "Javascript Functions", "Javascript DOM manipulation"];
  
  let metaData = {
    ...reverseStringMetaData, checkList, highlight, handleHighlight, iconClass
  };
 
  function inputChange(handler, event) {
    let inputValue = event.target.value;
    handler(inputValue);
  }

  function handleHighlight(state=false) {
    setHighlight(state);
  }
  
  return (
    <AppLayout metaData={metaData}>
      <div className="row">
        <div className="col">
          <label htmlFor="inputText" className="form-label">Input Text</label>
          <input type="text" className="form-control" id="inputText" value={inputText} onChange={(event) => {inputChange(setInputText, event)}} onFocus={() => {handleHighlight(false)}} />
        </div>
      </div>
      <div className="options mt-3 d-flex flex-column align-items-end">
        <button type="button" className="btn btn-danger border-2 mt-2" id="runButton" onClick={() => {handleHighlight(false)}} >Reverse Text</button>
        <button type="button" className="btn btn-secondary border-2 mt-2" id="resetButton" onClick={() => {
            handleHighlight(false);
            setInputText("");
          }} >Clear</button>
      </div>
      <div className="alert alert-danger mt-4 invisible fade show" id="result" role="alert">
        <h5>Result</h5>
        <hr />
        <div id="result__text"></div>
      </div>
    </AppLayout>
  )
}
