function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target) 
    // //container here represents maincontainer
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        container.appendChild(domElement)
    }
     

}
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target : "_blank"
    },
    children : "click me to visit google"
}


const maincontainer = document.querySelector('#root')


// ab hame ek method chahiye jo insert karde ye element in this root

customRender(reactElement,maincontainer)