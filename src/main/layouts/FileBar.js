import React from 'react';
import './FileBar.css'
import { FileButton } from '../components/FileButton';


export class FileBar extends React.Component {

    render() {
        return (
            <div className="file-bar">
                <FileButton name="File" />
                <FileButton name="Home" active={true} />
                <FileButton name="Lorem" />
                <FileButton name="Lorem" />
                <FileButton name="Lorem" />
                <FileButton name="Lorem" />
            </div>
        )
    }
}