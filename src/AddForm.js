import React, {Component} from 'react';

class AddForm extends Component {
    state = {
        content : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.content);
        this.setState({content : ''});
    }

    handleChange = (e) => {
        //console.log(e.target.value);
        this.setState({ content : e.target.value });

    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Add Todos </label>
                    <input id="todo" onChange={this.handleChange} type="text" value={this.state.content} />
                    <button className="btn waves-effect waves-light" type="submit">Submit Todos</button>
                </form>
            </div>
        );
    }
}


export default AddForm;