
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

//data binding : string,numbers,boolean,object , array

const firstName = 'Subramaian';
const score = 100;
const isvalid = true;
const address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
//array
const skills = ['React', 'MicroServices', 'Java', 'Quarkus', 'Vertx'];

const Profile = () => <div>
    <h2>Name :  {firstName}</h2>
    <h2>Score :  {score}</h2>
    <h2>Status :  {isvalid ? "Valid" : "NotValid"}</h2>
    <h2>Address :  {address.city} , {address.state}</h2>
    <h2>Skills</h2>
    <ul>
        {
            skills.map(skill => {
                return <li> {skill}</li>
            })
        }
    </ul>

</div>
const App = () => <div>
    <Profile />
</div>

ReactDOM.render(<App />, document.getElementById('root'))