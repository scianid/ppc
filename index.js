const http = require('http');

const server = http.createServer((req, res) => {fetch('https://moshema8.wixsite.com/ppctools/_functions/headlines')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data.html);
    }).catch(err => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    })
});

const PORT = 80;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
