import React from 'react'

export const Profile = props => {
    return <div className="container">
        <h1>Profile details</h1>
        <h2>Id : {props.id}</h2>
        <h2>Name {props.name.toUpperCase()}</h2>
        <h2>Status {props.status ? "Avaiable" : "Not Available"}</h2>
    </div>
}
//default Props
Profile.defaultProps = {
    id:0,
    name:'default',
    status:false
}
