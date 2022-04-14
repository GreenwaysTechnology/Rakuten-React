import React, { useState } from 'react';
import { useWindowTitle } from './hooks/useScreentitle';
import { useWindowInnerWidth } from './hooks/usewindowwidth';
import ReactDOM from 'react-dom';


const CustomerReview = props => {
    const [review, setReview] = useState(1);
    const { screen, setScreen } = useWindowTitle('Customer Manager App')
    const width = useWindowInnerWidth()

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
