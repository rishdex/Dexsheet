import React from 'react';
import './ToolbarButton.css'

export class ToolbarButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonClass: null
        }
    }

    componentDidMount() {
        let buttonClass = "toolbar-button";

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
                    <i className="fa fa-chevron-down small" style={{marginLeft: '5px'}}></i>
                    : null}
            </button>
        )
    }
}