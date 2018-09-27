import React from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import './MainFooter.css'

const styles = theme => ({
    root: {}
});

function MainFooter({classes})
{
    return (
        <div className="footer">
            Footer
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(MainFooter);