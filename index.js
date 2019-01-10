const express=require("express")
const app = express()
// const ejs = require('ejs')

app.set("view engine", "ejs")

app.get('/', (req, res)=> {
  res.render('home')
})
app.get('/login', (req, res)=> {
  res.render('login')
})
app.get('/pricing', (req, res)=> {
  res.render('pricing')
})
app.get('/location', (req, res)=> {
  res.render('location')
})
app.get('/aboutUs', (req, res)=> {
  res.render('aboutUs')
})

app.listen(3000, () => console.log('LIVE ON 3000'));
