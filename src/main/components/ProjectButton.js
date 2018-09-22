import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Common } from '../Common';

const styles = theme => ({
    projectButton: {
        padding: '10px 20px',
        color: '#515151',
        marginBottom: '-1px',
        '&:hover': {
            backgroundColor: 'rgba(239, 239, 239, 0.87)',
            cursor: 'pointer'
        }
    },
    borderRight: {
        borderRight: '1px solid #E6EAED !important'
    },
    borderNormal: {},
    sizeNormal: {},
    sizeSmall: {
        padding: '10px 14px'
    },
    active: {
        backgroundColor: '#398AFF',
        color: 'white'
    }
});

class ProjectButton extends Component {
    
    select() {
        Common.changeLastParameter(this.props.dataId);
    }

    render() {
        const { classes } = this.props;
        return (
            <button className={classes.projectButton + " " + classes[this.props.border] + 
                " " + classes[this.props.size] + " " + classes[this.props.active]}
                onClick={() => this.select()}>
                {this.props.icon ?
                    <i className={this.props.icon}></i>
                : null}
                {this.props.name}
            </button>
        )
    }
}
export default withStyles(styles, { withTheme: true })(ProjectButton);