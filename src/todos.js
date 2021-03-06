import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item onhover" key={todo.id} onClick={() => deleteTodo(todo.id)}>
                    <span>{todo.content}</span>
                </div>
            );
        })
    ) : (
        <p className="center">No Toodos Left</p>
    );

    return (
        <div className="todos collection">
            {todosList}
        </div>
    );
}

export default Todos;