const express = require('express');
const router = express.Router()
module.exports = router;

const catModel=require("../models/cat_M");

router.get('/Add',(req, res) => {
    res.render("catAdd", {pageTitle:"הוספת קטגוריה",
        item:{}
    });
});
router.post('/Add',(req, res) => {
    const modelData = new catModel({
        name:req.body.name
    });
    modelData.save();
    res.redirect("/C/List");
});
router.get('/List',async (req, res) => {
    let cat_data=await catModel.find();
    res.render("catList", {pageTitle:"ניהול קטגוריות",
        data:cat_data
    });
});








