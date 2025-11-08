const express = require("express");


const router = express.Router();

router.get("/",(req,res)=>{
        res.render("index");
});
router.get("/AllProducts",(req,res)=>{
        res.render("AllProducts")
})
router.get("/Categorys",(req,res)=>{
        res.render("Categorys")
});
router.get("/About",(req,res)=>{
        res.render("About")
});
router.get("/Contact",(req,res)=>{
        res.render("Contact")
})
router.post("/searchBar",(req,res)=>{
        console.log(req.body)
})
router.get("/Cart",(req,res)=>{
        res.render("Cart")
})
router.get("/UserInfo",(req,res)=>{
        res.render("UserInfo")
})
router.get("/AddProducts",(req,res)=>{
        res.render("AddProduct")
})
router.get("/Category",(req,res)=>{
        console.log(req.query.data)
})
module.exports = router;
