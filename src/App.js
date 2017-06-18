import React, { Component } from 'react';

import TaskList from './TaskList';
import Date from './Date';
import Avatar from './Avatar';
import AddButton from './AddButton';
import AddTaskText from './AddTaskText';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { tasks: [], tasksLoading: true };
    this.updateFromServer();

  }

  updateFromServer = () => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then(tasks => {
        this.setState({
          tasks: tasks,
          tasksLoading: false,
          inputVisible: false
        })
      });
  }

  addTask = (taskInput) => {

    const task = { 'time': '5', 'period': 'AM', 'activityTitle': taskInput.title, 'activityDescription': taskInput.description };

    this.setState({ tasksLoading: true })

    fetch('/api/tasks', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(task)
    })
      .then(this.updateFromServer)


  }

  showInput = () => {
    this.setState({
      inputVisible: true
    })
  }

  render() {
    return (
      <div style={{ padding: '30px 30px' }}>
        <Avatar />
        <br />
        <Date />
        <br />
        <TaskList tasks={this.state.tasks} loading={this.state.tasksLoading} reloadAction={this.updateFromServer} />
        <br />
        {
          this.state.inputVisible
            ? <AddTaskText onSubmit={this.addTask}></AddTaskText>
            : <AddButton onClick={this.showInput} />}

      </div>

    );
  }
}



export default App;
