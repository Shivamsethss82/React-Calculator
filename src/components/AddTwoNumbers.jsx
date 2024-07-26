import React, { useEffect, useState } from "react";


const AddTwoNumbers = () => {

  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
    
  const handleInput = (e) => {
  
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.length > 0){
      
      const operatorIndex = input.indexOf("+");

      let num1 = parseInt(input.slice(0,operatorIndex))
      let num2 = parseInt(input.slice(operatorIndex + 1))
      setResult(num1 + num2)
    } else {
      setResult("")
    }

    setInput("")

  }


  return (
    <div>
      <input type="text" placeholder="enter your no" onChange={handleInput}/>
      <br/>
      <h1>Result: {result}</h1>
      <button type="submit" onClick={handleSubmit}>Add</button>
    </div>

  )
}


export default AddTwoNumbers;


