import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {connect} from 'react-redux';
import * as quickPanelActions from 'main/quickPanel/store/actions';
import {bindActionCreators} from 'redux';
import { ProjectSelect } from './layouts/ProjectSelect';
import './MainToolbar.css'
import { FileBar } from './layouts/FileBar';

const styles = theme => ({
});

class MainToolbar extends Component {

    render()
    {
        return (
            <div className="toolbar">
                <ProjectSelect />
                <FileBar />
                <FileBar />
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
