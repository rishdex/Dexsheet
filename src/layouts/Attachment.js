import React from 'react';
import './Attachment.css'

export class Attachment extends React.Component {

    render() {
        return (
            <div className="attachment-container">
                <div className="attachment-header">
                    <button className="close-button">X</button>
                    <label>Attachments <i className="fa fa-upload"></i></label>
                </div>
                <div className="attachment-body">
                    <table>
                        <tbody>
                            <tr>
                                <td><i className="fa fa-angle-left"></i></td>
                                <td>
                                    <img src="/assets/img/logo.png" />
                                </td>
                                <td><i className="fa fa-angle-right"></i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <i className="fa fa-trash"></i>
                                    <i className="fa fa-cloud"></i>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    asdfasdf
                </div>
            </div>
        )
    }
}