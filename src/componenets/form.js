
import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
    state = {
        name: '',
        tag: '',
        ex: 'junior',
        licence: false,
    };

    nameInputId = shortid.generate();
     tagInputId = shortid.generate();

    handlChange = event => {
        const { name, value } = event.currentTarget;
        
        this.setState({ [name]: value });
    };
    
    
    handlesSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // Проп від Форми з Апп з методом formSubmitHandler для збору даних
        this.props.onSubmitEl(this.state)
        this.reset();
    };

    handleLicenceChecked = (e) => {
        console.log(e.currentTarget.checked)

        this.setState({ licence: e.currentTarget.checked });
    }

    reset = () => {
        this.setState({ name: '', tag: '' })
    };
     
    
   

        render() {
            return (
              
                <form onSubmit={this.handlesSubmit}>
                    <label htmlFor={this.nameInputId}>
                        Имя
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handlChange}
                            id={this.nameInputId}
                        />
                    </label>
                    <br />
                    <label htmlFor={this.tagInputId}>
                        Прізвище
                        <input
                            type="text"
                            name="tag"
                            value={this.state.tag}
                            onChange={this.handlChange}
                            id={this.tagInputId}
                        />
                    </label>

                    <p>Ваш рівень:</p>
                    <label>
                        <input type='radio'
                            name='ex'
                            value='junior'
                            onChange={this.handlChange}
                            checked={this.state.ex === 'junior'}
                        />Junior
                    </label>
                    <label>
                        <input type='radio'
                            name='ex'
                            value='middle'
                            onChange={this.handlChange}
                            checked={this.state.ex === 'middle'}
                        />Middle
                    </label>
                    <label>
                        <input type='radio'
                            name='ex'
                            value='senior'
                            onChange={this.handlChange}
                            checked={this.state.ex === 'senior'}
                        />Senior
                    </label>
                    <br />

                    <label>
                        <input type='checkbox' name = 'licence' checked={this.state.licence} onChange={this.handleLicenceChecked} /> Згідний з ліцензійними умовами
                    </label>
                    <br />
                    <button type="submit" disabled={!this.state.licence}>Отправить</button>

                    
 
                
                </form>    
            );
        }
    }


export default Form;