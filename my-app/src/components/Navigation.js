import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
        <nav className="navbar navbar-dark bg-dark text-white">
            {this.props.titulo}
            <a href="" className="text-white">Tareas</a>
        </nav>
        );
    }
}

export default Navigation;