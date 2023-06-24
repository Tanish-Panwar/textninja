// This is a react function based component.(rfc)
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// Now we have just added a props which we used to change the title of our navBar component.
export default function NavBar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
            {/* Here we used our props with title. */}
          <Link className="navbar-brand" to="/"><u>{props.title}</u></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                  {/* We can also change the about with our props */}
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-info" type="submit">Search</button>
            </form> */}
            <div className="ColorPickerContainer">
                <label>Color Theme</label>
                <button onClick={props.changeThemeR} className="colorPicker" id="Red">R</button>
                <button onClick={props.changeThemeG} className="colorPicker" id="Green">G</button>
                <button onClick={props.changeThemeB} className="colorPicker" id="Blue">B</button>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'? "Enable dark mode": "Disable dark mode"}</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

export var navColor = document.getElementById('navColor');
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
