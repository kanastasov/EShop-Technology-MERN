import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js';
const router = express.Router()

// @desc Fetch all products
// @route GET /all/products
// @access Public
router.get('/', asyncHandler( async(req,res) =>{
    const products = await Product.find({})
    res.json(products)
}))

// @desc Fetch a single product
// @route GET /all/products/:id
// @access Public
router.get('/:id', asyncHandler (async(req,res) =>{

    const product = await Product.findById(req.params.id)
    if(prodict) {
         res.json(product)
    }else {  
        res.status(404)
        throw new Error('Product not found')
       
    }

}))

export default router