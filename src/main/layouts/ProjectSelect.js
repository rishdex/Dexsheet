import React from 'react';
import './ProjectSelect.css'
import { ProjectButton } from '../components/ProjectButton';


export class ProjectSelect extends React.Component {

    render() {
        return (
            <div className="project-select">
                <ProjectButton name="All" border="border-none" />
                <ProjectButton icon="dots.svg" />
                <ProjectButton name="Weekly sales" active="active" size="large" />
                <ProjectButton name="Regular Work" size="large" />
                <ProjectButton icon="Group 3.svg" />
                <ProjectButton icon="menu.svg" />
            </div>
        )
    }
}