import express from 'express';
import mongoose from 'mongoose';
import {Product} from './models/product.model.js';
import 'dotenv/config'
// const Product = require('./models/product.model')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", productRoutes)

app.get('/', (req, res) => {
    res.send("Hello from Daniel Pahl or bakari what what")
});

mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PWD}@cluster0.z7zoqq4.mongodb.net/Node-API?retryWrites=true&w=majority`)
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log("Listening on port 3000")
    });
})
.catch(() => {
    console.log("Not Connected")
  })