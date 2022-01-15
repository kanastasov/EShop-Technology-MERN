import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db.js';

import productRoutes from './routes/productRoutes.js'


dotenv.config()

connectDb()


const app = express()

app.get('/', (req,res) =>{
    res.send('API is running....');
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold ))

// added MongoDB cluster and db with compas