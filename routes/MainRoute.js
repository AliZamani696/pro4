const express = require("express");


const router = express.Router();
router.use((req, res, next) => {
        res.locals.req = req;
        res.locals.path = req.path;
        next();
});
router.get("/",(req,res)=>{

        res.render("index");
});
router.get("/AllProducts",(req,res)=>{
console.log()
        res.render("AllProducts")
});
router.get("/Categorys",(req,res)=>{
        res.render("Categorys")
});
router.get("/About",(req,res)=>{
        res.render("About")
});
router.get("/Contact",(req,res)=>{
        res.render("Contact")
});
router.post("/searchBar",(req,res)=>{
        console.log(req.body)
});
router.get("/Cart",(req,res)=>{
        res.render("Cart")
});
router.get("/UserInfo",(req,res)=>{
        res.render("UserInfo")
});
router.get("/AddProducts",(req,res)=>{
        res.render("AddProduct")
});
router.get("/Category",(req,res)=>{
        console.log(req.query.data)
});
router.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: `The requested URL ${req.originalUrl} was not found on this server.`,
  });
});

// Global error handler
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});
module.exports = router;
