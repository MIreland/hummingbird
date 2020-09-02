import express from 'express';
import Cache from 'src/server/cache';
const app = express();

app.use(express.urlencoded({ extended: true }))

const port = 5000;

const MAX_LENGTH = 1;

const cache = new Cache(MAX_LENGTH);

app.listen(port, function() {
  console.log(`listening on ${port}`)
})

app.get('/cache', (req, res) => {
  const key = req.query.key;

  const value = cache.getKey(key);

  res.send(JSON.stringify({ value }));
})

app.post('/cache', (req, res) => {
  const key = req.query.key;
  const value = req.body;
  cache.setKey(key, value);

  res.send(JSON.stringify({ code: 200 }));
})

app.delete('/cache', (req, res) => {
  const key = req.query.key;

  cache.deleteKey(key);

  res.send(JSON.stringify({ code: 200 }));
})
