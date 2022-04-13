// import React, { Fragment} from 'react';
import React from 'react';

import ReactDOM from 'react-dom'

// const Greeter = () => <React.Fragment>
//     <h1>Hello</h1>
//     <p>How are you?</p>
// </React.Fragment>

// const Greeter = () => <Fragment>
//     <h1>Hello</h1>
//     <p>How are you?</p>
// </Fragment>

const Greeter = () => <>
    <h1>Hello</h1>
    <p>How are you?</p>
</>
//Table  - Grid

const Grid = props => {
    return <table border="1">
        <thead >
            <Columns />
        </thead>
        <GridBody users={props.datasource} />
    </table>
}
// //withoutFragement
// const Columns = props => {
//     return <div>
//         <td>Name</td>
//         <td>Location</td>
//     </div>
// }

//withFragement
const Columns = props => {
    return <>
        <td>Name</td>
        <td>Location</td>
        <td>Email</td>

    </>
}
const GridBody = props => {
    return <>
        <tbody>
            {
                props.users.map(user => {
                    return <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </tbody>
    </>
}

const USERS = [
    { id: 1, name: 'subramaian', email: 'subu@gmail.com' },
    { id: 2, name: 'Dodge', email: 'dodge@gmail.com' }
]
const App = props => <div>
    <Greeter />
    <Grid datasource={USERS} />
</div>

ReactDOM.render(<App />, document.getElementById('root'))