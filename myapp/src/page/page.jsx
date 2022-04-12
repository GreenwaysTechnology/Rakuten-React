//without barrel export
// import { Header } from '../headers/header';
// import { MenuBar } from '../headers/menubar';
//using barrel export 
import { Header, MenuBar } from '../headers';
import { Footer } from '../footer/footer'
import { Body } from '../main/body'

const Page = () => <div className="container">
    <Header />
    <MenuBar />
    <Body />
    <Footer />
</div>
export { Page };