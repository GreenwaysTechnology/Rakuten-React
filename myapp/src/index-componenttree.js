//Component Composition
import React from 'react';
import ReactDOM from 'react-dom'

//Layout

const Header = () => <div>
    <h1>Rakuten Group </h1>
</div>

const Footer = () => <div>
    <h1>@Copy right </h1>
</div>

const Main = () => <div>
    <p>
        Rakuten Group, Inc. Rakuten Group Kabushiki-gaisha) is a Japanese electronic commerce and online retailing company based in Tokyo, founded by Hiroshi Mikitani in 1997
    </p>
</div>

const Page = () => <div>
    <Header />
    <Main />
    <Footer />
</div>

const App = () => <Page />

ReactDOM.render(<App />, document.getElementById('root'))