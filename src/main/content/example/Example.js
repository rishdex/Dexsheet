import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    layoutRoot: {}
});

class Example extends Component {

    render()
    {
        return (
            <div>
                I am here
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Example);