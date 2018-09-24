import React from 'react';
import './Header.css'
import { MemberButton } from '../components/MemberButton';

export class Header extends React.Component {
    render() {
        return (
            <header className="header outer">
                <div className="row">
                    <div className="col-md-2">
                        <img src="/assets/img/logo.png" width="25px" />
                    </div>
                    <div className="col-md-10" style={{marginTop: '-2px'}}>
                        <div className="pull-right">
                            <MemberButton code="L" />
                            <MemberButton code="A" />
                            <MemberButton code="M" />
                            <button className="share-button"><i className="fa fa-share-alt"></i> Share</button>
                            <button className="icon-button"><i className="fa fa-bell"></i></button>
                            <button className="user-icon">
                                <img src="/assets/img/carl.jpg" width="20px" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}