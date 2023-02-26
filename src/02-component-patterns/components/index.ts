export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

import { ProductCardHOCProps } from '../interfaces/productInterfaces';

import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});
