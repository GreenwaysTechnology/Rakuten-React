import React from 'react';
import ReactDOM from 'react-dom'

const DashBoard = props => <div>
    <h1>DashBoard</h1>
</div>
const SignUp = props => <div>
    <h1>Please SignUp!</h1>
</div>

// const Login = props => {
//     const { username, password } = props.user;
//     if (username === 'admin' && password === 'admin') {
//         return <DashBoard />
//     }
//     return <SignUp />

// }

// const Login = props => {
//     const { username, password } = props.user;
//     const status = (username === 'admin') && (password === 'admin');
//     return status ? <DashBoard /> : <SignUp />
// }

// const Login = props => {
//     const { username, password } = props.user;
//     return (username === 'admin') && (password === 'admin') ? <DashBoard /> : <SignUp />
// }
const Login = ({ user: { username, password } }) => (username === 'admin') && (password === 'admin') ? <DashBoard /> : <SignUp />


const App = () => <div>
    <Login user={{ username: 'admin', password: 'admin' }} />
    <Login user={{ username: 'foo', password: 'bar' }} />

</div>

ReactDOM.render(<App />, document.getElementById('root'))