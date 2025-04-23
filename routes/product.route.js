import express from 'express';
import { ProductRoute } from '../controllers/product.controller';

const app = express();
const router = express.Router();

router.get('/', ProductRoute);




