import React from 'react';
import './SheetButton.css'


export class SheetButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            border: null,
        }
    }

    componentDidMount() {
        let border = this.props.border;
        this.setState({border: border});
    }

    render() {
        return (
            <button className={"sheet-button " + this.state.border + " " + this.props.active + " " + this.props.size}>
                {this.props.icon ?
                    <img src={"/assets/svg/" + this.props.icon} alt="" />
                    : null}
                {this.props.name}
                {this.props.sheet ?
                    <img src={"/assets/svg/arrow_4.svg"} className="dropdown-icon" alt="" />
                    : null}
            </button>
        )
    }
}