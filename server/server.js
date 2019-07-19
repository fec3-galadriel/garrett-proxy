const express = require('express');
const proxy = require('express-http-proxy');
const app = express();


app.use('/:pid', express.static(`${__dirname}/public`));

app.use('/api/product/:id', proxy('http://127.0.0.1:3003/api/product', {
  proxyReqPathResolver: (req) => {
    console.log(req);
    return `http://127.0.0.1:3003/product/${req.url}`;
  }
}));

app.listen('3000');
