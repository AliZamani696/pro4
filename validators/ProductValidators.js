const { body } = require('express-validator');



const validatorProduct = [
        body('productName')
                .trim()
                .notEmpty()
                .withMessage('Product name is required')
                .isLength({ min: 1, max: 255 })
                .withMessage('Product name must be between 1 and 255 characters')
                .escape(),
        body('SKU')
                .trim()
                .notEmpty()
                .withMessage('SKU is required')
                .isLength({ min: 1, max: 100 })
                .withMessage('SKU must be between 1 and 100 characters')
                .matches(/^[A-Za-z0-9-_]+$/)
                .withMessage('SKU can only contain letters, numbers, hyphens, and underscores')
                .escape(),
        body('productDescription')
                .trim()
                .notEmpty()
                .withMessage('Product description is required')
                .isLength({ min: 1, max: 2000 })
                .withMessage('Product description must be between 1 and 2000 characters'),
        body('Category')
                .trim()
                .notEmpty()
                .withMessage('Category is required')
                .isLength({ min: 1, max: 100 })
                .withMessage('Category must be between 1 and 100 characters')
                .escape(),
        body('subcategory')
                .optional({ checkFalsy: true })
                .trim()
                .isLength({ max: 100 })
                .withMessage('Subcategory cannot exceed 100 characters')
                .escape(),
        body('Brand')
                .trim()
                .notEmpty()
                .withMessage('Brand is required')
                .isLength({ min: 1, max: 100 })
                .withMessage('Brand must be between 1 and 100 characters')
                .escape(),
        body("Tags")
                .optional(),
        body("Price")
                .notEmpty()
                .withMessage('Price is required')
                .isFloat({ min: 5.01 })
                .withMessage('Price must be a positive number greater than 5')
                .custom((value)=>{
                        if (value.toString().split(".")?.length > 2){
                                throw new Error ('Price cannot have more than 2 decimal places');
                        }
                        return true
                }),
        body('ComparePrice')
                .optional({ checkFalsy: true })
                .isFloat({ min: 5.01 })
                .withMessage('Compare price must be a positive number')
                .custom((value,{req})=>{
                        if (value&& parseFloat(value)<=parseFloat(req.body.Price)){
                                throw new Error('Compare price must be greater than regular price');
                        }
                        return true
                }),
        body('Cost')
                .optional({ checkFalsy: true })
                .isFloat({ min: 0 })
                .withMessage('Cost must be a non-negative number'),
        body('Stock')
                .notEmpty()
                .withMessage('Stock is required')
                .isInt({ min: 0 })
                .withMessage('Stock must be a non-negative integer'),
        body('lowStock')
                .optional()
                .isInt({ min: 0 })
                .withMessage('Low stock threshold must be a non-negative integer'),

        body('Status')
                .optional()
                .isIn(['active', 'inactive', 'draft', 'archived'])
                .withMessage('Status must be one of: active, inactive, draft, archived')
]
module.exports = validatorProduct;
