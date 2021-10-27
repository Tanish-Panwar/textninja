// import logo from './logo.svg';
import './App.css';

// We can also use outer javascript variables in jsx.
// Example :
let name = "Iron";


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
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><u>TEXT WORK</u></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>


</>

  );
}

export default App;
