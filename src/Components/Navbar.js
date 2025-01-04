import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
   
    <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <div className='img mx-2'> </div>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/TextUtils">TextUtils</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Todoapp">Todoiie</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://rahulingle.freewebhostmost.com/" target="_blank">My Website</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.aboutText}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
            <div className="form-check form-switch mx-3">
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault"> Mode</label>
            </div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>     
       </form>
    </div>
  </div>
</nav>
</>
  )
}

// Navbar.propTypes = {
//     title : PropTypes.string.isRequired,
//     aboutText : PropTypes.string.isRequired,
// }
// Navbar.defaultProps = {
//     title : "Default Prop",
//     aboutText : "Default Text",
// }

