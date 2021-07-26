import CodeLayout from '../../../components/layouts/CodeLayout';
import {palindromeCheckerMetaData as metaData} from '../../../components/js/metaData';

export default function PalindromeCheckerCode() { 
  return (
    <CodeLayout metaData={metaData}>
      <div className="p-4">
        <p><span className="fw-bold">resetButton</span> and <span className="fw-bold">runButton</span> variables for the buttons.</p>
        <p><span className="fw-bold">addEventListener</span> adds click functionality, and the callback functions are later called.</p>
        <p>Variables for the result from the DOM.</p>
        <span>&nbsp;</span><br/>
        <span>&nbsp;</span><br/>

        <h5>runCode</h5>
        <p>Get <span className="fw-bold">text</span> input value from the DOM.</p>
        <p>Check if it&apos;s a palindrome.</p>
        <p>Display the result.</p>
        <p>&nbsp;</p>

        <h5>checkPalindrome</h5>
        <p><span className="fw-bold">startIndex</span> and <span className="fw-bold">endIndex</span> are the indices of the beginning and end of the text.</p>
        <span>Run a while loop when the indices don&apos;t touch.</span><br/>
        <span>If the first index character is not a valid character, skip it.</span><br/>
        <span>Else if the ending index character is not a valid character, skip it.</span>
        <p>If they&apos;re a match, continue by incrementing and decrementing the indices.</p>
        <span>&nbsp;</span>
        <p>Else, the characters aren&apos;t a match and the string is not a palindome.</p>
        <p>Outside the while loop means <span className="fw-bold">startIndex</span> &ge; <span className="fw-bold">endIndex</span>, therefore it&apos;s a palindome.</p>
        <span>&nbsp;</span>

        <h5>checkValidChar</h5>
        <p>Uses regular expression to validate if the character is a letter or a number.</p>
        
        <p>&nbsp;</p>
        <h5>displayText</h5>
        <span>Reset the text.</span><br/>
        <span>Display text depending if it&apos;s a palindome.</span><br/>
        <span>Adjust the background color.</span><br/>
        <span>Make it visible by removing the Bootstrap invisible class.</span><br/>
        <p>&nbsp;</p>
        <h5>resetTable</h5>
        <p>Clear out the innerHTML, and make the div invisible and clear out the background color for the next use.</p>
      </div>
    </CodeLayout>
  )
}
