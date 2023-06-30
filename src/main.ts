// ** DotEnv
import 'dotenv/config'

// ** Express
import express from 'express';

// ** Controllers
import * as productsController from './controllers/products.controller';

const app = express();

app.get('/', async (req, res) => productsController.index(req, res))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listen on port :${PORT}`));
