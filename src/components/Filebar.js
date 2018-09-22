import React from 'react';
import './Filebar.css'

export class Filebar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                File
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Export to json</a>
                                <a className="dropdown-item" href="#">Export to excel</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Export to pdf</a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lorem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lorem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lorem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lorem</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}