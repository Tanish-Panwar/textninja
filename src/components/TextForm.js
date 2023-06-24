// Now we are going to move ahead to make our app now we are going to learn about state and events handling.

// Now we will use {useState} : when a prop is defined or a componenet, Those components have a state of their own.
// Like when we enter text in textarea that is a state when it is empty that is a state etc.

// We need to import use state from react for using hook.
// We will basically render those changed states using hook.
import React, { useState } from 'react'

export default function TextForm(props) {

    // Lets create a button click function.
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert("Converted to Uppercase", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert("Converted to Lowercase", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    const handleClearClick = () => {
        setText("");
        if (text.length > 0) {
            props.showAlert("Cleared text", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // Remove extra spaces from text
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if (text.length > 0) {
            props.showAlert("Removed all extra spaces", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // Replace particular word.
    const handleReplaceWord = () => {
        // setText(text.replace(toRep, toRepWith));
        setText(text.replaceAll(toRep, toRepWith));
        if (text.length > 0) {
            props.showAlert("Removed all extra spaces", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // Remove Extra Lines.
    const handleExtraNewLines = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        if (text.length > 0) {
            props.showAlert("Removed all extra spaces", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // For adding text in text area
    const handleOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value);

    }


    // Capitalization of first letter after fullStop.
    const handleCapitalize = () => {
        var ar = [];
        var caps = false;
        ar = text.split(".");
        for (var i = 0; i < ar.length; i++) {
            var temp = ar[0];
            ar[i] = ar[i].charAt(1).toUpperCase() + ar[i].slice(2);
            ar[0] = temp.charAt(0).toUpperCase() + temp.slice(1);
            caps = true;
        }
        if (caps === true) {
            setText(ar.join(". "));
        } else {
            setText(text);
        }

        if (text.length > 0) {
            props.showAlert("Capitalized the text from full stops.", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }
    }

    // Here we added a hook that reflect changes when the state changes,
    // This is array destructuring, Text will get the first parameter of useState and setText will get the second parameter.
    const [text, setText] = useState("");
    const [toRep, setToRep] = useState("");
    const [toRepWith, setToRepWith] = useState("");
    // When ever we want to change the state of text we need to use setText.

    // text = "new Text" // THis is a wrong way to change the state,
    // setText("new Text";) // This is the correct way to change the state

    const handleCopyClick = () => {
        let tex = document.getElementById("myBox");
        navigator.clipboard.writeText(tex.value);
        if (text.length > 0) {
            props.showAlert("Copied to clipboard", "success");
        } else {
            props.showAlert("Enter some text first ", "warning");
        }

    }

    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <textarea placeholder="YOUR TEXT GOES HERE-" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#16181b70' : '#ffffff75', color: props.mode === 'dark' ? 'white' : 'black' }} name="Your Text" id="myBox" className="form-control my-3 glass" cols="50" rows="5" />

                <div className="ModalSection">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input value={toRep} onChange={(e) => setToRep(e.target.value)} type="email" className="form-control" placeholder='Enter words to replace' />
                                    <input value={toRepWith} onChange={(e) => setToRepWith(e.target.value)} type="email" className="form-control" placeholder='Enter word to replace with' />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={handleReplaceWord}>REPLACE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleUpClick}>UPPERCASE</button>
                <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleExtraSpaces}>REMOVE SPACES</button>
                <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleExtraNewLines}>REMOVE ENTERS</button>
                <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleCopyClick}>COPY TEXT</button>
                <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleCapitalize}>CAPITALIZE</button>
                <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleLowClick}>LOWERCASE</button>
                <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleClearClick}>CLEAR TEXT</button>
                {/* <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} id="corrector" onClick={handleClearClick}>REPLACE TEXT</button> */}
                <button type="button" className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} data-bs-toggle="modal" data-bs-target="#exampleModal">REPLACE TEXT</button>
            </div>

            <hr />
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p><u>Your phrase has {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</u></p>
                {/* <p><u>Letters: {text.length}</u></p> */}
                {/* <p><u>Words: {text===""? 0 : text.split(" ").length}</u></p> */}
                <p><u>{"A normal reader may read this phrase in " + 0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length + " minutes"}</u></p>

                <hr />

                <h2>Text preview</h2>
                <p id="box">{text.length > 0 ? text : 'Enter your text to preview'}</p>

            </div>


            {/* Now we are going to make a new componenet About.js and we will unedrstand more about state. */}

            {/* Now we will going to refactor app component and Improve our dark mode. */}



        </>
    )
}
