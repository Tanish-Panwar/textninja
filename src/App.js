// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// We can also use outer javascript variables in jsx.
// Example :
// let name = "Iron";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=> {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(()=> {
      setalert(null);
    }, 1500);
  }

  // if()


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#16181b';
      document.body.style.color = '#f3f3f3';
      // showAlert("Dark mode has been enabled", "success");
    }else {
      setMode('light');
      document.body.style.backgroundColor = '#f3f3f3';
      document.body.style.color = '#16181b';
      // showAlert("Light mode has been enabled", "success");

    }
  }

  const changeThemeR = () => {
    if(mode === 'light'){
      document.body.style.backgroundColor = '#ffaeae';
      document.body.style.color = "#000";
    }else {
      document.body.style.backgroundColor = '#230000';
      document.body.style.color = "#fff";
    }
  }

  const changeThemeG = () => {
    if(mode === 'light'){
      document.body.style.backgroundColor = '#8affa7';
      document.body.style.color = "#000";
    }else {
      document.body.style.backgroundColor = '#00290a';
      document.body.style.color = "#fff";
    }
  }

  const changeThemeB = () => {
    if(mode === 'light'){
      document.body.style.backgroundColor = '#94dbff';
      document.body.style.color = "#000";
    }else {
      document.body.style.backgroundColor = '#001f2e';
      document.body.style.color = "#fff";
    }
  }

  return (
    // This below written html is jsx it is 90% html but some keywords have been replaced.

    // We can only return a single element in it if we try to add another elemnet before the div this will give us an error.
    // <h1></h1>
    // But we can use an empty tag so that we can use more the one elemnts but the return elemnt must be one.
    // <>
    // {/* See now we can add another tags */}
    // {/* We can also remove the whole jsx we will going to do our whole work with jsx for making a beautiful webpage. */}

    // </>


// /* <> */

// {/* We have removed our navbar code from here and maded a navbar component NavBar.  */}

// {/* Now we are going to learn about Props.(PROPERTIES):  We make custom components */}
// {/* Example: If we want to go onto a new page and don;t want to reload the page we can send a custom component for our recent page objects. */}


//     {/* We are going to make components in our components folder */}
//     {/* Now we can import our NavBar component from our components folder*/}
//     {/* This helps us to make our code look more clean and good we can make custom components for navbar , footer,  sidebar, etc.  */}
//     {/* We have just imported a navbar component */}

//     {/* <NavBar/> */}

//     {/* But what if we want to use the same custom components in many react apps , with diffrent titles we can use props. */}
//     {/* Now we can add a title which we can change it in every app. */}

//     {/* <NavBar title="TEXT CORRECTOR"/> */}
    
//     {/* We can use those props anywhere in our component file. */}

//     {/* We can now also change the about using aboutText  */}

//     {/* <NavBar title="TEXT CORRECTOR" aboutText="About Us"/> */}
//     {/* we have now setted our default proptypes for aboutText and title so now if we don't set the string for them we will get the default variables*/}

//     {/* See we are getting an error in console for the title. */}
//     {/* <NavBar title="TEXT NINJA" mode={mode} toggleMode={toggleMode}    changeThemeR={changeThemeR}    changeThemeG={changeThemeG}    changeThemeB={changeThemeB}/>
//     <Alert alert={alert}/> */}
    

//     {/* Now we are going to move our react app ahead and now we are going to learn and understand about State and handling events.  */}
//     {/* And we are going to make a new component that is TEXT FORM */}
//     {/* Lets add our text field */}
//     {/* <div className="container my-3">
//       <TextForm showAlert={showAlert} heading="Enter your text for analyzing." mode={mode}   />
//       <About/>
//     </div> */}


//     {/* Now we will make a new component which is alert. */}

//     {/* Now we are going to use Router in react: Router is used to prevent a page from loading , */}
//     {/* A Normal website loads everytime when we traverse to another page. */}
//     {/* But If we use a router and then we load a page the whole page won't load only the particular contents of a page will load. */}

<>
<Router basename='/textninja'>
    <NavBar title="TEXT NINJA" mode={mode} toggleMode={toggleMode}    changeThemeR={changeThemeR}    changeThemeG={changeThemeG}    changeThemeB={changeThemeB}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text for analyzing." mode={mode}   />} />
    </Routes>
    </div>
</Router>
</>

// {/* <Route exact path='/' element={<PrivateRoute/>}>
// <Route exact path='/' element={<Home/>}/>
// </Route>
// <Route exact path='/register' element={<Register/>}/>
// <Route exact path='/login' element={<Login/>}/> */}



// </>

  );
}


export default App;


