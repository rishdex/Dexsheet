import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {connect} from 'react-redux';
import * as quickPanelActions from 'main/quickPanel/store/actions';
import {bindActionCreators} from 'redux';
import { ProjectBar } from './layouts/ProjectBar';
import './MainToolbar.css'
import { FileBar } from './layouts/FileBar';
import { ToolBar } from './layouts/ToolBar';

const styles = theme => ({
});

class MainToolbar extends Component {

    render()
    {
        return (
            <div className="toolbar">
                <ProjectBar />
                <FileBar />
                <ToolBar />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleQuickPanel: quickPanelActions.toggleQuickPanel
    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(null, mapDispatchToProps)(MainToolbar));
