import React from 'react';
import {withStyles} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { MemberButton } from './components/MemberButton';
import './MainNavbarContent.css'

const styles = theme => ({
    root  : {
        paddingRight: 30
    },
});


function MainNavbar({classes})
{
    return (
        <div className={classes.root}>
            <div className="pull-right">
                <MemberButton character="L" />
                <MemberButton character="A" />
                <MemberButton character="M" />
                <button className="btn btn-primary share-button">
                    <img src="/assets/svg/share.svg" alt="" />Share
                </button>
                <button className="notification-button">
                    <img src="/assets/svg/notification.svg" alt="" />
                </button>
                <button className="user-button">
                    <img src="/assets/img/avatar.jpg" alt="" />
                </button>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({fuse, auth})
{
    return {
        navigation : fuse.navigation,
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavbar)));
