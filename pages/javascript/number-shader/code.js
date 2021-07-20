import Head from 'next/head';
import Layout from '../../../components/layouts/Layout';
// import numberShader from '../../../components/js/prism';
import {useEffect, useState} from 'react';
import {numberShaderLinks as links} from '../../../components/js/links';
import "prismjs/themes/prism.css";
import Prism from 'prismjs';
import prismLineNumbers from '../../../components/js/prism-line-numbers'

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
  let [code, setCode] = useState("");
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

  function getJsFile(path) {
    try {
      fetch(path)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setCode(text)
      })
    } catch(error) {
        console.log(error)
      }
  }

  useEffect(() => {
    // get numberShader.js as text
    getJsFile("/js/numberShader.js");
  }, []);

  useEffect(() => {
    Prism.highlightAll();
    prismLineNumbers();
  }, [code]);
  
  return (
    <>
      <Head>
        <title>Javascript Mini-Site Main</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="Javascript Code Explanation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/prism-line-numbers.css" />
      </Head>
      <Layout links={links}>
        <div className="container">
          <div className="js p-4">
            <div className="row row-cols-1 row-cols-lg-2 g-1">
              <div className="col col-lg-8">
                <pre className="line-numbers">
                  <code className="language-javascript">
                    {code}
                  </code>
                </pre>
              </div>
              <div className="col col-lg-4">
                <div className="p-4">
                  <p>Variables for the table, will be used in the functions <span className="fw-bold">displayValues</span> and <span className="fw-bold">resetTable</span>.</p>
                  <p><span className="fw-bold">resetButton, runButton</span> variables for the buttons.</p>
                  <span>&nbsp;</span>
                  <p><span className="fw-bold">addEventListener</span> adds click functionality, so when the buttons are clicked, the callback function (the function that get called at the end) runs.</p>
                  <span>&nbsp;</span>
                  <h5>runCode</h5>
                  <p>Get the start and end integer values from the form.</p>
                  <span>&nbsp;</span>
                  <p>Convert the strings into integers.</p>
                  <span>&nbsp;</span>
                  <p>Check if they are valid integers; if so, proceed.</p>
                  <p>Get an array that contains the range of integers.</p>
                  <span>&nbsp;</span>
                  <p>Get the even or odd selected value.</p>
                  <span>&nbsp;</span>
                  <p>Call the function to dynamically display the table values.</p>
                  <p>&nbsp;</p>
                  <span>&nbsp;</span>
                  <h5>generateRange</h5>
                  <p><span className="fw-bold">arr</span> stands for array.</p>
                  <p>If <span className="fw-bold">start</span> is less than or equal to <span className="fw-bold">end</span>,<br />use incrementing for loop<br />and append integers into array.</p>
                  {/* <span>&nbsp;</span> */}
                  <p>Else,<br />use decrementing for loop,<br />and append integers into array.</p>
                  <span>&nbsp;</span>
                  <p>Return the array.</p>
                  <p>&nbsp;</p>
                  <h5>displayValues</h5>
                  <span>Reset the table to blank.</span><br />
                  <span><span className="fw-bold">textArr</span> is an array that will store the table content.</span><br />
                  <span><span className="fw-bold">highlightStyle</span> is a string for a bootstrap class.</span><br />
                  <span>&nbsp;</span>
                  <p>If even is selected,<br />use incremental for loop,<br />grab current number,<br />check if it's even,<br />and highlight the even numbers,<br /><br />but not the odd numbers.</p>
                  <p>&nbsp;</p>
                  <p>Else, highlight the odd numbers.</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <span>&nbsp;</span><br />
                  <span>Show the table by removing <span className="fw-bold">d-none</span> class.</span><br />
                  <p>Add the table contents from <span className="fw-bold">textArr</span> array.</p>
                  <span>&nbsp;</span>
                  <h5>resetTable</h5>
                  <span>Hide the table by adding <span className="fw-bold">d-none</span> class.</span><br />
                  <p>Clear out the table's body content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
