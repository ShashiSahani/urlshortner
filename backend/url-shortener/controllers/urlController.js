// Create controllers/urlController.js:

const express=require('express');

const Url=require('../models/UrlModel');
const shortid = require('shortid');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('main');
})

router.post('/api/shorten',async(req,res)=>{
    const {originalUrl}=req.body;
    // console.log(req.body)
    const shortUrl=encodeURIComponent(shortid.generate());
    console.log(shortUrl)
    const url=new Url({
        originalUrl,
        shortUrl,
    });
    await url.save();
    res.json(url);
});


router.get('/:shortUrl',async(req,res)=>{
    const {shortUrl}=req.params;
    console.log('Short URL requested:', shortUrl);
    const url=await Url.findOne({shortUrl});

    if(url){
        console.log('Redirecting to:', url.originalUrl);
        res.redirect(url.originalUrl);

    }else{
        console.log('URL not found');
        res.status(404).json({error:"URL not found"})
    }
})
//to get all data present in database 
//check in postman get method endpoint :http://localhost:5000/api/all-urls
router.get('/api/all-urls',async(req,res)=>{
    try {
        const allUrls=await Url.find();
        res.json(allUrls)
        
    } catch (error) {
        console.error('Error fetching Url:',error);
        res.status(500).json({error:"Internal Server Error"})
    }
})

module.exports=router;