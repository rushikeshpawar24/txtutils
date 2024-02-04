import React from 'react'
import { useState } from 'react';
export default function Textform(props) {
    const handleupClick=()=>{
        console.log("uppercase was clickes");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handledoClick=()=>{
        console.log("Lowercase was clickes");
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handlecopy=()=>{
      console.log("copy button clicked");
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace=()=>{
     let newText=text.split(/[ ]+/);
     setText(newText.join(" "))
    }

   

    const handleclClick=()=>{
        console.log("clear button clicked");
        let newText="";
        setText(newText)
    }
    const handleonChange=(event)=>{
        console.log("on Change"+text);
       setText(event.target.value)


    }

    const[text,setText]=useState('');
    //setText("new text");

  return (
    <>
    <div className='container'>
     <h1>Enter the text to analyze</h1> 
  <div className="mb-3">
   
    <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8" />
   
  </div>
  
  <button type="submit" className="btn btn-primary  me-2" onClick={handleupClick} >To Uppercase</button>
  <button type="submit" className="btn btn-primary me-2" onClick={handledoClick}>To Lowercase</button>
  <button type="submit" className="btn btn-primary me-2" onClick={handleclClick}>clear text</button>
  <button type="submit" className="btn btn-primary me-2" onClick={handlecopy}>Copy Text</button>
  <button type="submit" className="btn btn-primary me-2" onClick={handleExtraSpace}>Remove Extra space</button>
   </div>
   <div className="container my3">
    <h2>Your Text summary</h2>
    <p>{text.split(" ").length-1} words {text.length}characters</p>
    <p>{0.008*text.split("").length} Minutes Read</p>
   <h1>Preview</h1>
   <p>{text}</p>
   </div>
   </>)
}
