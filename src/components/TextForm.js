// Now we are going to move ahead to make our app now we are going to learn about state and events handling.

// Now we will use {useState} : when a prop is defined or a componenet, Those components have a state of their own.
// Like when we enter text in textarea that is a state when it is empty that is a state etc.

// We need to import use state from react for using hook.
// We will basically render those changed states using hook.
import React, {useState} from 'react'

export default function TextForm(props) {

    // Lets create a button click function.
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length > 0){
            props.showAlert("Converted to Uppercase", "success");
        }else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length > 0){
            props.showAlert("Converted to Lowercase", "success");
        }else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    const handleClearClick = ()=> {
        setText("");
        if(text.length > 0){
            props.showAlert("Cleared text", "success");
        }else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // Remove extra spaces from text
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text.length > 0){
            props.showAlert("Removed all extra spaces", "success");
        }else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // For adding text in text area
    const handleOnChange = (event)=> {
        // console.log('onChange');
        setText(event.target.value);

    }


    // Capitalization of first letter after fullStop.
    const handleCapitalize = ()=> {
        var ar = [];
        var caps = false;
        ar = text.split(".");
        for(var i=0; i<ar.length; i++){
            var temp = ar[0];
            ar[i] = ar[i].charAt(1).toUpperCase() + ar[i].slice(2);
            ar[0] = temp.charAt(0).toUpperCase() + temp.slice(1);
            caps = true;
        }
        if(caps === true){
            setText(ar.join(". "));
        }else {
            setText(text);
        }

        if(text.length > 0){
            props.showAlert("Capitalized the text from full stops.", "success");
        }else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // Here we added a hook that reflect changes when the state changes,
    // This is array destructuring, Text will get the first parameter of useState and setText will get the second parameter.
    const [text, setText] = useState("");
    // When ever we want to change the state of text we need to use setText.

    // text = "new Text" // THis is a wrong way to change the state,
    // setText("new Text";) // This is the correct way to change the state

    const handleCopyClick = ()=> {
        let tex = document.getElementById("myBox");
        navigator.clipboard.writeText(tex.value);
        // tex.select();
        // document.getSelection().removeAllRanges();
        if(text.length > 0){
            props.showAlert("Copied to clipboard", "success");
        }else {
            props.showAlert("Enter some text first ", "warning");
        }
        
    }

    return (
        <>
        <div className="container my-3">
            <h2>{props.heading}</h2>
            <textarea placeholder="YOUR TEXT GOES HERE-" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#16181b70': '#ffffff75', color: props.mode === 'dark' ? 'white': 'black'}} name="Your Text" id="myBox" className="form-control my-3 glass" cols="50" rows="5"/>
            {/* <div className="containerSR">
                <textarea placeholder="Search text" style={{backgroundColor: props.mode === 'dark' ? '#16181b': 'white', color: props.mode === 'dark' ? 'white': 'black'}} className="form-control my-2 mx-2 search-replace" rows="1" cols="2" />
                <button className="buttonBtn btn btn-outline-danger my-2">SEARCH</button>
                <textarea placeholder="Replace text" style={{backgroundColor: props.mode === 'dark' ? '#16181b': 'white', color: props.mode === 'dark' ? 'white': 'black'}} className="form-control my-2 mx-2 search-replace" rows="1" cols="2" />
                <button className="buttonBtn btn btn-outline-danger my-2">REPLACE</button>
            </div> */}
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleUpClick}>UPPERCASE</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleExtraSpaces}>REMOVE SPACES</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleCopyClick}>COPY TEXT</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleCapitalize}>CAPITALIZE</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleLowClick}>LOWERCASE</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleClearClick}>CLEAR TEXT</button>
            {/* <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleCapitalize}>SEARCH TEXT</button>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-2 my-2`} id="corrector" onClick={handleCapitalize}>REPLACE TEXT</button> */}
        </div>

        <hr/>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p><u>Your phrase has {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</u></p>
            {/* <p><u>Letters: {text.length}</u></p> */}
            {/* <p><u>Words: {text===""? 0 : text.split(" ").length}</u></p> */}
            <p><u>{"A normal reader may read this phrase in " +0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length+" minutes"}</u></p>

            <hr/>

        <h2>Text preview</h2>
        <p id="box">{text.length>0 ? text : 'Enter your text to preview'}</p>

        </div>


        {/* Now we are going to make a new componenet About.js and we will unedrstand more about state. */}

        {/* Now we will going to refactor app component and Improve our dark mode. */}

        
        
        </>
    )
}
