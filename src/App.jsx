import React, { useState } from 'react'

const App = () => {

  let[values,setvalue]=useState('')

 let  number=(e)=>{
   let val=e.target.innerText
   setvalue(values+val)
 }

let clear=()=>{
  setvalue('')
}

let equals=()=>{
    let result = eval(values);
      setvalue(result);
}
  return (
    <div className='cal'>
      <div className="box">
          <div className="input" >{values}</div>
          
         <div className="top-row">
        <button className="clear-btn" onClick={clear}>clr</button>
        </div>


          <button onClick={number}>9</button>
          <button onClick={number}>8</button>
          <button onClick={number}>7</button>
          <button onClick={number}>/</button>
          <button onClick={number}>6</button>
          <button onClick={number}>5</button>
          <button onClick={number}>4</button>
          <button onClick={number}>*</button>
          <button onClick={number}>3</button>
          <button onClick={number}>2</button>
          <button onClick={number}>1</button>
          <button onClick={number}>-</button>
          <button onClick={number}>.</button>
          <button onClick={number}>0</button>
          <button onClick={equals}>=</button>
       <button onClick={number}>+</button>
      </div>
      
    </div>
  )
}

export default App