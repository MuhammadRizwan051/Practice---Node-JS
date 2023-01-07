// console.log('first')

// Read Directory

// const fs = require('fs')

// fs.readdir('./', (err, file) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(file)
//     }
// })



// Read File

// const fs = require('fs')
// fs.readFile('./abc.txt', 'utf8', (err, file) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(file)
//     }
// })



// Write File

// const fs = require('fs')
// fs.writeFile('./abc.txt', 'Another New Text from Server.js....', (err) => {
//     if (err) {
//         console.log(err)
//     }
// })



// Edit File with previous text

// const fs = require('fs')
// fs.appendFile('./abc.txt', ' aaaaaaaaaaaaaaaaa', (err) => {
//     if (err) {
//         console.log(err)
//     }
// })




// HTTP

// const http = require('http')

// let server = http.createServer((req, res) => {
//     console.log('Server is listening ...')
// })
// server.listen(5000)



// HTTP

// const http = require('http')

// let server = http.createServer((req, res) => {
//     res.write('Server is listening again again...')
//     res.end()
// })
// server.listen(5000)






let arr = [
    {
        id: 1,
        course: 'First'
    },
    {
        id: 2,
        course: 'Second'
    },
    {
        id: 3,
        course: 'Third'
    }, 
    {
        id: 3,
        course: 'Third'
    }, 
]

const http = require('http')
let server = http.createServer((req, res) => {
    if (req.url == '/courses') {
        res.write(JSON.stringify(arr))
        res.end()
    }
    res.end()
})
server.listen(5000)


