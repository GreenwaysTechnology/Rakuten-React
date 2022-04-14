import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const CustomerReview = props => {
    const [review, setReview] = useState(1);
    const [screen, setScreen] = useState('Customer Manager App')
    //get Screen size
    const [width, setWidth] = useState(window.innerWidth);

    //Change the screen title once the dom is ready
    useEffect(() => {
        document.title = screen
        //component willUnMount
        return function () {
            console.log('this is called when component is removed')
        }

    })
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //imperative dom listner
        window.addEventListener('resize', handleResize)
        //clean up code
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    const onIncrement = evt => {
        setReview(review + 1)
        setScreen(`${screen} - Review`)
    }
    return <div>
        <h1>Customer Manager App: using Side effects</h1>
        <h1>Screen Width {width}</h1>
        <h1>Review : {review}</h1>
        <button onClick={onIncrement}>PostiveReview</button>
    </div>
}

const App = () => <CustomerReview />

ReactDOM.render(<App />, document.getElementById('root'))