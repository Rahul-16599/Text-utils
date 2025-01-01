import React, {useState}from "react";

export default function TextForm(props) {
    const handleUpCase =  () => {
       // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);     
    }

    const handleClearCase =  () => {
        let newText = "";
        setText(newText);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
      }

      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
           setText(newText.join(" "));
      }

    const handleLowerCase =  () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange =  (event) => {
      //  console.log("On Change");
        setText(event.target.value);  
    }

    const [text, setText] = useState("");
   
  return (
    <>
        <div className="container">
           <h1>{props.heading}</h1> 
            <div className="form-floating">
                <textarea
                    value = {text}
                    onChange={handleOnChange}
                    className="form"
                    id="floatingTextarea"
                ></textarea>

                <div className="Buttons">
                    <button className="uppercase-btn button btn btn-primary" onClick={handleClearCase}>Clear text</button>
                    <button className="uppercase-btn button btn btn-primary" onClick={handleLowerCase}>Convert to Lowercase</button>
                    <button className="uppercase-btn button btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
                    <button className="uppercase-btn button btn btn-primary" onClick={handleCopy}>Copy text</button> 
                    <button className="uppercase-btn button btn btn-primary" onClick={handleExtraSpaces}>Remove extra spaces</button> 
                </div>
                
            </div>
        </div>

        <div className="summarycontainer" >
            <h1>Your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 *text.split(" ").length} Minutes to read</p>
        </div>
    </>
  );
}
