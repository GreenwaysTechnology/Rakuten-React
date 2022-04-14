import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2 style={{ backgroundColor: 'yellow' }}>Loading...</h2>
    </>
}

class Todo extends Component {

    state = {
        error: null,
        isLoaded: false, //spiner status
        todos: [] // data
    }

    render() {
        const { error, isLoaded, todos } = this.state;
        if (error) {
            return <Error error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
            return <TodoList todos={todos} />
        }

    }
    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url).then(response => response.json()).then(todos => {
            // console.log(todos)
            setTimeout(() => {
                this.setState(previousState => {
                    return { ...previousState, todos: previousState.todos.concat(todos), isLoaded: true };
                });
            }, 5000)

        }).catch(err => {
            // console.log(err)
            this.setState({
                isLoaded: true,
                err
            });
        });
    }
}

const TodoList = props => {
    const { todos } = props
    return <ul className="list-group">
        {todos.map((todo, index) => (
            <li key={index}>
                <span className="badge badge-pill badge-primary">
                    {todo.id}
                </span>
                <span>
                    {todo.title}
                </span>
            </li>
        ))}
    </ul>
}

const App = () => <div className="container">
    <Todo />
</div>

ReactDOM.render(<App />, document.getElementById('root'))