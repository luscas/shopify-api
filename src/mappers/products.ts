import { configuration } from "../adapters/shopify";
import { Product, ProductImage } from "../types/product";

const getProductDimensions = (value: string): Product['dimensions'] => {
  const matches = value.match(new RegExp(/([0-9]+)\s\w\s([0-9]+)\s\w\s([0-9]+)/iu));

  return {
    length: Number(matches?.at(1)),
    width: Number(matches?.at(2)),
    height: Number(matches?.at(3)),
  }
}

const getProductUrl = (value: string): Product['url'] => {
  const matches = configuration.storeUrl.match(new RegExp(/^((http|https):\/\/.*)(\/admin\/api\/)(.*)$/iu));
  const storeUrl = matches?.at(1)?.trim();

  return `${storeUrl}/products/${value}`;
}

const transformer = (items: any): Awaited<Product[]> => {
  return items?.map((item: Product) => {
    const dimensions = getProductDimensions(item.body_html);
    const url = getProductUrl((item as any).handle);

    return {
      id: item.id,
      title: item.title,
      body_html: item.body_html,
      url: url,
      dimensions: dimensions,
      images: item.images.map((image: ProductImage) => {
        return {
          id: image.id,
          product_id: image.product_id,
          alt: image.alt,
          width: image.width,
          height: image.height,
          src: image.src,
        }
      }),
    }
  });
}

export default transformer;