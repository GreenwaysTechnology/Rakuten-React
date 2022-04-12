import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'


//class Component and Props
class Greeter extends React.Component {
  
    //override
    render(){
        console.log(this.props)
        return <div>
            <h1>{this.props.message} {this.props.name}</h1>
        </div>
    }

}

const App = () => <div>
     <Greeter name="Subramaian" message="Hai" />
</div>

ReactDOM.render(<App />, document.getElementById('root'))
