import React from 'react';
import ReactDOM from 'react-dom'
import { TODOS } from './mock-data/todos';

const NumberList = props => <div>
    {
        props.scores.map(score => {
            return <li key={score}>{score}</li>
        })
    }
</div>
// const TodoList = props => <div>
//     {
//         props.todos.map(todo => {
//             return <div key={todo.id}>
//                 <p>id {todo.id}</p>
//                 <p>title {todo.title}</p>
//                 <p>Status {todo.completed ? "done" : "not Completed"}</p>
//             </div>
//         })
//     }
// </div>

const TodoList = props => <div>
    {
        props.todos.map(todo => {
            return <TodoItem todo={todo} />
        })
    }
</div>
const TodoItem = ({ todo }) => <div key={todo.id}>
    <p>id {todo.id}</p>
    <p>title {todo.title}</p>
    <p>Status {todo.completed ? "done" : "not Completed"}</p>
</div>


const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const App = props => <div>
    <NumberList scores={scores} />
    <TodoList todos={TODOS} />
</div>

ReactDOM.render(<App />, document.getElementById('root'))