const mongoose = require("mongoose");









const ProductSchema = new mongoose.Schema({
       productName : {
                type: String,
                required: [true, 'Product name is required'],
                trim: true,
                maxlength: [100, 'Product name cannot exceed 100 characters']
                },
        SKU: {
                type: String,
                required: [true, 'Product SKU is required'],
                trim: true,
                maxlength: [100, 'Product SKU cannot exceed 100 characters']
                },
         productDescription: {
                type: String,
                required: [true, 'Product description is required'],
                maxlength: [1000, 'Description cannot exceed 1000 characters']
                },
          Category: {
                type: String,
                required: [true, 'Product category is required'],
                enum: {
                        values: ['electronics', 'clothing', 'home', 'books', 'beauty'],
                        message: '{VALUE} is not a valid category'
                        }
                },
          subcategory: {
                        type: String,
                enum: {
                        values: ['electronics', 'clothing', 'home', 'books', 'beauty'],
                        message: '{VALUE} is not a valid category'
                        }
                },
         Brand: {
                type: String,
                required: [true, 'Product Brand is required'],
                trim: true,
                maxlength: [100, 'Product Brand cannot exceed 100 characters']
                },
        Tags: {
                type: String,
                required: [true, 'Product Tags is required'],
                trim: true,
                maxlength: [100, 'Product Tags cannot exceed 100 characters']
                },
        Price: {
                type: Number,
                required: [true, 'Product price is required'],
                min: [0, 'Price must be a positive number']
                },
        ComparePrice: {
                type: Number,
                required: [false, 'comProduct price is required'],
                min: [0, 'comPrice must be a positive number']
                },
        Stock: {
                type: Number,
                required: true,
                min: 0,
                default: 0
                },
        lowStock:{
                type: Number,
                required: true,
                min: 0,
                default: 0
                },
        // images: [{
        //         url: String,
        //         altText: String
        //         }],
        featured: {
                type: Boolean,
                default: false
                },
        status: {
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
module.exports = mongoose.model('Product', ProductSchema);
