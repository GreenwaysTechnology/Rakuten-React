import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

export const Name = props => <div>
    <h3>Name {props.firstName} {props.middleName} {props.lastname}</h3>
</div>
export const Address = props => <div>
    <h3>Address {props.city} {props.state} {props.country}</h3>
</div>

//Profile: 
export const Profile = props => <div>
    <h1>Id  : {props.id}</h1>
    <Name firstName={props.firstName} middleName={props.middleName} lastname={props.lastname} />
    <Address city={props.city} state={props.state} country={props.country}/>
</div>


const App = () => <div>
    <Profile id={1} firstName="Subramanian" middleName="" lastname="Murugan" city="Coimbatore" />
</div>

ReactDOM.render(<App />, document.getElementById('root'))
