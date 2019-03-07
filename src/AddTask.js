import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        task:''
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            task:e.target.value
        })
    }
    handleSubmit = (maybe) => {
        maybe.preventDefault()
        this.props.addTheTask(this.state.task)
        this.setState({
            task:''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add Task</label>
                <input name="task" value={this.state.task} type="text" onChange={(e)=>this.handleChange(e)}></input>
                <button type="submit">Submit</button>
            </form>
        )

    }
}

export default AddTask