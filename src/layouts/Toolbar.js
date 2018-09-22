import React from 'react';
import './Toolbar.css'
import { ToolbarButton } from '../components/ToolbarButton';

export class Toolbar extends React.Component {

    render() {
        return (
            <div className="toolbar">
                <ToolbarButton name="" icon="fa fa-save" />
                <ToolbarButton name="" icon="fa fa-print" />
                <label className="tool-divider"></label>
                <ToolbarButton name="" icon="fa fa-file-alt" />
                <ToolbarButton name="" icon="fa fa-table" />
                <ToolbarButton name="" icon="fa fa-calendar-alt" />
                <ToolbarButton name="" icon="fa fa-calendar" />
                <label className="tool-divider"></label>
                <ToolbarButton name="" icon="fa fa-arrow-left" />
                <ToolbarButton name="" icon="fa fa-arrow-right" />
                <ToolbarButton name="" icon="fa fa-paint-roller" />
                <label className="tool-divider"></label>
                <ToolbarButton name="" icon="fa fa-indent" />
                <ToolbarButton name="" icon="fa fa-outdent" />
                <label className="tool-divider"></label>
                <ToolbarButton name="10" dropdown={true} />
                <label className="tool-divider"></label>
                <ToolbarButton name="" icon="fa fa-bold" />
                <ToolbarButton name="" icon="fa fa-italic" />
                <ToolbarButton name="" icon="fa fa-strikethrough" />
                <ToolbarButton name="A" dropdown={true} />
                <label className="tool-divider"></label>
                <ToolbarButton name="" icon="fa fa-fill-drip" dropdown={true} />
                <ToolbarButton name="" icon="fa fa-table" dropdown={true} />
                <label className="tool-divider"></label>
                <ToolbarButton name="" icon="fa fa-align-center" dropdown={true} />
                <ToolbarButton name="" icon="fa fa-list-ol" dropdown={true} />
                <label className="tool-divider"></label>
                <ToolbarButton name="S" />
                <label className="tool-divider"></label>
                <ToolbarButton name="" icon="fa fa-filter" />
            </div>
        )
    }
}