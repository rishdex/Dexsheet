import React from 'react';
import './MemberButton.css'


export class MemberButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: null
        }
    }

    componentDidMount() {
        let color = "";
        let char = this.props.character;
        if(char < 'G') {
            color = "blue";
        } else if(char < 'M') {
            color = "orange";
        } else {
            color = "green";
        }

        this.setState({color: color});
    }

    render() {
        return (
            <button className={"member-button " + this.state.color}>
                <label>{this.props.character}</label>
            </button>
        )
    }
}