import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
            </ul>
            <div className='theme' style={{display: props.mode==="dark"?"flex":"none"}}>
              <div className='bg-primary rounded mx-2' style={{height:"20px",width:"20px",cursor:"pointer"}} onClick={props.changeTheme}></div>
              <div className='bg-warning rounded mx-2' style={{height:"20px",width:"20px",cursor:"pointer"}} onClick={props.changeTheme}></div>
              <div className='bg-success rounded mx-2' style={{height:"20px",width:"20px",cursor:"pointer"}} onClick={props.changeTheme}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}