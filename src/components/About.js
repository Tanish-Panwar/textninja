import React from 'react'

export default function About(props) {
    return (
        <div className="container my-3" >
            <div className="container containerAbout" style={{backgroundColor: props.mode === 'light' ? 'dark': 'light', color: props.mode === 'dark' ? 'light': 'dark', border: props.mode === 'dark' ? 'light':'dark'}}>
                <p>
                BE A TEXT NINJA USE TEXT NINJA.
                    Text Ninja is a simple to use text analytics web based application, why "web", because you don't need to install it in you phone,
                    And you don't have to give extra memory for this application.

                    It is a lightweight web application, for analyzing your text, It has all necessary features,
                    <br/>
                    Like:
                    <br/>
                </p>
                <p>1. Text Capitalization after full stops.</p>
                    
                    <p>2. Uppercasing each letter of your phrase.</p>
                    
                    <p>3. Lowercasing each letter of your phrase.</p>
                    
                    <p>4. Removing unwanted spaces from your phrase.</p>
                    
                    <p>5. Copying a huge text file without lagging.</p>
                    
                    <p>6. Letter counter for your phrase.</p>
                    
                    <p>7. Words counter for your phrase.</p>
                    
                    <p>8. A Timer, about how much time a normal reader may take to read your phrase.</p>
                    
                    <p>9. Text Preview for you text.</p>
                    
                    <p>10. With Dark mode, so you can even use it at night.</p>
                    
                    <p>11. 3 Major color themes for both dark mode and light mode.</p>
            </div>
        </div>
    )
}
