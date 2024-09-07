const http = require('http')
const fs = require('fs')



http.createServer((req, res) => {
  let filepath
  const url = req.url
  if (url === '/favicon.ico') {
    res.writeHead(204, { 'Content-Type': 'image/x-icon' });
    return res.end(); // End response early for favicon
  }
  console.log('url',url)
   if(url === '/' || url === '/index.html' ) {
    filepath= 'index.html'
  } else if(url === '/about' || url === '/about.html') {
    filepath = 'about.html'
  } else if(url === '/contact-me' || url === '/contact-me.html' ) {
    filepath = 'contact-me.html'
  } else {
    filepath = '404.html'
  }


  
  fs.readFile(filepath,'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html' })
      res.end('<h1>Not found</h1>')
    } else {
      res.writeHead(200, {'Content-Type': 'text/html' })
      res.end(data)
    }
  })
}).listen(8080)


// I can send the data in the res.end by creating a global variable and modifying it
//I can listen for the event of changing the url and then put the if statement so that it reads the file accordingly
//I have to figure out how to show the html content in the page