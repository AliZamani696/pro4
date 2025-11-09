const mongoose = require("mongoose")
const port = 9090;
const connectDB = ()=>{
        mongoose.connect("mongodb://localhost:27017/ShopHub",{})
        .then(() => console.log("✅ MongoDB Connected"))
        .catch((err) => console.error("❌ MongoDB Connection Error:", err));
}
module.exports = {port,connectDB}

