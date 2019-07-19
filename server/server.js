const express = require('express');
const proxy = require('express-http-proxy');
const app = express();


app.use('/:pid', express.static(`./public`));

app.all('/api/photos/:id', proxy('http://localhost:3001', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `${req.url}`;
  }
}));

app.all('/api/itemSummary/:id', proxy('http://localhost:3002', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `${req.url}`;
  }
}));

app.all('/api/product/:id', proxy('http://localhost:3003', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `${req.url}`;
  }
}));

app.all('/api/reviews/:id', proxy('http://localhost:3004', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `${req.url}`;
  }
}));

app.listen('3000');
