import React, { createContext } from 'react';
import ReactDOM from 'react-dom'


//create Context object 
// const themeContext = React.createContext('theme')
// const themeContext = createContext('theme')
const { Provider, Consumer } = createContext('theme')


const ThemedButton = props => <div>
    <Button />
</div>
const Button = props => <div>
    {/* Consumer */}
    <Consumer>
        {theme => {
            //return jsx 
            return <button style={{ color: 'whitesmoke', backgroundColor: theme.dark }}>Hello!</button>
        }
        }
    </Consumer>

</div>
const Toolbar = props => <div>
    <ThemedButton />
</div>
const Page = props => <>
    <Toolbar />
</>

const theme = {
    dark: "green"
}
const App = () => <div>
    <Provider value={theme}>
        <Page />
    </Provider>
</div>


ReactDOM.render(<App />, document.getElementById('root'))