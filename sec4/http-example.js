const http = require('http')

http.request('http://www.google.com', (res) => {
    res.on('', () =>{
        console.log('hello testing http')
    })
})