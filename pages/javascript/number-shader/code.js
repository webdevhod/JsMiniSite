import CodeLayout from '../../../components/layouts/CodeLayout';
import {numberShaderLinks} from '../../../components/js/links';

export default function NumberShaderCode() { 
  let metaData = {
    title: "Number Shader Code",
    description: "This Javascript application will print out numbers between a range, and will highlight the even or odd numbers.",
    links: numberShaderLinks,
    jsFile: '/js/numberShader.js'
  }
  
  return (
    <CodeLayout metaData={metaData}>
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
    </CodeLayout>
  )
}
