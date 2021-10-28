// This is a react function based component.(rfc)
import React from 'react'
import PropTypes from 'prop-types'

// Now we have just added a props which we used to change the title of our navBar component.
export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            {/* Here we used our props with title. */}
          <a className="navbar-brand" href="/"><u>{props.title}</u></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                  {/* We can also change the about with our props */}
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}


// This is a object proptype that takes string with the name of title and aboutText

// This is also used for double checking that we need to use that datatype in that case.
// NavBar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string   
// }


// We can also set a default proptype for our any props .
// It is a good practice to add a default props 
NavBar.defaultProps = {
    title: "TITLE",
    aboutText: "About"
}


// We can also set a isRequired to our props so that we will get an error when we don't add it .
// IT is also a good practice to use isRequired 
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string   
}
