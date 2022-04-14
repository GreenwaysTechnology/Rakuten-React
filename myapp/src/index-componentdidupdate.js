import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class ParentComponent extends Component {
    state = {
        i: 0
    }
    //mount phase methods
    constructor() {
        super()
        console.log('Parent Constructor is called')
    }


    render() {
        console.log('Parent render is called')
        return <div>
            <h1>Parent Component</h1>
            <h1>{this.state.i} </h1>
            <button onClick={() => {
                this.setState((oldstate) => ({ ...oldstate, i: oldstate.i + 1 }))
            }}>+</button>
            <ChildComponent {...this.state} />
        </div>
    }

    //after mount
    componentDidMount() {
        console.log('Parent ComponentDidMount is called')
    }
    componentDidUpdate(){
        console.log('Parent componentDidUpdate is called')
    }


}

class ChildComponent extends React.PureComponent {

    //mount phase methods
    constructor() {
        super()
        console.log('ChildComponent Constructor is called')
    }
    render() {
        console.log('ChildComponent render is called', this.props)

        return <div>
            <h1>Child Component</h1>
        </div>
    }

    // shouldComponentUpdate(){
    //     return false;
    // }

    componentDidMount() {
        console.log('ChildComponent ComponentDidMount is called')
    }
    componentDidUpdate(){
        console.log('Child componentDidUpdate is called')
    }



}

ReactDOM.render(<ParentComponent />, document.getElementById('root'))

