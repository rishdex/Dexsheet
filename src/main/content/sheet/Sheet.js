import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import ProjectButton from '../../components/ProjectButton';
import { BACKEND, Common } from '../../Common';

const styles = theme => ({
    content: {
        width: '100%'
    },
    contentToolbar: {
        padding: '0 10px',
        background: 'white',
        borderBottom: '1px solid #E6EAED'
    }
});

class Sheet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            project_id: null,
        }
    }

    componentDidMount() {
        let id = Common.lastParameter(window.location.href);
        this.setState({
            project_id: id
        })

        this.getProjects();
    }

    getProjects() {
        fetch(BACKEND + '/projects?id=1', {
            method: 'GET',
        })
            .then(results => results.json())
            .then(data => {
                this.setState({
                    projects: data
                })
            })
            .catch(function (error) { Common.handleError(error) });
    }

    render()
    {
        const {classes} = this.props;
        const projects = []
        for(let i in this.state.projects) {
            let item = this.state.projects[i];
            if (item.id.toString() === this.state.project_id.toString()) {
                item.active = "active";
            }
            projects.push(
                <ProjectButton key={item.id} name={item.name} border="borderRight" size="sizeNormal" active={item.active}
                    dataId={item.id} />
            )
        }

        return (
            <div className={classes.content}>
                <div>
                    <div className={classes.contentToolbar}>
                        <ProjectButton name="All" border="borderNormal" size="sizeSmall" active="" dataId={0} />
                        <ProjectButton icon="fa fa-th-large" border="borderRight" size="sizeSmall" active="" dataId={0} />
                        {projects}
                        <ProjectButton icon="fa fa-plus" border="borderRight" size="sizeSmall" active="" dataId={0} />
                        <ProjectButton icon="fa fa-bars" border="borderRight" size="sizeSmall" active="" dataId={0} />
                    </div>
                </div>
                <div className="p-24">
                    <h4>Content</h4>
                    <br />
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Sheet);