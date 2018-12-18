import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation.js';

import { tasks } from './tasks.json';
import TasksForm from './components/TasksForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks
    }
  }
  
  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <div className="col-lg-3 col-md-6 col-sm-12">
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
          </div>
        </div>
        
      );
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark text-white">
          <a class="navbar-brand text-white" href="#">
            Tareas
            <span className="badge badge-pill badge-light ml-2">{this.state.tasks.length}</span>
          </a>            
        </nav>
        <h1 className="display-4 mt-2">Título con Bootstrap</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5 col-sm-12">
              <TasksForm></TasksForm>
            </div>
            <div className="col-lg-9 col-md-7 col-sm-12">
              <div className="row">
                {tasks}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
