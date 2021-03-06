import React, {useState, useContext} from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {Context} from '../store/projectContext';
import Search from './search';

const Navbar = props => {
    const {store, actions} = useContext(Context)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-purple">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">React-Best-Practices</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/apis">API's</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hooks">Hooks</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {

}

export default Navbar
