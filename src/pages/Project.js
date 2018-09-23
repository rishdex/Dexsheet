import React from 'react';
import './Project.css'
import $ from 'jquery';

export class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    resize() {
        window.setTimeout(function() {
            let outer = 0;
            $('.outer').each(function (i, item) {
                outer += $(item).outerHeight();
            })
            let total = $(window).height();
            let height = total - outer - 1;
            $('.content-wrapper').height(height);
        }, 1)
    }

    componentDidMount() {
        
        let data = [
            {
                attachment: false,
                task_name: 'Creating chart',
                owned_by: 'Ganesh',
                status: 'in progress',
                percent: 45,
                from: '6/5/8',
                to: '6/5/8',
                comment: '',
            }, {
                attachment: true,
                task_name: 'Creating chart',
                owned_by: 'Ganesh',
                status: 'completed',
                percent: 65,
                from: '4/5/8',
                to: '4/5/8',
                comment: 'Complete task',
            }, {
                attachment: false,
                task_name: 'Creating chart',
                owned_by: 'Ganesh',
                status: 'not started',
                percent: 0,
                from: '6/5/8',
                to: '6/5/8',
                comment: 'Complete task',
            }, {
                attachment: true,
                task_name: 'Creating chart',
                owned_by: 'Ganesh',
                status: 'pending...',
                percent: null,
                from: '6/5/8',
                to: '6/5/8',
                comment: 'Complete task',
            }, {
                attachment: true,
                task_name: 'Creating chart',
                owned_by: 'Ganesh',
                status: '',
                percent: null,
                from: '6/5/8',
                to: '6/5/8',
                comment: 'Complete task',
            },
        ]

        for(let i=0; i<20; i++) {
            data.push({});
        }
        this.setState({data: data});
    }

    componentDidUpdate() {
        let self = this;
        $(window).on('resize', function () {
            self.resize();
        })

        self.resize();
    }


    render() {
        const tasks = []
        for(let i in this.state.data) {
            let row = this.state.data[i];
            row.percent_text = row.percent != null ? row.percent + '%' : '';
            tasks.push(
                <tr key={'row-' + i}>
                    {row.attachment ?
                        <td align="center"><i className="fa fa-paperclip"></i></td>
                    :
                        <td align="center" className="disabled"><i className="fa fa-paperclip"></i></td>
                    }
                    <td align="center">{parseInt(i) + 1}</td>
                    <td>{row.task_name}</td>
                    <td>{row.owned_by}</td>
                    <td>{row.status}</td>
                    <td>
                        {row.percent != null ?
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={row.percent} aria-valuemin="0" aria-valuemax="100"
                                    style={{width: row.percent + '%'}}>
                                    {row.percent_text}
                                </div>
                            </div>
                        : null}
                    </td>
                    <td>{row.from}</td>
                    <td>{row.to}</td>
                    <td>{row.comment}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }

        return (
            <div className="table-container">
                <table className="table table-bordered task-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Task Name</th>
                            <th>Owned by</th>
                            <th>Status</th>
                            <th>% Completed</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Comments</th>
                            <th width="150px">B</th>
                            <th width="150px">C</th>
                            <th width="150px">D</th>
                            <th width="150px">E</th>
                            <th width="150px">F</th>
                            <th width="150px">G</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks}
                    </tbody>
                </table>
            </div>
        )
    }
}