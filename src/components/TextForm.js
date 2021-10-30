// Now we are going to move ahead to make our app now we are going to learn about state and events handling.

// Now we will use {useState} : when a prop is defined or a componenet, Those components have a state of their own.
// Like when we enter text in textarea that is a state when it is empty that is a state etc.

// We need to import use state from react for using hook.
// We will basically render those changed states using hook.
import React, {useState} from 'react'

export default function TextForm(props) {

    // Lets create a button click function.
    const handleUpClick = ()=> {
        // console.log("Clicked");
        let newText = text.toUpperCase().replace("  ", " " ).trim().normalize();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        // console.log('onChange');
        setText(event.target.value);

    }


    // Here we added a hook that reflect changes when the state changes,
    // This is array destructuring, Text will get the first parameter of useState and setText will get the second parameter.
    const [text, setText] = useState("");
    // When ever we want to change the state of text we need to use setText.

    // text = "new Text" // THis is a wrong way to change the state,
    // setText("new Text";) // This is the correct way to change the state

    return (
        <>
        <div className="container my-3">
            <h2>{props.heading}</h2>
            <textarea placeholder="YOUR TEXT GOES HERE-" value={text} onChange={handleOnChange} name="Your Text" id="myBox" className="glass" cols="50" rows="10"/>
            <button className="btn btn-outline-primary" id="corrector" onClick={handleUpClick}>UPPERCASE</button>
        </div>

        <hr/>
        <div className="container glass my-3">
            <h2>Your Text Summary</h2>
            <p>{"Your phrase has "+text.length+" letters and "+ text.split(" ").length+" words"}</p>
            <p>{"A normal reader may read this phrase in " +0.008 * text.split(" ").length+" minutes"}</p>

            <h2>Text preview</h2>
            <p><b>{text}</b></p>
        </div>
        
        </>
    )
}
