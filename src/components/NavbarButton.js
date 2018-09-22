import React from 'react';
import './NavbarButton.css'

export class NavbarButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonClass: null
        }
    }

    componentDidMount() {
        let buttonClass = "navbar-button";
        if(this.props.border) {
            buttonClass += " border-right";
        }
        if(this.props.expand) {
            buttonClass += " expand";
        }

        this.setState({buttonClass: buttonClass})
    }

    render() {
        return (
            <button className={this.state.buttonClass}>
                {this.props.icon ? 
                    <i className={this.props.icon}></i>
                : null}
                {this.props.name}
            </button>
        )
    }
}