import express from 'express';
import {Product} from '../models/product.model'

const app = express();
const router = express.Router();

const getProducts = async (req, res) => {
    try{
        const product = await Product.find({});
        res.send(product);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export const ProductRoute = getProducts;
