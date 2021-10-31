// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

// We can also use outer javascript variables in jsx.
// Example :
// let name = "Iron";


function App() {
  return (
    // This below written html is jsx it is 90% html but some keywords have been replaced.

    // We can only return a single element in it if we try to add another elemnet before the div this will give us an error.
    // <h1></h1>
    // But we can use an empty tag so that we can use more the one elemnts but the return elemnt must be one.
    // <>
    // {/* See now we can add another tags */}
    // {/* We can also remove the whole jsx we will going to do our whole work with jsx for making a beautiful webpage. */}

    // </>


<>

{/* We have removed our navbar code from here and maded a navbar component NavBar.  */}

{/* Now we are going to learn about Props.(PROPERTIES):  We make custom components */}
{/* Example: If we want to go onto a new page and don;t want to reload the page we can send a custom component for our recent page objects. */}


    {/* We are going to make components in our components folder */}
    {/* Now we can import our NavBar component from our components folder*/}
    {/* This helps us to make our code look more clean and good we can make custom components for navbar , footer,  sidebar, etc.  */}
    {/* We have just imported a navbar component */}

    {/* <NavBar/> */}

    {/* But what if we want to use the same custom components in many react apps , with diffrent titles we can use props. */}
    {/* Now we can add a title which we can change it in every app. */}

    {/* <NavBar title="TEXT CORRECTOR"/> */}
    
    {/* We can use those props anywhere in our component file. */}

    {/* We can now also change the about using aboutText  */}

    {/* <NavBar title="TEXT CORRECTOR" aboutText="About Us"/> */}
    {/* we have now setted our default proptypes for aboutText and title so now if we don't set the string for them we will get the default variables*/}

    {/* See we are getting an error in console for the title. */}
    <NavBar title="TEXT CORRECTOR" aboutText="About Us"/>
    

    {/* Now we are going to move our react app ahead and now we are going to learn and understand about State and handling events.  */}
    {/* And we are going to make a new component that is TEXT FORM */}
    {/* Lets add our text field */}
    <div className="container">
      <TextForm heading="Enter your text for analyzing."/>
    </div>


    


</>

  );
}


export default App;


