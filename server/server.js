const express = require('express');
const proxy = require('express-http-proxy');
const app = express();


app.use('/:pid', express.static(`./public`));

app.use('/api/photos/:id', proxy('http://127.0.0.1:3001', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `/api/photos${req.url}`;
  }
}));

app.use('/api/itemSummary/:id', proxy('http://127.0.0.1:3002', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `/api/itemSummary${req.url}`;
  }
}));

app.use('/api/product/:id', proxy('http://127.0.0.1:3003', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `/api/product${req.url}`;
  }
}));

app.use('/api/reviews/:id', proxy('http://127.0.0.1:3004', {
  proxyReqPathResolver: (req) => {
    console.log(req.url);
    return `/api/reviews${req.url}`;
  }
}));

app.listen('3000');
