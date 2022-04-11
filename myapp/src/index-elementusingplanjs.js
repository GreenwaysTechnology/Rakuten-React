//dom element using plain js 

function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello React!!!'
    //attach with exiting root
    const rootElement = document.getElementById('root')
    rootElement.appendChild(Heading)
}
createElement();