import axios from "axios";

interface ShopifyConfig {
  storeUrl: string;
  adminKey: string;
}

export const configuration: ShopifyConfig = {
  storeUrl: process.env.SHOPIFY_ADMIN_API || '',
  adminKey: process.env.SHOPIFY_ADMIN_SECRET || '',
}

export const api = axios.create({
  baseURL: configuration.storeUrl,
  headers: {
    'X-Shopify-Access-Token': configuration.adminKey,
  }
})