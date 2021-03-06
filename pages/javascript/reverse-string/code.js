import CodeLayout from '../../../components/layouts/CodeLayout';
import {reverseStringMetaData as metaData} from '../../../components/js/metaData';

export default function NumberShaderCode() { 
  return (
    <CodeLayout metaData={metaData}>
      <div className="p-4">
        <p><span className="fw-bold">resetButton</span> and <span className="fw-bold">runButton</span> variables for the buttons.</p>
        <p><span className="fw-bold">addEventListener</span> adds click functionality, and the callback functions are later called.</p>
        <p>Variables for the table, will be used in the functions <span className="fw-bold">displayValues</span> and <span className="fw-bold">resetTable</span>.</p>
        <span>&nbsp;</span><br/>

        <h5>runCode</h5>
        <p>Get the text input from DOM.</p>
        <p>Get the reversed string.</p>
        <p>Call <span className="fw-bold">displayText</span> function to display the result.</p>
        <span>&nbsp;</span>
        
        <h5>reverseString</h5>
        <p><span className="fw-bold">result</span> is an empty array.</p>
        <p>Use a decrementing for-loop, starting at the text&apos;s last index, and append into <span className="fw-bold">result</span> array; this will result in the string in reversed order.</p>
        <span>&nbsp;</span>
        <p>Return the joined string of the <span className="fw-bold">result</span> array.</p>
        <span>&nbsp;</span>
        
        <h5>displayText</h5>
        <p>Set <span className="fw-bold">resultText</span> innerHTML to the reversed string.</p>
        <p>Make <span className="fw-bold">resultDisplay</span> visible by removing invisible class.</p>
        <span>&nbsp;</span>
        
        <h5>resetText</h5>
        <p>Clear the <span className="fw-bold">resultText</span>&apos;s innerHTML.</p>
        <p>Make <span className="fw-bold">resultDisplay</span> invisible by adding the invisible class.</p>
      </div>
    </CodeLayout>
  )
}
