import React from 'react';
import './header.css'

//style object
const headerStyle = {
    color:'red'
}

const Header = () => <div className="App-header background">
    <h1 style={headerStyle}>Rakuten Group </h1>
</div>

export { Header };