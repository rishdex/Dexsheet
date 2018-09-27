import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import './Example.css'

const styles = theme => ({
    layoutRoot: {}
});

class Example extends Component {


    render()
    {
        const tasks = [
            {
                attachment: false,
                number: 1,
                task_name: "Creating chart",
                owned_by: "Ganesh",
                status: "in progress",
                completion: 45,
                from: "6/5/18",
                to: "6/5/18",
                comments: "",
            },
            {
                attachment: true,
                number: 2,
                task_name: "Creating chart",
                owned_by: "Ganesh",
                status: "completed",
                completion: 65,
                from: "4/5/18",
                to: "4/5/18",
                comments: "Complete task",
            },
            {
                attachment: false,
                number: 3,
                task_name: "Creating chart",
                owned_by: "Ganesh",
                status: "not started",
                completion: 0,
                from: "6/5/18",
                to: "6/5/18",
                comments: "Complete task",
            },
            {
                attachment: true,
                number: 4,
                task_name: "Creating chart",
                owned_by: "Ganesh",
                status: "pending...",
                completion: null,
                from: "4/5/18",
                to: "4/5/18",
                comments: "Complete task",
            },
            {
                attachment: true,
                number: 5,
                task_name: "Creating chart",
                owned_by: "Ganesh",
                status: "",
                completion: null,
                from: "6/5/18",
                to: "6/5/18",
                comments: "Complete task",
            },
            {
                attachment: false,
                number: 6,
                task_name: "Creating chart",
                owned_by: "Ganesh",
                status: "",
                completion: null,
                from: "6/5/18",
                to: "6/5/18",
                comments: "",
            },
            {
                attachment: false,
                number: 7,
                task_name: "Creating chart",
                owned_by: "Ganesh",
                status: "",
                completion: null,
                from: "6/5/18",
                to: "6/5/18",
                comments: "",
            }
        ]

        let count = tasks.length;

        for (let i = 0; i < 100; i++) {
            tasks.push({
                attachment: false,
                number: i + count,
                task_name: "",
                owned_by: "",
                status: "",
                completion: null,
                from: "",
                to: "",
                comments: "",
            })
        }

        const task_rows = []

        for(let i in tasks) {
            let task = tasks[i];
            task_rows.push(
                <tr key={i}>
                    <td>
                        {task.attachment ? 
                            <img src="/assets/svg/attachment.svg" alt="" width="20px" height="18px" />
                            : null}
                    </td>
                    <td align='center'>{task.number}</td>
                    <td>{task.task_name}</td>
                    <td>{task.owned_by}</td>
                    <td>{task.status}</td>
                    <td>
                        {task.completion != null ?
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: task.completion + "%"}} aria-valuenow={task.completion} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            : null}
                    </td>
                    <td>{task.from}</td>
                    <td>{task.to}</td>
                    <td>{task.comments}</td>
                    <td></td>
                    <td></td>
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
            <div>
                <table className="task-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Owned by</th>
                            <th>Status</th>
                            <th>% Completed</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Comments</th>
                            <th width="150px">H</th>
                            <th width="150px">I</th>
                            <th width="150px">J</th>
                            <th width="150px">K</th>
                            <th width="150px">L</th>
                            <th width="150px">M</th>
                            <th width="150px">N</th>
                            <th width="150px">O</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task_rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Example);