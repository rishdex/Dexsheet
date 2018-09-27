import React from 'react';
import './ToolButton.css'


export class ToolButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            size: null,
            dropdown: null,
            border: null,
        }
    }

    componentDidMount() {
        this.setState({size: this.props.size});
        if(this.props.dropdown) {
            this.setState({dropdown: "dropdown"})
        }
    }

    render() {
        return (
            <button className={"tool-button " + this.state.size + " " + this.state.dropdown}>
                {this.props.icon ?
                    <img src={"/assets/svg/" + this.props.icon} className="tool-icon" alt="" />
                    : null}
                {this.props.name}
                {this.props.dropdown ?
                    <img src={"/assets/svg/arrow_2.svg"} className="tool-carcet" alt="" />
                    : null}
            </button>
        )
    }
}