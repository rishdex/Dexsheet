import React from 'react';
import './ProjectButton.css'


export class ProjectButton extends React.Component {

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
            <button className={"project-button " + this.state.border + " " + this.props.active + " " + this.props.size}>
                {this.props.icon ?
                    <img src={"/assets/svg/" + this.props.icon} alt="" />
                    : null}
                {this.props.name}
                {this.props.active === 'active' ?
                    <img src={"/assets/svg/arrow_1.svg"} className="dropdown-icon" alt="" />
                    : null}
            </button>
        )
    }
}