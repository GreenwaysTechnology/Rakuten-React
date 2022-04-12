import React from 'react';
import ReactDOM from 'react-dom'

const Header = props => <div>
    <h1>{props.title}</h1>
    {props.children}
</div>

const MenuBar = props => <ul>
    {props.items.map(menu => <li>
        <a href={`${menu}`}>{menu}</a>
    </li>)}
</ul>

const Page = props => <div>
    {props.children}
</div>


const Wrapper = props => <div>
    {props.children}
</div>

const App = () => {
    return <Wrapper>
        <Page>
            <Header title="Rakuten">
                <MenuBar items={["home", "services", "contactus"]} />
                <hr/>
            </Header>
        </Page>
    </Wrapper>
}
ReactDOM.render(<App />, document.getElementById('root'))