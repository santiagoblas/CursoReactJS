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
    }

    handleInput() {
        console.log('writing...');
    }

    render() {
        return (
        <div className="card">
            <img src={logo} className="App-logo card-img-top" alt="logo" />
            <div class="card-body text-center">
                <h5 class="card-title">Nueva Tarea</h5>
                <form className="form-horizontal mb-3">
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Título"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsable"/>
                    </div>
                    <div className="form-group">
                        <textarea name="description" className="form-control" placeholder="Descripción" />
                    </div>
                    <div>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-sm btn-success active">
                                <input type="radio" name="priority" value="baja" autocomplete="off" checked /> baja
                            </label>
                            <label class="btn btn-sm btn-warning">
                                <input type="radio" name="priority" value="media" autocomplete="off" /> media
                            </label>
                            <label class="btn btn-sm btn-danger">
                                <input type="radio" name="priority" value="alta" autocomplete="off" /> alta
                            </label>
                        </div>
                    </div>
                </form>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        );
    }
}

export default TasksForm;