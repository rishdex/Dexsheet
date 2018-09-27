import React from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import './MainFooter.css'
import { SheetBar } from './layouts/SheetBar';

const styles = theme => ({
    root: {}
});

function MainFooter({classes})
{
    return (
        <div className="footer">
            <SheetBar />
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(MainFooter);