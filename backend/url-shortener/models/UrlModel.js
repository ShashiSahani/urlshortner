//  Create models/UrlModel.js:


const mongoose=require('mongoose');
const shortid=require('shortid');


const urlSchema=new mongoose.Schema({
    originalUrl:String,
    shortUrl:String,
})

const Url=mongoose.model('Url',urlSchema);

module.exports=Url;