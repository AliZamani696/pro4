const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
        name: {
                type: String,
                required: [true, 'Product name is required'],
                trim: true,
                maxlength: [100, 'Product name cannot exceed 100 characters']
                },
        price: {
                type: Number,
                required: [true, 'Product price is required'],
                min: [0, 'Price must be a positive number']
                },
        description: {
                type: String,
                required: [true, 'Product description is required'],
                maxlength: [1000, 'Description cannot exceed 1000 characters']
                },
        category: {
                type: String,
                required: [true, 'Product category is required'],
                enum: {
                        values: ['Electronics', 'Clothing', 'Home', 'Books', 'Beauty'],
                message: '{VALUE} is not a valid category'
                        }
                },
        stock: {
                type: Number,
                required: true,
                min: 0,
                default: 0
                },
        images: [{
                url: String,
                altText: String
                }],
        featured: {
                type: Boolean,
                default: false
                },
        rating: {
                type: Number,
                default: 0,
                min: 0,
                max: 5
                }
        },{timestamps: true});
ProductSchema.index({name:"text",description:"text"})
ProductSchema.index({category:1,price:-1})
ProductSchema.statics.getFeatured = function(){
        return this.find({featured:true})
}
module.exports = mongoose.model('Product', productSchema);
