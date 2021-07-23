import CodeLayout from '../../../components/layouts/CodeLayout';
import {fizzBuzzMetaData as metaData} from '../../../components/js/metaData';

export default function FizzBuzz() {
  return (
    <CodeLayout metaData={metaData}>
      <div className="p-4">
        <span><h5 className="d-inline-block">fizzBuzz</h5> will be called externally.</span>
        <p><span className="fw-bold">resetButton</span> and <span className="fw-bold">runButton</span> variables for the buttons.</p>
        <p><span className="fw-bold">addEventListener</span> adds click functionality, and the callback functions are later called.</p>
        <p>Variables for the table, will be used in the functions <span className="fw-bold">displayValues</span> and <span className="fw-bold">resetTable</span>.</p>
        <span>&nbsp;</span>
        <h5>runCode</h5>
        <p>Get <span className="fw-bold">fizz</span> and <span className="fw-bold">buzz</span> input value from the DOM.</p>
        <p>&nbsp;</p>
        <p>Parse the <span className="fw-bold">fizz</span> and <span className="fw-bold">buzz</span> values into integers.</p>
        <span>&nbsp;</span>
        <p>Check if both <span className="fw-bold">fizz</span> and <span className="fw-bold">buzz</span> values are valid numbers.</p>
        <p>If so, call <span className="fw-bold">generateTable</span> function will return a generated string of the innerHTML content.</p>
        <p><span className="fw-bold">displayTable</span> will display the new content.</p>
        <p>&nbsp;</p>
        <h5>generateTable</h5>
        <p><span className="fw-bold">arr</span> is an empty array that will store the text.</p>
        <p>Varibles to store Bootstrap text color classes.</p>
        <p><span className="fw-bold">textTuple</span> is a tuple that will temporarily store Fizz Buzz text and the respective color.</p>
        <p>For loop from 1 to 100:</p>
        <p>Store if the number i is a valid fizz and/or buzz.</p>
        <span>&nbsp;</span><br/>
        <span>Check if the number i is a multiple of fizz.</span><br/>
        <span>Also check if the number i is a multiple of both fizz and buzz.</span><br/>
        <span>If it is, store the text and the color class.</span>
        <p>&nbsp;</p>
        <p>Else it's just a fizz.</p>
        <p>&nbsp;</p>
        <p>Or check if it's a buzz.</p>
        <span>&nbsp;</span>
        <p>Else, it's none of those, it's just a number and gets a generic color.</p>
        <span>&nbsp;</span>
        <p>Check if the number i is the first column. If it is, start a new row, and insert the column content.</p>
        <p>Check if i is the last column. If it is, insert the column content and close the row.</p>
        <p>Otherwise just insert it as a column. Note that each column contains an optional Bootstrap text color class.</p>
        <span>&nbsp;</span>
        <p>Return the joined string.</p>
        <span>&nbsp;</span>
        <h5>displayTable</h5>
        <span>Reset the table, and make it visible by removing the Bootstrap d-none class.</span><br/>
        <p>Set the <span className="fw-bold">table</span>'s innerHTML to the generated string.</p>
        <span>&nbsp;</span>
        <h5>resetTable</h5>
        <p>Make the <span className="fw-bold">results</span> invisible by adding the Bootstrap d-none class, and clear the <span className="fw-bold">table</span>'s innerHTML.</p>
      </div>
    </CodeLayout>
  )
}
