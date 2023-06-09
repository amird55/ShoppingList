const express = require('express');
const router = express.Router()
module.exports = router;

const itemsModel=require("../models/item_M");
const catModel = require("../models/cat_M");

router.get('/Add',async (req, res) => {
    let cat_data=await catModel.find();

    res.render("itemAdd", {pageTitle:"הוספת פריט",
        AllCatogeries:cat_data,
        item:{}
    });
});
router.post('/Add',(req, res) => {
    if(req.body.new_catg !== "") {
        const catData = new catModel({
            name: req.body.new_catg
        });
        let res=catData.insertOne(catData);
        console.log(res);
    }
    // const modelData = new itemsModel({
    //     name:req.body.name,
    //     catg:req.body.catg
    // });
    // modelData.save();
    // res.redirect("/P/List");
});
router.get('/List',async (req, res) => {
    let cat_data=await catModel.find();
    res.render("catList", {pageTitle:"ניהול קטגוריות",
        data:cat_data
    });
});
router.get('/Edit',async (req, res) => {
    let item_data=await catModel.findById(req.query.id);
    res.render("catAdd", {pageTitle:"עריכת קטגוריה",
        item:item_data
    });
});
router.post('/Edit',async (req, res) => {
    const modelData = {
        name:req.body.name
    };
    let item_data=await catModel.findByIdAndUpdate(req.query.id,modelData);
    res.redirect("/C/List");
});
router.post('/Delete',async (req, res) => {
    let item_data=await catModel.findByIdAndDelete(req.body.id);
    res.redirect("/C/List");
});







