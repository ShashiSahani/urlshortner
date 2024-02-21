const express=require('express');
const mongoose=require('mongoose');
const shortid=require('shortid');
const bodyParser=require('body-parser');
const urlController=require('./controllers/urlController');

const app=express();

const PORT=process.env.PORT||5000;

//connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/url-shortener-mvc',{
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.error("Error Connecting to MongoDB",error)
})


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',urlController);
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
