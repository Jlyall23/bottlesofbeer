const express = require('express')

const app = express()
const port = 3024

//middleware

//routes

app.get('/', (req, res) => {
    res.send('99 Bottles of beer on the wall <br> <a href="/98">Take one down, pass it around</a>');
  });

  app.get('/:number_of_bottles', (req, res) => {
    const bottles = req.params.number_of_bottles;
    const nextBottles = bottles - 1;
    if (bottles > 0) {
      res.send(`${bottles} Bottles of beer on the wall <br> <a href="/${nextBottles}">Take one down, pass it around</a>`);
    } else {
      res.send(`No more bottles of beer on the wall <br> <a href="/">Start Over</a>`);
    }
  });

//port
app.listen(port, ()=>{
    console.log(`server is listening on, ${port}`)
})







