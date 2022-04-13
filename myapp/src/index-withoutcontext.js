import React from 'react';
import ReactDOM from 'react-dom'


const ThemedButton = props => <div>
    <Button theme={props.theme} />
</div>
const Button = props => <div>
    <button style={{ color: 'whitesmoke', backgroundColor: props.theme }}>Hello!</button>
</div>
const Toolbar = props => <div>
    <ThemedButton theme={props.theme} />
</div>
const Page = props => <>
    <Toolbar theme={props.theme} />
</>

const theme = {
    dark: "black"
}
const App = () => <div>
    <Page theme={theme.dark} />
</div>


ReactDOM.render(<App />, document.getElementById('root'))