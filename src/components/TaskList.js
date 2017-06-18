import React, { Component } from 'react';
import Task from './Task';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class TaskList extends Component {

    render() {

        let tasks = (
            <div>
                <Button bsStyle="info" bsSize="large" onClick={this.props.reloadAction}>
                    <FontAwesome name="refresh"></FontAwesome>
                </Button>
                {
                    this.props.tasks.map((task, index) => <Task
                        key={index}
                        time={task.time}
                        period={task.period}
                        activityTitle={task.activityTitle}
                        activityDescription={task.activityDescription} />)
                }
            </div>
        );

        let loading = (
            <div>
                <FontAwesome name="spinner" size="2x" spin={true}></FontAwesome>
            </div>
        )

        return this.props.loading ? loading : tasks;
    }
}

export default TaskList;