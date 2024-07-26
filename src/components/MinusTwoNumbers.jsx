import React, { useState } from "react";


const MinusTwoNumbers = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (input.length > 0) {
        let operatorIndex;
        let operator;
  
        if (input.includes("+")) {
          operatorIndex = input.indexOf("+");
          operator = "+";
        } else if (input.includes("-")) {
          operatorIndex = input.indexOf("-");
          operator = "-";
        }
  
        if (operatorIndex !== undefined) {
          const num1 = parseFloat(input.slice(0, operatorIndex));
          const num2 = parseFloat(input.slice(operatorIndex + 1));
  
          if (operator === "+") {
            setResult(num1 + num2);
          } else if (operator === "-") {
            setResult(num1 - num2);
          }
        } else {
            setResult("Invalid Expression");
        }
      } else {
        setResult("");
      }
      setInput("")
      };
  
    return (
      <div>
        <input type="text" placeholder="Enter Your Number " value={input} onChange={handleChange} />
        <p>The result is: {result}</p>
        <button type="submit" onClick={handleSubmit}>
          Equal
        </button>
      </div>
    );
  };
  


export default MinusTwoNumbers;


