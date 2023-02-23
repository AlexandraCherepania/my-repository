import React, { Component } from "react";


class TodoEditor extends Component {
    state = {
        massage: '' 
    }
    

    handleChange = e => {
        this.setState({ massage: e.currentTarget.value });   
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state)
        this.props.onSubmit(this.state.massage)

        // this.setState({massage: ''})

        this.reset()
    }

     reset = () => {
        this.setState({  massage: ''})
    };
    
    render() {
        return (
            <form className="TodoEditor"  onSubmit={this.handleSubmit}>
                <textarea className="TodoEditor__textarea"
                    value={this.state.massage}
                    onChange={this.handleChange}>
                </textarea>

                <button type="submit" className="TodoEditor__button">
                 Сохранить
                </button>

            </form>


        );
    }
}
export default TodoEditor;