//classl 
import React from 'react';
import ReactDOM from 'react-dom';

//create component using  es 6 class

class Heading extends React.Component {

    render() {
        return <h1>Hello React!!!</h1>
    }
}



ReactDOM.render(<Heading></Heading>, document.getElementById('root'))