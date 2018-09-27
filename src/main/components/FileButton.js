import React from 'react';
import './FileButton.css'


export class FileButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: null
        }
    }

    componentDidMount() {
        if(this.props.active) {
            this.setState({active: "active"});
        }
    }

    render() {
        return (
            <button className={"file-button " + this.state.active}>
                {this.props.name}
            </button>
        )
    }
}