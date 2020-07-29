const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const PORT = 8080

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    { name: "pistachio", price: 11, awesomeness: 15 }
  ];
app.get(`/icecream/:name`, (req, res) => {
    //When the route is hit, it will display the name, price and awesomeness for that specific ice cream.
})
app.get(`/icecream`, (req, res) => {
    //loop over all the ice creams and display them all to the user.
})
app.listen(PORT, () => console.log(`🚀 on http://localhost:${PORT}` ))