import React, { Component } from 'react';

class ShowTasks extends Component {
    constructor() {
        super();
    }

    render() {
        const tasks = this.props.appTasks.map((task, i) => {
            return (
            <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                <div className="card mt-4">
                <div className="card-header">
                    <h4 className="float-left">{task.title}</h4>
                    <span className="badge badge-pill badge-danger ml-2 float-right">{task.priority}</span>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote">
                    <p className="mb-0 text-left">{task.description}</p>
                    <footer className="blockquote-footer text-right">{task.responsible}</footer>
                    </blockquote>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger btn-sm" onClick={() => { this.props.onRemoveTask(i) }}>
                    Borrar
                    </button>
                </div>
                </div>
            </div>
            
            );
        });

        return(tasks);
    }
}

export default ShowTasks;