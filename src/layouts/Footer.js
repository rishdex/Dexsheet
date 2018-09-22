import React from 'react';
import './Footer.css'
import { FooterButton } from '../components/FooterButton';

export class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <FooterButton name="" icon="fa fa-plus" />
                <FooterButton name="" icon="fa fa-bars" border={true} />
                <FooterButton name="Sheet1" border={true} expand={true} dropdown={true} />
                <FooterButton name="Sheet2" border={true} expand={true} dropdown={true} active={true} />
                <FooterButton name="Sheet3" border={true} expand={true} dropdown={true} />
            </footer>
        )
    }
}