const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/Search/Results?sort=relevance&bool0[]=AND&lookfor0[]=&type0[]=AllFields&lookfor0[]=&type0[]=AllFields&join=AND&filter[]=~language%3A"fin"&filter[]=~format%3A"0%2FBook%2F"&limit=20', (req, res) => {
  request(
    { url: 'https://finna.fi/Search/Results?sort=relevance&bool0%5B%5D=AND&lookfor0%5B%5D=&type0%5B%5D=AllFields&lookfor0%5B%5D=&type0%5B%5D=AllFields&join=AND&filter%5B%5D=%7Elanguage%3A%22fin%22&filter%5B%5D=%7Eformat%3A%220%2FBook%2F%22&limit=20' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));