import React from 'react';
import './ToolBar.css'
import { ToolButton } from '../components/ToolButton';


export class ToolBar extends React.Component {

    render() {
        return (
            <div className="tool-bar">
                <ToolButton icon="save.svg" />
                <ToolButton icon="print.svg" />
                <label className="tool-seperator"></label>
                <ToolButton icon="sheet.svg" />
                <ToolButton icon="planner.svg" />
                <ToolButton icon="calendar.svg" />
                <ToolButton icon="gantt.svg" />
                <label className="tool-seperator"></label>
                <ToolButton icon="backward.svg" />
                <ToolButton icon="forward.svg" />
                <ToolButton icon="paint.svg" />
                <label className="tool-seperator"></label>
                <ToolButton icon="Left indent.svg" />
                <ToolButton icon="Right indent.svg" />
                <label className="tool-seperator right-0"></label>
                <ToolButton name="10" dropdown={true} />
                <label className="tool-seperator left-0"></label>
                <ToolButton icon="bold.svg" />
                <ToolButton icon="italic.svg" />
                <ToolButton icon="strikethrough.svg" />
                <ToolButton icon="text color.svg" dropdown={true} size="small" />
                <label className="tool-seperator"></label>
                <ToolButton icon="text fill.svg" dropdown={true} />
                <ToolButton icon="table.svg" dropdown={true} />
                <label className="tool-seperator"></label>
                <ToolButton icon="alignment.svg" dropdown={true} />
                <ToolButton icon="Text Warp.svg" dropdown={true} />
                <label className="tool-seperator right-0"></label>
                <ToolButton icon="sigma.svg" />
                <label className="tool-seperator left-0 right-0"></label>
                <ToolButton icon="filter.svg" />
                <label className="tool-seperator left-0 right-0"></label>
            </div>
        )
    }
}