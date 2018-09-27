import React from 'react';
import './SheetBar.css'
import { SheetButton } from '../components/SheetButton';


export class SheetBar extends React.Component {

    render() {
        return (
            <div className="sheet-bar">
                <SheetButton icon="Group 3.svg" border="border-none" />
                <SheetButton icon="menu.svg" />
                <SheetButton name="Sheet1" sheet={true} size="large" />
                <SheetButton name="Sheet2" sheet={true} />
                <SheetButton name="Sheet3" sheet={true} />
            </div>
        )
    }
}