import React from 'react';
import './MemberButton.css'

export class MemberButton extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            buttonClass: null,
        }
    }

    componentDidMount() {
        let code = this.props.code;
        let buttonClass = "menu-button ";
        
        if(code >= "A" && code < "F") {
            buttonClass += "blue";
        } else if(code >= "G" && code < "M") {
            buttonClass += "yellow";
        } else if(code >= "M" && code <= "Z") {
            buttonClass += "green";
        }

        this.setState({ buttonClass: buttonClass });
    }

    render() {
        return (
            <button className={this.state.buttonClass}>
                <label className="menu-label">
                    {this.props.code}
                </label>
            </button>
        )
    }
}