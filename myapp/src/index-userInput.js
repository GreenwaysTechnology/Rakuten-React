import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


class UserInput extends Component {
    state = {
        text: 'default'
    }
    onUpdate = evt => {
        //read textbox value
      const value= evt.target.value
      this.setState(prevState=>({...prevState,text:value}))
    }

    render() {
        return <div className="container">
            <h1>User Input Application</h1>
            <h1> {this.state.text}</h1>
            <input onChange={this.onUpdate } />
        </div>
    }

}


const App = props => <div>
    <UserInput />
</div>
ReactDOM.render(<App />, document.getElementById('root'))