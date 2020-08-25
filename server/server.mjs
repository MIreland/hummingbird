// import {createServer } from 'http';
// import { on } from 'events';
import express from 'express';

const app = express();

const port = 5000;

app.listen(port, function() {
  console.log(`listening on ${port}`)
})
app.get('/sampleAPI', (req, res) => {
  let randomList = [
    'French Toast',
    'Waffles',
    'Pancakes',
  ]

  res.send(JSON.stringify(randomList));
})




// const reqs = on(createServer().listen(5000), 'request');
// for await (const [_,res] of reqs){ //eslint-disable-line
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Request-Method', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//   res.setHeader('Access-Control-Allow-Headers', '*');
//   const data = {sample: 1}
//   res.end(JSON.stringify(data));
// }
