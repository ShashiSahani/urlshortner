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
    const shortUrl=shortid.generate();

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


module.exports=router;