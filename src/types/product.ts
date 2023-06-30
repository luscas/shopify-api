export interface ProductImage {
  id: number;
  product_id: number;
  alt: number;
  width: number;
  height: number;
  src: string;
}
export interface Product {
  id: number;
  title: string;
  body_html: string;
  url: string;
  images: ProductImage[]
  dimensions?: {
    length: number;
    width: number;
    height: number;
  }
}