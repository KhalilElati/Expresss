const express =require('express')
const app =express()
app.use((req, res, next) => {
    const requestDate = new Date().getHours();
    if (requestDate < 8 || requestDate > 17) {
      res.send("Our office is not open now");
    } else {
      next();
    }
  });


app.get('/home' , (req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/contact', (req,res)=>{
    res.sendFile(__dirname +'/public/contact.html')
})
app.get('/ourservices', (req,res)=>{
    res.sendFile(__dirname +'/public/ourservices.html')
})
app.listen(3000,(err)=>{
    if (err) console.log("server is not runnings")
    else console.log('server is running on port 3000')
})