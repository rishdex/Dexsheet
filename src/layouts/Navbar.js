import React from 'react';
import './Navbar.css'
import { NavbarButton } from '../components/NavbarButton';

export class Navbar extends React.Component {
    render() {
        return (
            <div className="dex-navbar">
                <NavbarButton name="All" />
                <NavbarButton name="" icon="fa fa-th-large" border={true} />
                <NavbarButton name="Weekly Sales" border={true} expand={true} active={true} />
                <NavbarButton name="Regular Work" border={true} expand={true} />
                <NavbarButton name="" icon="fa fa-plus" border={true} />
                <NavbarButton name="" icon="fa fa-bars" border={true} />
            </div>
        )
    }
}