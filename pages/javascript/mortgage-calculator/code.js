import CodeLayout from '../../../components/layouts/CodeLayout';
import {mortgageCalculatorMetaData as metaData} from '../../../components/js/metaData';

export default function MortgageCalculatorCode() {
  return (
    <CodeLayout metaData={metaData}>
      <div className="p-4">
        <p>Variables for the table, will be used in the functions <span className="fw-bold">displayTable</span> and <span className="fw-bold">resetTable</span>.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <span>&nbsp;</span>
        <p><span className="fw-bold">resetButton</span> and <span className="fw-bold">runButton</span> variables for the buttons.</p>
        <p><span className="fw-bold">addEventListener</span> adds click functionality, and the callback functions are later called.</p>
        <span>&nbsp;</span>
        

        <h5>runCode</h5>
        <p>Grab the input values from the DOM.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Parse the values into Numbers.</p>
        <span>&nbsp;</span><br/>
        <span>&nbsp;</span><br/>
        <span>&nbsp;</span><br/>
        <span>Check if all the Numbers are valid.</span><br/>
        <span>If so, call <span className="fw-bold">generateMortgageData</span> to return object.</span><br/>
        <span><span className="fw-bold">displayData</span> will display the content.</span>
        {/* <p>&nbsp;</p> */}
        <span>&nbsp;</span><br/>
        <span>&nbsp;</span><br/>
        <span>&nbsp;</span><br/>
        <span>&nbsp;</span><br/>

        <h5>generateMortgageData</h5>
        <p><span className="fw-bold">chart</span> is an empty array that will store the text.</p>
        <p>Variables to calculate the mortgage.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><span className="fw-bold">numerator</span> and <span className="fw-bold">denominator</span> need to be calculated first.</p>
        <p><span className="fw-bold">payment</span> is calculated. (Doing it in one line doesn&apos;t work in Javascript.)</p>
        <span>For loop up to the total month count:</span><br/>
        <span>Calculate the monthly <span className="fw-bold">interest</span>.</span><br/>
        <span>Add up the <span className="fw-bold">totalInterest</span> up to this point.</span><br/>
        <span>The <span className="fw-bold">principal</span> payment goes towards the balance.</span><br/>
        <p></p>
        <span>&nbsp;</span><br/>
        <p>This might be true at the last index, so change the <span className="fw-bold">principal</span>. It&apos;s only true for tiny amounts, but we still want to avoid a negative value.</p>
        <p>Calculate the remaining <span className="fw-bold">balance</span>.</p>
        <p>Push data into <span className="fw-bold">chart</span> array.</p>
        <span>&nbsp;</span><br/>
        <p>Return object with the calculated data.</p>
        <p>&nbsp;</p>

        <h5>numberWithCommas</h5>
        <p>Returns the number in currency comma format.</p>
        <span>&nbsp;</span><br/>
        <span>&nbsp;</span><br/>
        
        <h5>getMortgageString</h5>
        <p>Returns each table row in column format.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Format the money with commas and two decimal places.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <span>Return the <span className="fw-bold">text</span> array as a joined string.</span><br/>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        
        <h5>displayData</h5>
        <span>Reset the table, and make it visible by removing the Bootstrap d-none class.</span><br/><br/>
        <p>Set the elements&apos; innerHTMLs to the generated strings.</p>
        <span>&nbsp;</span>
        <p>&nbsp;</p>

        <h5>resetTable</h5>
        <p>Make the <span className="fw-bold">results</span> invisible by adding the Bootstrap d-none class, and clear the elements&apos; innerHTMLs.</p>
      </div>
    </CodeLayout>
  )
}
