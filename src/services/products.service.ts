// ** Shopify Adapter
import { api } from "../adapters/shopify";

// ** Types
import { Product } from "../types/product";

// ** Mappers
import productsMapper from "../mappers/products";

export async function getAll(): Promise<Product[]> {
  const response = await api.get('/products.json');
  const data = (await response.data).products;

  return productsMapper(data);
}
