import type { Request, Response } from "express";

// ** Services
import * as productsService from '../services/products.service';

export async function index(req: Request, res: Response) {
  const products = await productsService.getAll();

  res.json({
    products,
  })
}