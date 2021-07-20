import Head from 'next/head';
import Layout from '../../../components/layouts/Layout';
import numberShader from '../../../components/js/numberShader';
import {useEffect, useState} from 'react';
import {numberShaderLinks as links} from '../../../components/js/links';
// import Script from 'next/script';

function getChecklist() {
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript Loops","Javascript Functions","Javascript DOM manipulation","Javascript If/Else","Javascript Boolean Logic"];
  return (
    <ul className="fa-ul">
      {checkList.map((item, index) => {
        return <li key={index}><span className="fa-li"><i className="fas fa-check-square" /></span>{item}</li>
      })}
    </ul>
  )
}

function getStackIcons() {
  return (
    <h5 className="stack mt-4">
      <div className="d-flex gap-2 gap-md-3 gap-lg-4">
          <i className="fab fa-html5 stack__icon stack__icon--html5" />
          <i className="fab fa-css3-alt stack__icon stack__icon--css3" />
          <i className="fab fa-bootstrap stack__icon stack__icon--bootstrap" />
          <i className="fab fa-js stack__icon stack__icon--javascript" />
      </div>
    </h5>
  );
}

export default function Home() { 
  let minValue = 0;
  let maxValue = 500;
  let [highlight, setHighlight] = useState(false);
  let [startValue, setStartValue] = useState(0);
  let [endValue, setEndValue] = useState(10);
  let appName = "Number Shader";
  let description = "This Javascript application will print out numbers between a range, and will highlight the even or odd numbers.";
 
  function inputChange(handler, event) {
    let inputValue = event.target.value;
    if(inputValue >= minValue && inputValue <= maxValue) {
      handler(inputValue);
    }
  }

  function handleHighlight(state=false) {
    setHighlight(state);
  }

  // function addScript(path) {
  //   let script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = path;
  //   document.body.appendChild(script);
  // }

  useEffect(() => {
      // load js
      numberShader();
      // let scripts = ["/js/numberShader.js"];
      // scripts.forEach(item => {
      //   addScript(item);
      // });
  }, []);
  
  return (
    <>
      <Head>
        <title>Javascript Mini-Site Main</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="Javascript demo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout links={links}>
        <div className="container">
          <div className="js p-4">
            <div className="row row-cols-1 row-cols-lg-2 g-1">
              <div className="col order-last order-lg-first">
                <div className="logo-container text-center">
                  <i className="fas fa-sort-numeric-up app-logo"></i>
                </div>
                <h1 className="text-uppercase fw-bold text-danger">{appName}</h1>               
                <p className="lead">{description}</p>
                <div className="d-flex mb-4">
                  <button className="btn btn-warning text-uppercase" type="button" onClick={() => {handleHighlight(true)}}>TRY IT OUT</button>
                </div>
                {getChecklist()}
                {getStackIcons()}
              </div>
              <div className={`col order-first order-lg-last pt-0 pt-lg-4 mb-5 mb-lg-0 px-3 js__app${highlight ? " js__app--highlight" : ""}`}>
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* <Script src="/js/numberShader.js" strategy="afterInteractive" /> */}
    </>
  )
}
