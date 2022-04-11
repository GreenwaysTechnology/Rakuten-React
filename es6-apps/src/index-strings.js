//  "" , '' ,``(back tick - template literal  )
let firstName = "Subramaian"
let lastName = 'Murugan'
//es 5 style of string concation
//  var fullName = firstName + lastName  //string concatation

//es 6 back tick notation ``
let fullName = ` Name => ${firstName} ${lastName}`  //string interpolation

console.log(fullName)

//multi line strings using es 5 pattern:
let title = 'Google'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)