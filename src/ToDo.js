import React, { Component } from 'react';
import Task from "./Task"
import AddTask from "./AddTask"
import styled, { css } from 'styled-components'




class ToDo extends Component {


    state = { 
        tasks: ["Task1", "Task2"] 
    }

    updateToDoList = (indexN) => {
        var newTaskList = [...this.state.tasks]
        newTaskList.splice(indexN, 1)
        this.setState({
            tasks: newTaskList
        })
    }

    addTheTask = (someTask) => {
        let newTaskList = [...this.state.tasks]
        newTaskList.push(someTask)
        this.setState({
            tasks:newTaskList
        })
    }

    showTasks = () => {
        return this.state.tasks.map((aTask, index) => { 
            return <Task index={index.toString()} deleteTask={this.updateToDoList} taskName={aTask} />
        })
    }


    render() {
        return (
            <div>
                <AddTask addTheTask={this.addTheTask}/>
                {this.showTasks()}
            </div>
        )
    }
}

export default ToDo;
