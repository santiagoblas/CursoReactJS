import React, { Component } from 'react';
import logo from './../logo.svg';

class TasksForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'baja'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTask(this.state);
        console.log(this.state);
    }

    render() {
        return (
        <div className="card">
            <img src={logo} className="App-logo card-img-top" alt="logo" />
            <div className="card-body text-center">
                <h5 className="card-title">Nueva Tarea</h5>
                <form className="form-horizontal mb-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInputChange} className="form-control" placeholder="Título"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" onChange={this.handleInputChange} className="form-control" placeholder="Responsable"/>
                    </div>
                    <div className="form-group">
                        <textarea name="description" onChange={this.handleInputChange} className="form-control" placeholder="Descripción" />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInputChange}>
                            <option value="baja">
                                Baja
                            </option>
                            <option value="media">
                                Media
                            </option>
                            <option value="alta">
                                Alta
                            </option>
                        </select>
                        {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-sm btn-outline-success active">
                                <input type="radio" name="priority" onChange={this.handleInput} value="baja" defaultChecked /> baja
                            </label>
                            <label className="btn btn-sm btn-outline-warning">
                                <input type="radio" name="priority" onChange={this.handleInput} value="media" /> media
                            </label>
                            <label className="btn btn-sm btn-outline-danger">
                                <input type="radio" name="priority" onChange={this.handleInput} value="alta" /> alta
                            </label>
                        </div> */}
                    </div>
                    <button type="submit" href="#" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
        );
    }
}

export default TasksForm;