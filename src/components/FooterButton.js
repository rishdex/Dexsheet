import React from 'react';
import './FooterButton.css'

export class FooterButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonClass: null
        }
    }

    componentDidMount() {
        let buttonClass = "footer-button";
        if (this.props.border) {
            buttonClass += " border-right";
        }
        if (this.props.expand) {
            buttonClass += " expand";
        }
        if (this.props.active) {
            buttonClass += " active";
        }

        this.setState({ buttonClass: buttonClass })
    }

    render() {
        return (
            <button className={this.state.buttonClass}>
                {this.props.icon ?
                    <i className={this.props.icon}></i>
                    : null}
                {this.props.name}
                {this.props.dropdown ?
                    <i className="fa fa-chevron-down" style={{marginLeft: '15px'}}></i>
                    : null}
            </button>
        )
    }
}