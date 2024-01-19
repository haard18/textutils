import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log("CLicked");
        if (text === text.toUpperCase()) {
            props.showAlert("Already Uppercase","warning");
        }
        else {
            setText(text.toUpperCase());
            props.showAlert("Converted to uppercase","success");
        }
        // setText(str.toUpperCase());
    }
    const handleLowClick = () => {
        // console.log("CLicked");
        if (text === text.toLowerCase()) {
            
            props.showAlert("Already Lowercase","warning");
        }
        else {
            setText(text.toLowerCase());
            props.showAlert("Converted to Lowercase","success");
        }
        // setText(str.toUpperCase());
    }
    const handleReverseClick = () => {
        const rev = text.split("").reverse();
        const newtext = rev.join("");
        setText(newtext)
        props.showAlert("Text Reversed","success");
            // console.log(newtext)
        }
        const handloeOnChange = (e) => {
            // console.log("onchange");
            setText(e.target.value);
        }
        const handleCopy=()=>{
            var copy=document.getElementById("exampleFormControlTextarea1");
            copy.select();
            console.log(copy.value)
            navigator.clipboard.writeText(copy.value);
            props.showAlert("Copied to clipboard","success");
        }
        return (
            <>
                <div className="container">
                    <h1 className={`text-${props.Mode==='light'?'dark':'light'}`}>{props.heading}</h1>


                    <div className="mb-3">
                        
                        
                        <textarea className="form-control" value={text} onChange={handloeOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                        

                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                        <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
                        <button className="btn btn-primary" onClick={handleReverseClick}>Reverse Text</button>
                        <button className="btn btn-primary mx-3" onClick={handleCopy}>copy Text</button>

                    </div>
                </div>
                <div className={`container my-2 text-${props.Mode==='light'?'dark':'light'}`}>
                    <h1>Your text Summary</h1>
                    <p>Words are {text.split(" ").length - 1} and characters are {text.length}</p>
                    <p>Time taken to read the word is {(text.split(" ").length - 1) * 0.008} Minutes</p>

                <h3>Preview</h3>
                <p>{text.length>0?text:"The text you write will be previewed here"}</p>
                </div>
            </>
        );
    
        }